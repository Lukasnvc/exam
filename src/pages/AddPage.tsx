import * as Yup from "yup";

import { Field, Form, Formik } from "formik";
import { bgColor, inputBgColor, primaryColor, shadow } from "../const/colors-shadows";

import Button from "../components/Button";
import FormikInput from "../components/FormikInput";
import { HOME_PATH } from "../routes/const";
import { Skill } from "../api/userTypes";
import { UserContext } from "../context/UserContext";
import { postContent } from "../api/contentApi";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const loginFormInitialValues: Skill = {
  title: "",
  description: "",
};

const loginValidationSchema: Yup.ObjectSchema<Skill> = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const AddPage = () => {
  const navigate = useNavigate();
  const { userToken } = useContext(UserContext);
  const handleSubmit = (skill: Skill) => {
    console.log(skill);
    postContent(skill, userToken);
    toast.success("Skill added");
    navigate(HOME_PATH);
  };
  return (
    <Wrapper>
      <Formik
        initialValues={loginFormInitialValues}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}>
        <StyledForm>
          <Title>Add skill</Title>
          <FormikInput name="title" type="text" placeholder="Title" />
          <Field name="description" as={StyledTextArea} placeholder="Description" />
          <Button isBlue type="submit">
            Add
          </Button>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};

export default AddPage;

const Wrapper = styled.div`
  width: fit-content;
  height: 70vh;
  width: 80vw;
  margin: 0 auto;
  padding: 40px;
  border: 2px solid ${primaryColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${bgColor};
  box-shadow: ${shadow};
`;

const StyledForm = styled(Form)`
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 16px;
`;

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-left: 10px;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 16px;
  border-radius: 4px;
  color: black;
  background-color: ${inputBgColor};
  padding: 10px 14px;
  border: none;
  outline: none;
`;

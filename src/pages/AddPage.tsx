import * as Yup from "yup";

import { Form, Formik } from "formik";

import Button from "../components/Button";
import FormikInput from "../components/FormikInput";
import React from "react";
import { Skill } from "../api/userTypes";
import { postContent } from "../api/contentApi";
import styled from "styled-components";

const loginFormInitialValues: Skill = {
  title: "",
  description: "",
};

const loginValidationSchema: Yup.ObjectSchema<Skill> = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const AddPage = () => {
  const userToken = JSON.parse(localStorage.getItem("userToken") || "{}");
  const handleSubmit = (skill: Skill) => {
    postContent(skill, userToken);
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
          <FormikInput name="description" type="text" placeholder="Description" />
          <BtnWrapper>
            <Button isBlue type="submit">
              Add
            </Button>
          </BtnWrapper>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};

export default AddPage;

const Wrapper = styled.div`
  width: fit-content;
  height: 350px;
  padding: 20px;
  border: 2px solid #7cb6f3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f4f4;
`;

const StyledForm = styled(Form)`
  max-width: 200px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

const StyledError = styled.p`
  font-size: 16px;
  color: red;
  text-align: center;
  margin-bottom: 8px;
`;

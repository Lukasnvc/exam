import * as Yup from "yup";

import { Form, Formik } from "formik";

import Button from "../components/Button";
import FormikInput from "../components/FormikInput";
import { IoIosCreate } from "react-icons/io";
import { LOGIN_PATH } from "../routes/const";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userRegister } from "../api/userApi";

type UserLogin = {
  email: string;
  password: string;
  confirm_password?: string;
};

const loginFormInitialValues: UserLogin = {
  email: "",
  password: "",
  confirm_password: "",
};

const loginValidationSchema: Yup.ObjectSchema<UserLogin> = Yup.object().shape({
  email: Yup.string().email("Email should contain @").required("Required"),
  password: Yup.string().required("Required"),
  confirm_password: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (user: UserLogin) => {
    delete user.confirm_password;
    console.log(user);

    try {
      const response = await userRegister(user);
      console.log(response);
    } catch (error: any) {
      setError(true);
    }
    if (!error) {
      navigate(LOGIN_PATH);
    }
  };
  return (
    <Wrapper>
      <Formik
        initialValues={loginFormInitialValues}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}>
        <StyledForm>
          <Title>
            Register <IoIosCreate />
          </Title>
          {error && <StyledError>Email is already used</StyledError>}
          <FormikInput name="email" type="email" placeholder="Enter email" />
          <FormikInput name="password" type="password" placeholder="Enter password" />
          <FormikInput name="confirm_password" type="password" placeholder="Repeat Password" />

          <BtnWrapper>
            <Button isBlue type="submit">
              Register
            </Button>
            <Button onClick={() => navigate(LOGIN_PATH)}>Login</Button>
          </BtnWrapper>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};

export default Login;

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

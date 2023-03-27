import * as Yup from "yup";

import { Form, Formik } from "formik";
import { useContext, useState } from "react";

import Button from "../components/Button";
import FormikInput from "../components/FormikInput";
import { REGISTER_PATH } from "../routes/const";
import { SlLogin } from "react-icons/sl";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api/userApi";

type UserLogin = {
  email: string;
  password: string;
};

const loginFormInitialValues: UserLogin = {
  email: "",
  password: "",
};

const loginValidationSchema: Yup.ObjectSchema<UserLogin> = Yup.object().shape({
  email: Yup.string().email("Email should contain @").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const { handleLogIn } = useContext(UserContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (user: UserLogin) => {
    try {
      const response = await userLogin(user);
      handleLogIn(response);
    } catch (error: any) {
      setError(true);
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
            Login
            <SlLogin />
          </Title>
          {error && <StyledError>Wrong password or no such user</StyledError>}
          <FormikInput name="email" type="email" placeholder="Enter email" />
          <FormikInput name="password" type="password" placeholder="Enter password" />
          <BtnWrapper>
            <Button isBlue type="submit">
              Login
            </Button>
            <Button onClick={() => navigate(REGISTER_PATH)}>Register</Button>
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

import { ErrorMessage, Field, FieldProps } from "formik";
import React, { FC } from "react";

import styled from "styled-components";

type Props = {
  name: string;
  placeholder?: string;
  type?: string;
};

const FormikInput: FC<Props> = ({ name, placeholder, type = "text" }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form }: FieldProps) => (
          <StyledInput {...field} placeholder={placeholder} type={type} />
        )}
      </Field>
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

const StyledInput = styled.input<{ error?: string }>`
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
  color: black;
  background-color: #bab8b8;
  padding: 10px 14px;
  border: none;
  outline: none;

  ${({ error }) =>
    error &&
    `
    border: 2px solid red;
  `}
`;

export default FormikInput;

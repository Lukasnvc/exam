import { ErrorMessage, Field, FieldProps } from "formik";

import { FC } from "react";
import { inputBgColor } from "../const/colors-shadows";
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
  background-color: ${inputBgColor};
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

import { bgColor, primaryColor, shadow } from "../const/colors-shadows";

import styled from "styled-components";

type Props = {
  title: string;
  description: string;
};

const Card = ({ title, description }: Props) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  padding: 20px;
  border: 2px solid ${primaryColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${bgColor};
  box-shadow: ${shadow};
  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  p {
    text-indent: 10px;
    max-height: 300px;
    overflow-x: scroll;
  }
`;

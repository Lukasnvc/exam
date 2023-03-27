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
  border: 2px solid #7cb6f3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f4f4;
`;

import Card from "../components/Card";
import { Circles } from "react-loader-spinner";
import { Skill } from "../api/userTypes";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import { useContext } from "react";
import { useGetContent } from "../hooks/useSkills";

const Home = () => {
  const { userToken } = useContext(UserContext);
  const { data, isLoading } = useGetContent(userToken);
  const skills = data || [];

  return (
    <Wrapper>
      {isLoading ? (
        <div
          style={{
            width: "100vw",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Circles
            height="80"
            width="80"
            color="#7cb6f3"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        skills.map((item: Skill, index: number) => (
          <Card key={item.title + index} title={item.title} description={item.description} />
        ))
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 30px;
`;

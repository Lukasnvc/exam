import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import { Skill } from "../api/userTypes";
import { fetchContent } from "../api/contentApi";
import styled from "styled-components";

const Home = () => {
  const [list, setList] = useState([]);
  const userToken = JSON.parse(localStorage.getItem("userToken") || "{}");
  useEffect(() => {
    fetchContent(userToken)
      .then((data) => {
        setList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userToken]);

  console.log(list);

  return (
    <Wrapper>
      {list.length > 0 &&
        list.map((item: Skill, index) => (
          <Card key={item.title + index} title={item.title} description={item.description} />
        ))}
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

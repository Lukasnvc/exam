import Navbar from "../components/Navbar";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const MainLayout = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainLayout;

const Wrapper = styled.div`
  margin-top: 100px;
`;

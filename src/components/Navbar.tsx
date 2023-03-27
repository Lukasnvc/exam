import { ADD_PATH, HOME_PATH, LOGIN_PATH, REGISTER_PATH } from "../routes/const";

import { SiCoffeescript } from "react-icons/si";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, handleLogOut } = useContext(UserContext);
  return (
    <Wrapper>
      <SiCoffeescript />
      <BtnContainer>
        {isLoggedIn ? (
          <>
            <NavItem onClick={() => navigate(HOME_PATH)}>Home</NavItem>
            <NavItem onClick={() => navigate(ADD_PATH)}>Add</NavItem>
            <NavItem onClick={handleLogOut}>LogOut</NavItem>
          </>
        ) : (
          <>
            <NavItem onClick={() => navigate(LOGIN_PATH)}>Login</NavItem>
            <NavItem onClick={() => navigate(REGISTER_PATH)}>Register</NavItem>
          </>
        )}
      </BtnContainer>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7cb6f3;
  width: 100%;
  svg {
    font-size: 1.4rem;
    margin: 0 20px;
    cursor: pointer;
    padding: 0;
    &:hover {
      color: #76800b;
    }
  }
`;

const BtnContainer = styled.div`
  margin-right: 20px;
  display: flex;
`;
const NavItem = styled.div`
  padding: 20px;
  margin: 0;
  cursor: pointer;
  &:hover {
    color: #76800b;
  }
`;

import { ADD_PATH, HOME_PATH, LOGIN_PATH, REGISTER_PATH } from "../routes/const";
import { hoverColor, primaryColor, shadow } from "../const/colors-shadows";

import { SiGithub } from "react-icons/si";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, handleLogOut } = useContext(UserContext);
  const logout = () => {
    handleLogOut();
    toast.error("Logged out");
  };
  return (
    <Wrapper>
      <StyledLink href="https://github.com/Lukasnvc/exam.git" target="blank">
        <SiGithub />
      </StyledLink>

      <BtnContainer>
        {isLoggedIn ? (
          <>
            <NavItem onClick={() => navigate(HOME_PATH)}>Home</NavItem>
            <NavItem onClick={() => navigate(ADD_PATH)}>Add</NavItem>
            <NavItem onClick={logout}>LogOut</NavItem>
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
  background-color: ${primaryColor};
  width: 100%;
  box-shadow: ${shadow};
`;

const BtnContainer = styled.div`
  margin-right: 20px;
  display: flex;
`;
const NavItem = styled.div`
  padding: 20px;
  margin: 0;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    color: ${hoverColor};
  }
`;

const StyledLink = styled.a`
  margin: 3px;
  color: black;
  cursor: pointer;
  svg {
    font-size: 1.4rem;
    margin: 0 20px;
    cursor: pointer;
    padding: 0;
    transition: 300ms;
    &:hover {
      color: ${hoverColor};
    }
  }
`;

import React from "react";
import { Navbar, NavItem, NavbarBrand } from "react-bootstrap";
import {
  Button,
  StyledNav,
  StyledContainer,
  Brand,
} from "../../styles/nav/loginStyle";

export const LoginCreateNav = () => {
  return (
    <Navbar expand="lg" variant="light" style={{ backgroundColor: "#001F3F" }}>
      {/* <StyledContainer fluid className="justify-content-between align-items-center"> */}
      <StyledContainer>
        <NavbarBrand>
          <Brand>SandalWood Clinic</Brand>
        </NavbarBrand>
        <StyledNav>
          <NavItem className="nav-item">Login</NavItem>
          <NavItem className="nav-item">Create Account</NavItem>
          <NavItem className="nav-item">About Us</NavItem>
        </StyledNav>
      </StyledContainer>
    </Navbar>
  );
};

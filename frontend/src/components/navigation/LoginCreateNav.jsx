import React from "react";
import { Navbar, NavItem, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router";
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
          <Link to="/">
          <Brand>SandalWood Clinic</Brand>
          </Link>
        </NavbarBrand>
        <StyledNav>
          <NavItem className="nav-item"><Link to="/Login">Login</Link></NavItem>
          <NavItem className="nav-item"><Link to="/create-Account">Create Account</Link></NavItem>
          <NavItem className="nav-item"><Link to="/AboutUs">About Us</Link></NavItem>
          <NavItem><Link to="/PrivacyPolicy">Privacy Policy</Link></NavItem>
        </StyledNav>
      </StyledContainer>
    </Navbar>
  );
};

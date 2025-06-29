import styled from "styled-components";
import { Nav as BootstrapNav, Container as BootstrapContainer } from "react-bootstrap";


const font = `'Montserrat', sans-serif`;


export const Button = styled.button`
  background-color: #6A9AB0;
  color: #001F3F;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${font};
  font-weight: 600;
  font-size: 16px;

  &:hover {
    background-color: #3A6D8C;
    color: #FFFFFF;
  }
`;


export const StyledContainer = styled(BootstrapContainer)`
  background-color: #001F3F;
  padding: 1rem 2rem;
  border-radius: 0;
  color: #EAD8B1;
  font-family: ${font};
`;

// Styled Nav
export const StyledNav = styled(BootstrapNav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  .nav-item {
    color: #EAD8B1;
    font-size: 16px;
    font-family: ${font};
    cursor: pointer;

    &:hover {
      color: #FFFFFF;
    }
  }
`;


export const Brand = styled.h1`
  font-family: ${font};
  color: #EAD8B1;
  font-size: 1.5rem;
  margin: 0;
`;

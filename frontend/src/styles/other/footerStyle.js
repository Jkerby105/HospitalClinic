import styled from 'styled-components';

const font = `'Montserrat', sans-serif`;

export const FooterContainer = styled.footer`
  background-color: #001f3f;
  color: #ead8b1;
  padding: 2rem 1rem;
  font-family: ${font};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterBrand = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin: 0;
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const FooterLink = styled.a`
  color: #ead8b1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const FooterCopy = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #cccccc;
`;

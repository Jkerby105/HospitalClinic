import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterBrand,
  FooterNav,
  FooterLink,
  FooterCopy,
} from '../..//styles/other/footerStyle';

export const FooterPage = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrand>SandalWood Clinic</FooterBrand>
        <FooterNav>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
        </FooterNav>
      </FooterContent>
      <FooterCopy>© {new Date().getFullYear()} SandalWood Clinic. All rights reserved.</FooterCopy>
    </FooterContainer>
  );
};

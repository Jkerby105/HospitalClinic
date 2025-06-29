import React from 'react';
import {
  ContactWrapper,
  FormContainer,
  Title,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from '../../styles/other/contactFormStyle';

export const ContactPage = () => {
  return (
    <ContactWrapper>
      <FormContainer>
        <Title>Contact Us</Title>
        <form>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" placeholder="Your name" />

          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="Your email" />

          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" rows="5" placeholder="Write your message here..." />

          <SubmitButton type="submit">Send Message</SubmitButton>
        </form>
      </FormContainer>
    </ContactWrapper>
  );
};

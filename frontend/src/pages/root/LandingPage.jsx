import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import BannerImg from "../../assets/Artboard-1-copy-6-1.png"; // Replace with your actual image path

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
`;

const ImageSection = styled.div`
  flex: 1;
  background: url(${BannerImg}) no-repeat center center;
  background-size: cover;
`;

const TextSection = styled.div`
  flex: 1;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const LoginButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  width: fit-content;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LandingPage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Wrapper>
      <ImageSection />
      <TextSection>
        <Title>Welcome to SandalWood Clinic</Title>
        <Description>
          At SandalWood Clinic, we empower wellness—one step at a time. Our
          mission is to deliver personalized, compassionate care that supports
          your mental, emotional, and physical health.
          <br />
          <br />
          With a dedicated team and a holistic approach, we blend modern
          medicine with time-honored techniques to guide you on your journey to
          healing. Whether you're here for therapy, consultations, or community
          programs, we’re with you every step of the way.
        </Description>

        <LoginButton onClick={goToLogin}>Login</LoginButton>
      </TextSection>
    </Wrapper>
  );
};

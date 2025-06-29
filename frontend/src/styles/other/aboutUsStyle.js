import styled from "styled-components";

// Fonts
const font = `'Montserrat', sans-serif`;

export const PageWrapper = styled.div`
  background-color: #001F3F;
  min-height: 100vh;
  padding: 4rem 2rem;
  color: #EAD8B1;
  font-family: ${font};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  max-width: 800px;
  background-color: #FFFFFF;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #001F3F;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #3A6D8C;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #6A9AB0;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const Highlight = styled.span`
  color: #6A9AB0;
`;

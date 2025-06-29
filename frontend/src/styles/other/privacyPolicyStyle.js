import styled from 'styled-components';

const font = `'Montserrat', sans-serif`;

export const PolicyContainer = styled.div`
  background-color: #ffffff;
  padding: 4rem 2rem;
  font-family: ${font};
  color: #001f3f;
  max-width: 900px;
  margin: 4rem auto;
  border-radius: 8px;
  background: #f9f6f1; /* lighter shade of EAD8B1 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const PolicyHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #3a6d8c;
`;

export const PolicySection = styled.section`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #6a9ab0;
`;

export const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

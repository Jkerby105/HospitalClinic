import styled from 'styled-components';

export const ErrorContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #001f3f;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding: 2rem;
`;

export const ErrorCode = styled.h1`
  font-size: 8rem;
  color: #3a6d8c;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const StyledButton = styled.button`
  background-color: #6a9ab0;
  color: #ffffff;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a6d8c;
  }
`;

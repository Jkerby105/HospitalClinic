import styled from 'styled-components';

const font = `'Montserrat', sans-serif`;

export const ContactWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  padding: 5rem 2rem 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: ${font};
`;

export const FormContainer = styled.div`
  background-color: #f4e9cd; 
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #3A6D8C;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #001F3F;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  background-color: #3A6D8C;
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #2d5b71;
  }
`;

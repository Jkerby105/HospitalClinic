import styled from 'styled-components';

export const FormWrapper = styled.form`
  max-width: 700px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #EAD8B1;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 31, 63, 0.2);
  font-family: 'Montserrat', sans-serif;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #001F3F;
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #001F3F;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #001F3F;
  color: #FFFFFF;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background-color: #3A6D8C;
  }
`;

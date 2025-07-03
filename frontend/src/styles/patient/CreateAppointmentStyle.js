import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primaryText};
`;

export const Label = styled.label`
  display: block;
  margin: 1rem 0 0.5rem;
  color: ${({ theme }) => theme.label};
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
`;

export const TimeSlots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SlotButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  background-color: ${({ $selected, theme }) => $selected ? theme.primary : theme.button};
  color: ${({ theme }) => theme.buttonText};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  height: 80px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
`;

export const TogglePickup = styled.button`
  margin: 1rem 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  text-decoration: underline;
`;

export const PickupSection = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
`;

export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
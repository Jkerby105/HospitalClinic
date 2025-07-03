import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
`;

export const Header = styled.h1`
  color: #001F3F;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

export const SideSection = styled.div`
  flex: 1;
  background: #FFFFFF;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export const Field = styled.div`
  margin-bottom: 1.2rem;
`;

export const Label = styled.span`
  display: block;
  font-weight: bold;
  color: #3A6D8C;
  margin-bottom: 0.3rem;
`;

export const Value = styled.span`
  color: #333;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: #001F3F;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #003366;
  }
`;

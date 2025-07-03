import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
`;

export const Header = styled.h1`
  font-size: 2rem;
  color: #001F3F;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Card = styled.div`
  background: #FFFFFF;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
`;

export const CardHeader = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #3A6D8C;
`;

export const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ active }) => active ? '#001F3F' : '#EAD8B1'};
  color: ${({ active }) => active ? '#FFFFFF' : '#001F3F'};
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #F5F5F5;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);

  th, td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background: #001F3F;
    color: white;
  }
`;

export const MoreInfoButton = styled.button`
  padding: 0.4rem 0.8rem;
  background: #6A9AB0;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SaveButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #1e7e34;
  }
`;

export const CancelButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #c82333;
  }
`;

export const TimeInput = styled.input`
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
  color: #333;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
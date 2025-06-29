import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  padding: 3rem;
  background-color: #F9F4EF;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
`;

export const DashboardHeader = styled.h1`
  text-align: center;
  color: #001F3F;
  margin-bottom: 2rem;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  background-color: #EAD8B1;
  border: 1px solid #ccc;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #001F3F;
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const ViewButton = styled.button`
  background-color: #001F3F;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #3A6D8C;
  }
`;

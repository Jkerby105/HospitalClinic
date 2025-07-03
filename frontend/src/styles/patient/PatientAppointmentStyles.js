import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #EAD8B1;
`;

export const LeftPanel = styled.div`
  width: 30%;
  padding: 1.5rem;
  border-right: 1px solid #6A9AB0;
  background-color: #6A9AB0;
`;

export const RightPanel = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #FFFFFF;
`;

export const Title = styled.h2`
  color: #001F3F;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 0.8rem;
  border-radius: 10px;
  margin-bottom: 0.6rem;
  background-color: ${({ isSelected }) => isSelected ? '#3A6D8C' : '#FFFFFF'};
  color: ${({ isSelected }) => isSelected ? '#FFFFFF' : '#001F3F'};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #3A6D8C;
    color: #FFFFFF;
  }
`;

export const ReportCard = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ReportRow = styled.p`
  margin-bottom: 0.8rem;
  color: #001F3F;
`;

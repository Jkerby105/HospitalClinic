import styled from 'styled-components';


const theme = {
  colors: {
    primary: '#001F3F',      
    secondary: '#3A6D8C',   
    accent: '#6A9AB0',       
    text: '#001F3F',         
    textMuted: '#3A6D8C',    
    background: '#FFFFFF',  
    backgroundLight: '#F9F9F9', 
    border: '#EAD8B1',       
    error: '#DC3545',        
    errorDark: '#C82333',
  },
  shadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  shadowLight: '0 2px 4px rgba(0, 0, 0, 0.05)',
};

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 20px;
  padding: 20px;
  background-color: ${theme.colors.background};
  min-height: 100vh;
`;

export const InfoCard = styled.div`
  background-color: ${theme.colors.backgroundLight};
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${theme.shadow};
  border: 1px solid ${theme.colors.border};
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 15px;
  border-bottom: 2px solid ${theme.colors.accent};
  padding-bottom: 5px;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
  margin-bottom: 8px;
  line-height: 1.4;

  strong {
    color: ${theme.colors.primary};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: flex-start; 
  flex-wrap: wrap; 
`;

export const ActionButton = styled.button`
  background-color: ${props => 
    props.variant === 'danger' ? theme.colors.error : 
    props.variant === 'secondary' ? theme.colors.backgroundLight : 
    theme.colors.accent};
  color: ${props => 
    props.variant === 'secondary' ? theme.colors.text : 
    'white'};
  padding: 10px 20px;
  border: ${props => props.variant === 'secondary' ? `1px solid ${theme.colors.accent}` : 'none'};
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => 
      props.variant === 'danger' ? theme.colors.errorDark : 
      props.variant === 'secondary' ? theme.colors.border : 
      theme.colors.secondary}; 
  }
`;

export const AppointmentCard = styled.div`
  background-color: ${theme.colors.background}; 
  padding: 15px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadowLight};
  margin-top: 15px;
`;

export const EmptyStateText = styled.p`
  color: ${theme.colors.textMuted};
  font-style: italic;
  font-size: 1rem;
  text-align: center;
  padding: 20px;
`;
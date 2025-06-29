import React from 'react';
// import { useNavigate } from 'react-router-dom';
import {
  ErrorContainer,
  ErrorCode,
  ErrorMessage,
  StyledButton,
} from '../../styles/other/errorStyle';

export const ErrorPage = () => {
  // const navigate = useNavigate();

  return (
    <ErrorContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Oops! Page Not Found</ErrorMessage>
      {/* <StyledButton onClick={() => navigate('/')}> */}
      <StyledButton>
        Go to Home
      </StyledButton>
    </ErrorContainer>
  );
};

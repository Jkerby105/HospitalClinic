import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  FormWrapper,
  InputGroup,
  Label,
  Input,
  SubmitButton,
  FormTitle,
} from '../../styles/admin/createAccountsStyle'; // adjust the path if needed
import { AuthStore } from '../../store/AuthStore';

export const LoginPage = () => {
  const navigate = useNavigate();
  const {login} = AuthStore();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log('Logging in with:', credentials);
    const role =  await login(credentials);
    console.log("User role after login:", role + "---------------------------------------------------------");
  
    switch(role){
      case "ROLE_PATIENT":
        navigate('/patient');
        break;
      case "ROLE_ADMIN":
        navigate('/admin');
        break;
      case "ROLE_DOCTOR":
        navigate('/doctor');
        break;
        case "ROLE_PATIENTDRIVER":
        navigate('/patientdriver');
        break;
      default:
        console.error("Unknown role:", role);
        break;
    }
    

    //  navigate('/patient'); 

  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>Login</FormTitle>

      <InputGroup>
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <SubmitButton type="submit">Login</SubmitButton>
    </FormWrapper>
  );
};




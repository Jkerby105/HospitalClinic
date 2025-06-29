import React, { useState } from 'react';
import {
  FormWrapper,
  InputGroup,
  Label,
  Input,
  SubmitButton,
  FormTitle,
} from '../../styles/admin/createAccountsStyle'; // adjust the path if needed

export const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Logging in with:', credentials);

    // TODO: Replace with actual POST request to backend (e.g., /login endpoint)
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(credentials),
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log('Login success:', data);
    //   // Handle login state (token, redirect, etc.)
    // })
    // .catch(err => {
    //   console.error('Login error:', err);
    // });
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




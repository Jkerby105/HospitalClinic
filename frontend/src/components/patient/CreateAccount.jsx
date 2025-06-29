import React, { useState } from 'react';
import {
  FormWrapper,
  InputGroup,
  Label,
  Input,
  TextArea,
  Select,
  SubmitButton,
  FormTitle,
} from '../../styles/patient/patientFormStyle';

export const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    sex: '',
    medicalHistory: '',
    phoneNumber: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can POST this data to your backend here
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>Create Patient</FormTitle>

      <InputGroup>
        <Label>First Name *</Label>
        <Input type="text" name="firstName" required onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>Last Name *</Label>
        <Input type="text" name="lastName" required onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>Age</Label>
        <Input type="number" name="age" onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>Sex</Label>
        <Select name="sex" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Select>
      </InputGroup>

      <InputGroup>
        <Label>Medical History</Label>
        <TextArea name="medicalHistory" rows="4" onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>Phone Number *</Label>
        <Input type="tel" name="phoneNumber" required onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>Email *</Label>
        <Input type="email" name="email" required onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>Street</Label>
        <Input type="text" name="street" onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>City</Label>
        <Input type="text" name="city" onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>State</Label>
        <Input type="text" name="state" onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>Zip Code</Label>
        <Input type="text" name="zipCode" onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>Username *</Label>
        <Input type="text" name="username" required onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>Password *</Label>
        <Input type="password" name="password" required onChange={handleChange} />
      </InputGroup>

      <SubmitButton type="submit">Create Patient</SubmitButton>
    </FormWrapper>
  );
};

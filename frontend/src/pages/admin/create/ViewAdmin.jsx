import React, { useState, useEffect } from 'react';
import {
  FormWrapper,
  FormTitle,
  InputGroup,
  Label,
  Input,
  SubmitButton,
} from '../../../styles/patient/patientFormStyle';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const CancelButton = styled(SubmitButton)`
  background-color: #ccc;
  color: #001F3F;

  &:hover {
    background-color: #aaa;
  }
`;

export const ViewAdmin = () => {
  // Dummy admin data; replace with fetched API data
  const [admin, setAdmin] = useState({
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    phoneNumber: '123-456-7890',
    email: 'jane.doe@example.com',
    username: 'adminJane',
    password: '********',
    isActive: true,
  });

  const [formData, setFormData] = useState({ ...admin });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch admin data here if needed
    // setAdmin(fetchedData);
    // setFormData(fetchedData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(admin);
    setIsEditing(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Submit formData to backend here
    console.log('Updated Data:', formData);
    setAdmin(formData);
    setIsEditing(false);
  };

  return (
    <FormWrapper onSubmit={handleUpdate}>
      <FormTitle>Admin Profile</FormTitle>

      <InputGroup>
        <Label>ID</Label>
        <Input name="id" value={formData.id} readOnly />
      </InputGroup>

      <InputGroup>
        <Label>First Name</Label>
        <Input
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Last Name</Label>
        <Input
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Phone Number</Label>
        <Input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Username</Label>
        <Input
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Password</Label>
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Status</Label>
        <Input
          name="isActive"
          value={formData.isActive ? 'Active' : 'Inactive'}
          readOnly
        />
      </InputGroup>

      {!isEditing ? (
        <SubmitButton type="button" onClick={handleEdit}>
          Edit
        </SubmitButton>
      ) : (
        <ButtonGroup>
          <SubmitButton type="submit">Update</SubmitButton>
          <CancelButton type="button" onClick={handleCancel}>
            Cancel
          </CancelButton>
        </ButtonGroup>
      )}
    </FormWrapper>
  );
};



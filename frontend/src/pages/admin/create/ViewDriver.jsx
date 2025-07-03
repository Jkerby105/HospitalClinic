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

export const ViewDriver = () => {
  const [driver, setDriver] = useState({
    id: 1,
    firstName: 'Liam',
    lastName: 'Carter',
    phoneNumber: '555-222-7890',
    email: 'liam.carter@transportcare.com',
    username: 'liam.carter',
    password: '********',
    driverImageName: 'driver_image.jpg',
    driverImageType: 'image/jpeg',
    licenseImageName: 'license_image.jpg',
    licenseImageType: 'image/jpeg',
    isActive: true,
  });

  const [formData, setFormData] = useState({ ...driver });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch driver profile from backend
    // setDriver(fetchedData);
    // setFormData(fetchedData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setFormData(driver);
    setIsEditing(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Updated Driver:', formData);
    setDriver(formData);
    setIsEditing(false);
  };

  return (
    <FormWrapper onSubmit={handleUpdate}>
      <FormTitle>Patient Driver Profile</FormTitle>

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
        <Label>Driver Image Name</Label>
        <Input
          name="driverImageName"
          value={formData.driverImageName}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Driver Image Type</Label>
        <Input
          name="driverImageType"
          value={formData.driverImageType}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>License Image Name</Label>
        <Input
          name="licenseImageName"
          value={formData.licenseImageName}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>License Image Type</Label>
        <Input
          name="licenseImageType"
          value={formData.licenseImageType}
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


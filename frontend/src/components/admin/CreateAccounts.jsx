import React, { useState } from 'react';
import {
  FormWrapper,
  FormTitle,
  InputGroup,
  Label,
  Input,
  TextArea,
  Select,
  SubmitButton
} from '../../styles/admin/createAccountsStyle';

export const CreateAccounts = () => {
  const [entityType, setEntityType] = useState('admin');
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting ${entityType}:`, formData);
    // Send data to backend
  };

  const renderFields = () => {
    switch (entityType) {
      case 'admin':
        return (
          <>
            <InputGroup>
              <Label>First Name *</Label>
              <Input name="firstName" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Last Name *</Label>
              <Input name="lastName" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Phone Number *</Label>
              <Input name="phoneNumber" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Email *</Label>
              <Input name="email" type="email" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Username *</Label>
              <Input name="username" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Password *</Label>
              <Input name="password" type="password" required onChange={handleChange} />
            </InputGroup>
          </>
        );
      case 'doctor':
        return (
          <>
            <InputGroup>
              <Label>First Name *</Label>
              <Input name="firstName" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Last Name *</Label>
              <Input name="lastName" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Phone Number</Label>
              <Input name="phoneNumber" onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Email *</Label>
              <Input name="email" type="email" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Credentials *</Label>
              <Input name="credentials" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Specialization *</Label>
              <Input name="specialization" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Username *</Label>
              <Input name="username" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Password *</Label>
              <Input name="password" type="password" required onChange={handleChange} />
            </InputGroup>
          </>
        );
      case 'driver':
        return (
          <>
            <InputGroup>
              <Label>First Name *</Label>
              <Input name="firstName" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Last Name *</Label>
              <Input name="lastName" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Phone Number *</Label>
              <Input name="phoneNumber" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Email *</Label>
              <Input name="email" type="email" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Username *</Label>
              <Input name="username" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Password *</Label>
              <Input name="password" type="password" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Driver Image *</Label>
              <Input name="driverImage" type="file" accept="image/*" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>License Image *</Label>
              <Input name="licenseImage" type="file" accept="image/*" required onChange={handleChange} />
            </InputGroup>
          </>
        );
      case 'vehicle':
        return (
          <>
            <InputGroup>
              <Label>Make *</Label>
              <Input name="make" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Model *</Label>
              <Input name="model" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>License Plate *</Label>
              <Input name="licensePlate" required onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label>Vehicle Image *</Label>
              <Input name="vehicleImage" type="file" accept="image/*" required onChange={handleChange} />
            </InputGroup>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>Create {entityType.charAt(0).toUpperCase() + entityType.slice(1)}</FormTitle>
      <InputGroup>
        <Label>Select Entity Type</Label>
        <Select value={entityType} onChange={(e) => setEntityType(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="driver">Driver</option>
          <option value="vehicle">Vehicle</option>
        </Select>
      </InputGroup>
      {renderFields()}
      <SubmitButton type="submit">Create</SubmitButton>
    </FormWrapper>
  );
}
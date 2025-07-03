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

export const ViewVehicle = () => {
  const [vehicle, setVehicle] = useState({
    id: 1,
    make: 'Toyota',
    model: 'Corolla',
    licensePlate: 'ABC-1234',
    imageName: 'toyota.jpg',
    imageType: 'image/jpeg',
    imageData: '', // We'll treat this as base64 or placeholder string
    isActive: true,
  });

  const [formData, setFormData] = useState({ ...vehicle });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch vehicle data from backend and set
    // setVehicle(fetchedVehicle);
    // setFormData(fetchedVehicle);
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
    setFormData(vehicle);
    setIsEditing(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Submit formData to backend
    console.log('Updated Vehicle:', formData);
    setVehicle(formData);
    setIsEditing(false);
  };

  return (
    <FormWrapper onSubmit={handleUpdate}>
      <FormTitle>Vehicle Profile</FormTitle>

      <InputGroup>
        <Label>ID</Label>
        <Input name="id" value={formData.id} readOnly />
      </InputGroup>

      <InputGroup>
        <Label>Make</Label>
        <Input
          name="make"
          value={formData.make}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Model</Label>
        <Input
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>License Plate</Label>
        <Input
          name="licensePlate"
          value={formData.licensePlate}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Image Name</Label>
        <Input
          name="imageName"
          value={formData.imageName}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </InputGroup>

      <InputGroup>
        <Label>Image Type</Label>
        <Input
          name="imageType"
          value={formData.imageType}
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

      <InputGroup>
        <Label>Image Preview</Label>
        {formData.imageData ? (
          <img
            src={`data:${formData.imageType};base64,${formData.imageData}`}
            alt="Vehicle"
            style={{
              width: '100%',
              maxHeight: '250px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginTop: '0.5rem',
            }}
          />
        ) : (
          <p>No image available</p>
        )}
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



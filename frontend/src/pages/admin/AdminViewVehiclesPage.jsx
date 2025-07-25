

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormTitle, SubmitButton } from '../../styles/patient/patientFormStyle';
import { useNavigate } from 'react-router';

const VehicleTable = styled.table`
  width: 100%;
  margin: 2rem auto;
  border-collapse: collapse;
  font-family: 'Montserrat', sans-serif;
  max-width: 1000px;
  background-color: #F5F5F5;
  box-shadow: 0 0 10px rgba(0, 31, 63, 0.2);
`;

const TableHeader = styled.th`
  background-color: #001F3F;
  color: white;
  padding: 1rem;
  text-align: left;
`;

const TableData = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Image = styled.img`
  width: 100px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  color: white;

  ${({ type }) =>
    type === 'edit'
      ? `background-color: #0074D9;`
      : `background-color: #FF4136;`}

  &:hover {
    opacity: 0.9;
  }
`;

export const AdminViewVehiclesPage = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch('/api/vehicles'); // Replace with your actual endpoint
        const data = await res.json();
        setVehicles(data);
      } catch (err) {
        console.error('Error fetching vehicles:', err);
      }
    };
    fetchVehicles();
  }, []);

  const renderImage = (imageName) => {
    return imageName ? (
      <Image loading="lazy" src={`/api/vehicles/image/${imageName}`} alt="Vehicle" />
    ) : (
      '-'
    );
  };

  const handleEdit = (id) => {
    console.log('Edit vehicle ID:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete vehicle ID:', id);
  };

  return (
    <div>
      <FormTitle>Vehicle List</FormTitle>

      <VehicleTable>
        <thead>
          <tr>
            <TableHeader>Make</TableHeader>
            <TableHeader>Model</TableHeader>
            <TableHeader>License Plate</TableHeader>
            <TableHeader>Image</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {vehicles.length === 0 ? (
            <tr>
              <TableData colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>
                No vehicles found.
              </TableData>
            </tr>
          ) : (
            vehicles.map((vehicle, index) => (
              <tr key={vehicle.id || index}>
                <TableData>{vehicle.make}</TableData>
                <TableData>{vehicle.model}</TableData>
                <TableData>{vehicle.licensePlate}</TableData>
                <TableData>{renderImage(vehicle.imageName)}</TableData>
                <TableData>
                  <ButtonGroup>
                    <ActionButton type="edit" onClick={() => handleEdit(vehicle.id)}>Edit</ActionButton>
                    <ActionButton type="delete" onClick={() => handleDelete(vehicle.id)}>Delete</ActionButton>
                  </ButtonGroup>
                </TableData>
              </tr>
            ))
          )}
        </tbody>
      </VehicleTable>

      <div style={{ maxWidth: '1000px', margin: '2rem auto' }}>
        <SubmitButton onClick={() => navigate('/admin/create-accounts')}>
          Add New Vehicle
        </SubmitButton>
      </div>
    </div>
  );
};

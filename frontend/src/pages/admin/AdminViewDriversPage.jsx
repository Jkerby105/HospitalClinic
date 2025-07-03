import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormTitle, SubmitButton } from '../../styles/patient/patientFormStyle';

const DriverTable = styled.table`
  width: 100%;
  margin: 2rem auto;
  border-collapse: collapse;
  font-family: 'Montserrat', sans-serif;
  max-width: 1200px;
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
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
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

export const AdminViewDriversPage = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await fetch('/api/patient-drivers'); // Adjust this endpoint
        const data = await res.json();
        setDrivers(data);
      } catch (err) {
        console.error('Error fetching patient drivers:', err);
      }
    };
    fetchDrivers();
  }, []);

  const renderImage = (imageName) => {
    return imageName ? (
      <Image loading="lazy" src={`/api/patient-drivers/image/${imageName}`} alt="Driver" />
    ) : (
      '-'
    );
  };

  const handleEdit = (id) => {
    console.log('Edit driver ID:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete driver ID:', id);
  };

  return (
    <div>
      <FormTitle>Patient Drivers</FormTitle>

      <DriverTable>
        <thead>
          <tr>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Driver Image</TableHeader>
            <TableHeader>License Image</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {drivers.length === 0 ? (
            <tr>
              <TableData colSpan="7" style={{ textAlign: 'center', padding: '2rem' }}>
                No patient drivers found.
              </TableData>
            </tr>
          ) : (
            drivers.map((driver, index) => (
              <tr key={driver.id || index}>
                <TableData>{driver.firstName}</TableData>
                <TableData>{driver.lastName}</TableData>
                <TableData>{driver.phoneNumber}</TableData>
                <TableData>{driver.email}</TableData>
                <TableData>{renderImage(driver.driverImageName)}</TableData>
                <TableData>{renderImage(driver.licenseImageName)}</TableData>
                <TableData>
                  <ButtonGroup>
                    <ActionButton type="edit" onClick={() => handleEdit(driver.id)}>Edit</ActionButton>
                    <ActionButton type="delete" onClick={() => handleDelete(driver.id)}>Delete</ActionButton>
                  </ButtonGroup>
                </TableData>
              </tr>
            ))
          )}
        </tbody>
      </DriverTable>

      <div style={{ maxWidth: '1200px', margin: '2rem auto' }}>
        <SubmitButton onClick={() => console.log('Redirect to new driver form')}>
          Add New Driver
        </SubmitButton>
      </div>
    </div>
  );
};


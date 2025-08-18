
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  FormTitle,
  SubmitButton
} from '../../styles/patient/patientFormStyle';
import { useNavigate } from 'react-router';
import { AdminStore } from '../../store/AdminStore';

const DoctorTable = styled.table`
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

  ${({ type }) => {
    switch (type) {
      case 'edit':
        return 'background-color: #0074D9;';
      case 'deactivate':
        return 'background-color: #FF851B;';
      case 'info':
        return 'background-color: #2ECC40;';
      default:
        return 'background-color: #FF4136;';
    }
  }}

  &:hover {
    opacity: 0.9;
  }
`;

export const AdminViewDoctorPage = () => {
  const navigate = useNavigate();
  // const [doctors, setDoctors] = useState([]);
  const { getAllDoctors, doctors} = AdminStore();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // const res = await fetch('/api/doctors');
         await getAllDoctors();
        // const data = await res.json();
        // setDoctors(data);
      } catch (err) {
        console.error('Error fetching doctors:', err);
      }
    };
    fetchDoctors();
  }, []);


  const handleEdit = (doctorId) => {
    console.log("Edit doctor with ID:", doctorId);
    // navigate(`/admin/edit-account/${doctorId}?&role=admin`);
    navigate(`/edit-account/${doctorId}?&role=doctor`);
  }

  const handleDelete = (id) => {
    console.log('Delete doctor ID:', id);
  };

  const handleDeactivate = (id) => {
    console.log('Deactivate doctor ID:', id);
  };

  const handleInfo = (id) => {
    console.log('Info for doctor ID:', id);
  };

  return (
    <div>
      <FormTitle>Doctor List</FormTitle>

      <DoctorTable>
        <thead>
          <tr>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Credentials</TableHeader>
            <TableHeader>Specialization</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <TableData>{doctor.firstName}</TableData>
              <TableData>{doctor.lastName}</TableData>
              <TableData>{doctor.phoneNumber || '-'}</TableData>
              <TableData>{doctor.email}</TableData>
              <TableData>{doctor.credentials}</TableData>
              <TableData>{doctor.specialization}</TableData>
              <TableData>
                <ButtonGroup>
                  <ActionButton type="edit" onClick={() => handleEdit(doctor.id)}>Edit</ActionButton>
                  {/* {doctor.isActive && (
                    <ActionButton type="deactivate" onClick={() => handleDeactivate(doctor.id)}>Deactivate</ActionButton>
                  )}
                  <ActionButton type="info" onClick={() => handleInfo(doctor.id)}>Info</ActionButton>
                  <ActionButton type="delete" onClick={() => handleDelete(doctor.id)}>Delete</ActionButton> */}
                </ButtonGroup>
              </TableData>
            </tr>
          ))}
        </tbody>
      </DoctorTable>

      <div style={{ maxWidth: '1000px', margin: '2rem auto' }}>
        <SubmitButton onClick={() => navigate('/admin/create-accounts')}>
          Add New Doctor
        </SubmitButton>
      </div>
    </div>
  );
};

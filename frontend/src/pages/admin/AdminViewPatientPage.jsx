
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TableWrapper = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  max-width: 95%;
  background: #F8F4E3;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Montserrat', sans-serif;
`;

const Th = styled.th`
  background-color: #001F3F;
  color: white;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  margin: 0 0.25rem;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ type }) =>
    type === 'view' ? '#3A6D8C' :
    type === 'edit' ? '#FFC107' :
    type === 'delete' ? '#DC3545' :
    '#6c757d'};

  &:hover {
    opacity: 0.85;
  }
`;

export const AdminViewPatientPage = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.error('Error fetching patients:', err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      axios.delete(`/api/patients/${id}`)
        .then(() => setPatients(prev => prev.filter(p => p.id !== id)))
        .catch(err => console.error('Delete error:', err));
    }
  };

  const headers = [
    'First Name', 'Last Name', 'Age', 'Sex', 'Medical History',
    'Phone', 'Email', 'Street', 'City', 'State', 'Zip Code', 'Actions'
  ];

  return (
    <TableWrapper>
      <h2 style={{ textAlign: 'center', color: '#001F3F' }}>Patient List</h2>
      <Table>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <Th key={idx}>{header}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {patients.map((p) => (
            <tr key={p.id}>
              <Td>{p.firstName}</Td>
              <Td>{p.lastName}</Td>
              <Td>{p.age}</Td>
              <Td>{p.sex}</Td>
              <Td>{p.medicalHistory}</Td>
              <Td>{p.phoneNumber}</Td>
              <Td>{p.email}</Td>
              <Td>{p.street}</Td>
              <Td>{p.city}</Td>
              <Td>{p.state}</Td>
              <Td>{p.zipCode}</Td>
              <Td>
                <ActionButton type="view" onClick={() => navigate(`/admin/patient/view/${p.id}`)}>View</ActionButton>
                <ActionButton type="edit" onClick={() => navigate(`/admin/patient/edit/${p.id}`)}>Edit</ActionButton>
                <ActionButton type="delete" onClick={() => handleDelete(p.id)}>Delete</ActionButton>
              </Td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </TableWrapper>
  );
};



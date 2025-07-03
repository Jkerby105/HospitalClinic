import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  FormTitle,
  SubmitButton
} from '../../styles/patient/patientFormStyle';

const AppointmentTable = styled.table`
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

const TableContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
  margin: 0 auto;
  max-width: 900px;
  border-radius: 8px;
`;


const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto;
  flex-wrap: wrap;
  max-width: 1000px;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
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

export const AdminViewAppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentStatus, setAppointmentStatus] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch('/api/appointments'); // Adjust endpoint
        const data = await res.json();
        setAppointments(data);
        setFilteredAppointments(data);
      } catch (err) {
        console.error('Error fetching appointments:', err);
      }
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    let filtered = appointments;

    if (appointmentType) {
      filtered = filtered.filter(app => app.appointmentType === appointmentType);
    }

    if (appointmentStatus) {
      filtered = filtered.filter(app => app.status === appointmentStatus);
    }

    setFilteredAppointments(filtered);
  }, [appointmentType, appointmentStatus, appointments]);

  const handleEdit = (id) => {
    console.log('Edit appointment ID:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete appointment ID:', id);
  };

  return (
    <div>
      <FormTitle>Appointment List</FormTitle>

      <FiltersContainer>
        <FilterSelect value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
          <option value="">All Types</option>
          <option value="WALK_IN">Walk-in</option>
          <option value="SCHEDULED">Scheduled</option>
        </FilterSelect>

        <FilterSelect value={appointmentStatus} onChange={(e) => setAppointmentStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="CANCELLED">Cancelled</option>
          <option value="PENDING">Pending</option>
          <option value="COMPLETED">Completed</option>
          <option value="NO_SHOW">No Show</option>
        </FilterSelect>
      </FiltersContainer>

        <TableContainer>
      <AppointmentTable>
        <thead>
          <tr>
            <TableHeader>Patient</TableHeader>
            <TableHeader>Doctor</TableHeader>
            <TableHeader>Pickup Time</TableHeader>
            <TableHeader>End Time</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <TableData>{appointment.patient?.firstName} {appointment.patient?.lastName}</TableData>
              <TableData>{appointment.doctor?.firstName} {appointment.doctor?.lastName}</TableData>
              <TableData>{new Date(appointment.pickupDateTime).toLocaleString()}</TableData>
              <TableData>{new Date(appointment.endTime).toLocaleString()}</TableData>
              <TableData>{appointment.appointmentType}</TableData>
              <TableData>{appointment.status}</TableData>
              <TableData>
                <ButtonGroup>
                  <ActionButton type="edit" onClick={() => handleEdit(appointment.id)}>Edit</ActionButton>
                  <ActionButton type="delete" onClick={() => handleDelete(appointment.id)}>Delete</ActionButton>
                </ButtonGroup>
              </TableData>
            </tr>
          ))}
        </tbody>
      </AppointmentTable>
        </TableContainer>

      <div style={{ maxWidth: '1000px', margin: '2rem auto' }}>
        <SubmitButton onClick={() => console.log('Redirect to new appointment form')}>
          Add New Appointment
        </SubmitButton>
      </div>
    </div>
  );
};

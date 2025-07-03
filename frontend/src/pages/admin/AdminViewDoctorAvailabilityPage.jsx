import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  FormTitle
} from '../../styles/patient/patientFormStyle';

const AvailabilityTable = styled.table`
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

export const AdminViewDoctorAvailabilityPage = () => {
  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const res = await fetch('/api/doctor-availability'); // Adjust endpoint
        const data = await res.json();
        setAvailabilities(data);
      } catch (err) {
        console.error('Error fetching doctor availability:', err);
      }
    };
    fetchAvailability();
  }, []);

  return (
    <div>
      <FormTitle>Doctor Availability</FormTitle>

      <AvailabilityTable>
        <thead>
          <tr>
            <TableHeader>Doctor</TableHeader>
            <TableHeader>Day</TableHeader>
            <TableHeader>Start Time</TableHeader>
            <TableHeader>End Time</TableHeader>
          </tr>
        </thead>
        <tbody>
          {availabilities.map((entry, index) => (
            <tr key={index}>
              <TableData>{entry.doctor?.firstName} {entry.doctor?.lastName}</TableData>
              <TableData>{entry.dayOfWeek || '-'}</TableData>
              <TableData>{entry.startTime || '-'}</TableData>
              <TableData>{entry.endTime || '-'}</TableData>
            </tr>
          ))}
        </tbody>
      </AvailabilityTable>
    </div>
  );
};

import React, { useState } from 'react';
import AppointmentList from '../../components/patient/AppointmentList';
import AppointmentReport from '../../components/patient/AppointmentReport';
import { Container, LeftPanel, RightPanel, Title } from '../../styles/patient/PatientAppointmentStyles';

const dummyAppointments = [
  {
    id: 1,
    doctorName: 'Dr. Smith',
    date: '2025-06-01',
    time: '10:00 AM',
    reason: 'Follow-up',
    status: 'Completed',
    notes: 'Patient progressing well, continue meds.',
  },
  {
    id: 2,
    doctorName: 'Dr. Johnson',
    date: '2025-06-10',
    time: '02:00 PM',
    reason: 'Routine Checkup',
    status: 'Completed',
    notes: 'Vitals normal. No concerns.',
  },
];

export const PatientPastAppointmentPage  = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(dummyAppointments[0]);

  return (
    <Container>
      <LeftPanel>
        <Title>Past Appointments</Title>
        <AppointmentList
          appointments={dummyAppointments}
          selectedId={selectedAppointment?.id}
          onSelect={setSelectedAppointment}
        />
      </LeftPanel>
      <RightPanel>
        <Title>Appointment Report</Title>
        <AppointmentReport appointment={selectedAppointment} />
      </RightPanel>
    </Container>
  );
};


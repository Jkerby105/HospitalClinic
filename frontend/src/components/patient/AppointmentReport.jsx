import React from 'react';
import { ReportCard, ReportRow } from '../../styles/patient/PatientAppointmentStyles';

const AppointmentReport = ({ appointment }) => {
  if (!appointment) return <p>No appointment selected.</p>;

  return (
    <ReportCard>
      <ReportRow><strong>Doctor:</strong> {appointment.doctorName}</ReportRow>
      <ReportRow><strong>Date:</strong> {appointment.date}</ReportRow>
      <ReportRow><strong>Time:</strong> {appointment.time}</ReportRow>
      <ReportRow><strong>Reason:</strong> {appointment.reason}</ReportRow>
      <ReportRow><strong>Status:</strong> {appointment.status}</ReportRow>
      <ReportRow><strong>Notes:</strong> {appointment.notes}</ReportRow>
    </ReportCard>
  );
};

export default AppointmentReport;

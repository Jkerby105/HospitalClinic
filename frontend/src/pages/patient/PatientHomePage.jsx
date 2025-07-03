import React, { useState } from 'react';
import {
  DashboardContainer,
  InfoCard,
  SectionTitle,
  InfoText,
  ButtonRow,
  ActionButton,
  AppointmentCard,
  EmptyStateText,
} from '../../styles/patient/PatientDashboard';

// Dummy data outside component
const dummyPatient = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 45,
  sex: 'Female',
  phoneNumber: '555-123-4567',
  email: 'jane.smith@example.com',
  street: '456 Elm Street',
  city: 'Springfield',
  state: 'IL',
  zipCode: '62704',
  medicalHistory: 'Diabetes, Hypertension',
};

const dummyAppointment = {
  pickupDateTime: '2025-07-01T10:30:00Z',
  doctorName: 'Johnson',
  reasonForVisit: 'Routine check-up',
};

export const PatientHomePage = () => {
  const [patient, setPatient] = useState(dummyPatient);
  const [upcomingAppointment, setUpcomingAppointment] = useState(dummyAppointment);

  const handleUpdate = () => {
    alert('Update patient info (functionality not implemented)');
  };

  const handleDelete = () => {
    alert('Delete patient record (functionality not implemented)');
  };

  return (
    <DashboardContainer>
      {/* Patient Info Section */}
      <InfoCard>
        <SectionTitle>Patient Info</SectionTitle>
        {patient ? (
          <>
            <InfoText><strong>Name:</strong> {patient.firstName} {patient.lastName}</InfoText>
            <InfoText><strong>Age:</strong> {patient.age}</InfoText>
            <InfoText><strong>Sex:</strong> {patient.sex}</InfoText>
            <InfoText><strong>Phone:</strong> {patient.phoneNumber}</InfoText>
            <InfoText><strong>Email:</strong> {patient.email}</InfoText>
            <InfoText><strong>Address:</strong> {patient.street}, {patient.city}, {patient.state} {patient.zipCode}</InfoText>
            <InfoText><strong>Medical History:</strong> {patient.medicalHistory || 'None provided'}</InfoText>
            <ButtonRow>
              <ActionButton onClick={handleUpdate}>Update Info</ActionButton>
              <ActionButton variant="danger" onClick={handleDelete}>Delete</ActionButton>
            </ButtonRow>
          </>
        ) : (
          <EmptyStateText>Loading patient information...</EmptyStateText>
        )}
      </InfoCard>

      {/* Appointments Section */}
      <InfoCard>
        <SectionTitle>Upcoming Appointment</SectionTitle>
        {upcomingAppointment ? (
          <AppointmentCard>
            <InfoText><strong>Date:</strong> {new Date(upcomingAppointment.pickupDateTime).toLocaleString()}</InfoText>
            <InfoText><strong>Doctor:</strong> Dr. {upcomingAppointment.doctorName}</InfoText>
            <InfoText><strong>Reason:</strong> {upcomingAppointment.reasonForVisit}</InfoText>
          </AppointmentCard>
        ) : (
          <EmptyStateText>You have no upcoming appointments.</EmptyStateText>
        )}

        <ButtonRow>
          <ActionButton>Create Appointment</ActionButton>
          <ActionButton variant="secondary">View Past Appointments</ActionButton>
        </ButtonRow>
      </InfoCard>
    </DashboardContainer>
  );
};




import React, { useState } from 'react';
import {
  PageWrapper,
  Header,
  Container,
  SideSection,
  Field,
  Label,
  Value,
  TextArea,
  Button,
} from "../../styles/doctor/doctorAppointmentDetailStyle";

// import { useParams } from 'react-router-dom'; // Not needed for dummy

// Dummy appointment & report
const dummyAppointment = {
  id: 101,
  patientName: 'John Doe',
  doctorName: 'Dr. Sarah Connor',
  pickupDateTime: new Date().toISOString(),
  endTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
  appointmentType: 'Follow-up',
  status: 'Completed',
  reasonForVisit: 'Post-surgery checkup',
  patientDriverName: 'Michael Scott',
  vehicleName: 'Van A',
};

const dummyReport = {
  id: 501,
  diagnosis: 'Mild inflammation around the surgical area.',
  treatmentPlan: 'Continue antibiotics for 5 days and rest.',
};

export const DoctorViewDayPage = () => {
  // const { appointmentId } = useParams();

  const [appointment] = useState(dummyAppointment);
  const [report, setReport] = useState(dummyReport);

  const [diagnosis, setDiagnosis] = useState(dummyReport.diagnosis);
  const [treatmentPlan, setTreatmentPlan] = useState(dummyReport.treatmentPlan);

  // useEffect(() => {
  //   axios.get(`/api/appointments/details/${appointmentId}`).then(res => setAppointment(res.data));
  //   axios.get(`/api/reports/by-appointment/${appointmentId}`).then(res => {
  //     setReport(res.data);
  //     setDiagnosis(res.data?.diagnosis || '');
  //     setTreatmentPlan(res.data?.treatmentPlan || '');
  //   });
  // }, [appointmentId]);

  const handleUpdate = () => {
    setReport({ ...report, diagnosis, treatmentPlan });
    alert('Report updated successfully!');
  };

  const handleCancel = () => {
    setDiagnosis(report.diagnosis);
    setTreatmentPlan(report.treatmentPlan);
  };

  if (!appointment || !report) return <p>Loading...</p>;

  return (
    <PageWrapper>
      <Header>Appointment Details</Header>
      <Container>
        {/* Left - Appointment Info */}
        <SideSection>
          <Field><Label>ID:</Label> <Value>{appointment.id}</Value></Field>
          <Field><Label>Patient:</Label> <Value>{appointment.patientName}</Value></Field>
          <Field><Label>Doctor:</Label> <Value>{appointment.doctorName}</Value></Field>
          <Field><Label>Pickup Time:</Label> <Value>{new Date(appointment.pickupDateTime).toLocaleString()}</Value></Field>
          <Field><Label>End Time:</Label> <Value>{new Date(appointment.endTime).toLocaleString()}</Value></Field>
          <Field><Label>Type:</Label> <Value>{appointment.appointmentType}</Value></Field>
          <Field><Label>Status:</Label> <Value>{appointment.status}</Value></Field>
          <Field><Label>Reason:</Label> <Value>{appointment.reasonForVisit || 'N/A'}</Value></Field>
          <Field><Label>Driver:</Label> <Value>{appointment.patientDriverName || 'None'}</Value></Field>
          <Field><Label>Vehicle:</Label> <Value>{appointment.vehicleName || 'None'}</Value></Field>
        </SideSection>

        {/* Right - Doctor Report */}
        <SideSection>
          <Field>
            <Label>Diagnosis:</Label>
            <TextArea value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
          </Field>
          <Field>
            <Label>Treatment Plan:</Label>
            <TextArea value={treatmentPlan} onChange={(e) => setTreatmentPlan(e.target.value)} />
          </Field>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button onClick={handleUpdate}>Update Report</Button>
            <Button style={{ backgroundColor: '#ccc', color: '#333' }} onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </SideSection>
      </Container>
    </PageWrapper>
  );
};




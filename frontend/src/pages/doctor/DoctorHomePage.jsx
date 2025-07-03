import React, { useState, useEffect } from "react";
import {
  PageWrapper,
  Header,
  FilterSection,
  FilterButton,
  Section,
  Card,
  CardHeader,
  MoreInfoButton,
  Table,
  SaveButton,
  CancelButton,
  TimeInput,
  EditButton,
} from "../../styles/doctor/doctorDashBoardStyle";

// ✅ Dummy data
const mockDoctor = {
  firstName: "John",
  lastName: "Doe",
  specialization: "Cardiology",
};

const mockAppointments = {
  upcoming: [
    {
      id: "appt1",
      patientName: "Alice Smith",
      pickupDateTime: new Date().toISOString(),
      status: "Scheduled",
    },
  ],
  "no-report": [
    {
      id: "appt2",
      patientName: "Bob Johnson",
      pickupDateTime: new Date().toISOString(),
      status: "Completed (No Report)",
    },
  ],
  past: [
    {
      id: "appt3",
      patientName: "Charlie Brown",
      pickupDateTime: new Date().toISOString(),
      status: "Completed",
    },
  ],
};

const mockAvailability = [
  { dayOfWeek: "Monday", startTime: "09:00", endTime: "13:00" },
  { dayOfWeek: "Tuesday", startTime: "12:00", endTime: "16:00" },
  { dayOfWeek: "Wednesday", startTime: "10:00", endTime: "14:00" },
  { dayOfWeek: "Thursday", startTime: "08:00", endTime: "12:00" },
  { dayOfWeek: "Friday", startTime: "11:00", endTime: "15:00" },
  { dayOfWeek: "Saturday", startTime: "09:30", endTime: "12:30" },
  { dayOfWeek: "Sunday", startTime: "10:00", endTime: "13:00" },
];

export const DoctorHomePage = () => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedAvailability, setEditedAvailability] = useState([]);

  const [filter, setFilter] = useState("upcoming");

  // ✅ You can comment out this block if you were using API
  // useEffect(() => {
  //   // Normally fetch doctor, appointments, and availability here
  // }, [filter]);

  useEffect(() => {
    setEditedAvailability(mockAvailability);
  }, []);

  const doctor = mockDoctor;
  const appointments = mockAppointments[filter] || [];
  const availability = mockAvailability;

  return (
    <PageWrapper>
      <Header>Doctor Dashboard</Header>

      <Card>
        <CardHeader>
          Welcome, Dr. {doctor.firstName} {doctor.lastName}
        </CardHeader>
        <p>{doctor.specialization}</p>
      </Card>

      <FilterSection>
        <FilterButton
          active={filter === "upcoming"}
          onClick={() => setFilter("upcoming")}
        >
          Upcoming
        </FilterButton>
        {/* <FilterButton
          active={filter === "no-report"}
          onClick={() => setFilter("no-report")}
        >
          Missing Report
        </FilterButton> */}
        <FilterButton
          active={filter === "past"}
          onClick={() => setFilter("past")}
        >
          Past
        </FilterButton>
      </FilterSection>

      <Section>
        <CardHeader>
          {filter.charAt(0).toUpperCase() + filter.slice(1)} Appointments
        </CardHeader>
        <Table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Pickup Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.patientName}</td>
                  <td>{new Date(appt.pickupDateTime).toLocaleString()}</td>
                  <td>{appt.status}</td>
                  <td>
                    <MoreInfoButton
                      onClick={() =>
                        (window.location.href = `/doctor/appointment/${appt.id}`)
                      }
                    >
                      More Info
                    </MoreInfoButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No appointments found.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Section>

      <Section>
        <CardHeader>Your Availability</CardHeader>
        {editedAvailability.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Start</th>
                <th>End</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {editedAvailability.map((slot, i) => (
                <tr key={i}>
                  <td>{slot.dayOfWeek}</td>
                  <td>
                    {editingIndex === i ? (
                      <TimeInput
                        type="time"
                        value={slot.startTime}
                        onChange={(e) => {
                          const updated = [...editedAvailability];
                          updated[i].startTime = e.target.value;
                          setEditedAvailability(updated);
                        }}
                      />
                    ) : (
                      slot.startTime
                    )}
                  </td>
                  <td>
                    {editingIndex === i ? (
                      <TimeInput
                        type="time"
                        value={slot.endTime}
                        onChange={(e) => {
                          const updated = [...editedAvailability];
                          updated[i].endTime = e.target.value;
                          setEditedAvailability(updated);
                        }}
                      />
                    ) : (
                      slot.endTime
                    )}
                  </td>
                  <td>
                    {editingIndex === i ? (
                      <>
                        <SaveButton onClick={() => setEditingIndex(null)}>
                          Save
                        </SaveButton>
                        <CancelButton
                          onClick={() => {
                            setEditedAvailability(mockAvailability); // Reset
                            setEditingIndex(null);
                          }}
                        >
                          Cancel
                        </CancelButton>
                      </>
                    ) : (
                      <EditButton onClick={() => setEditingIndex(i)}>
                        Edit
                      </EditButton>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No availability set.</p>
        )}
      </Section>
    </PageWrapper>
  );
};

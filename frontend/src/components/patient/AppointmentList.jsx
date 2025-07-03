import React from 'react';
import { List, ListItem } from '../../styles/patient/PatientAppointmentStyles';

const AppointmentList = ({ appointments, selectedId, onSelect }) => {
  return (
    <List>
      {appointments.map((appt) => (
        <ListItem
          key={appt.id}
          isSelected={appt.id === selectedId}
          onClick={() => onSelect(appt)}
        >
          <strong>{appt.date}</strong> — {appt.doctorName}
        </ListItem>
      ))}
    </List>
  );
};

export default AppointmentList;

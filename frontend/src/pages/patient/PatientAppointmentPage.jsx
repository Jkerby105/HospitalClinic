import React, { useState } from 'react';
import {Form,Input,Label,PickupSection,Select,SlotButton,SubmitButton,TextArea,TimeSlots,Title,TogglePickup,Wrapper} from '../../styles/patient/CreateAppointmentStyle';
// import axios from 'axios'; // Will be used for fetching later

const doctors = [
  { id: 1, name: 'Dr. Alice Johnson' },
  { id: 2, name: 'Dr. Bob Smith' },
];

const availability = {
  1: {
    Monday: ['09:00', '09:30', '10:00', '10:30'],
    Saturday: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
  },
  2: {
    Tuesday: ['13:00', '13:30', '14:00', '14:30'],
  },
};

const takenSlots = {
  '1-Saturday': ['14:30', '16:00'],
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const PatientAppointmentPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [reason, setReason] = useState('');
  const [pickupInfoVisible, setPickupInfoVisible] = useState(false);
  const [pickupInfo, setPickupInfo] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedDoctor, selectedDay, selectedSlot, reason, pickupInfo });
  };

  const doctorAvailability = availability[selectedDoctor] || {};
  const availableSlots = doctorAvailability[selectedDay] || [];
  const taken = takenSlots[`${selectedDoctor}-${selectedDay}`] || [];

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Create Appointment</Title>

        <Label>Select Doctor</Label>
        <Select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required>
          <option value="">-- Select Doctor --</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>{doc.name}</option>
          ))}
        </Select>

        <Label>Select Day</Label>
        <Select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} required>
          <option value="">-- Select Day --</option>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </Select>

        <Label>Available Time Slots</Label>
        <TimeSlots>
          {availableSlots.map((slot) => (
            <SlotButton
              key={slot}
              disabled={taken.includes(slot)}
              $selected={slot === selectedSlot}
              onClick={() => setSelectedSlot(slot)}
              type="button"
            >
              {taken.includes(slot) ? `${slot} (Taken)` : `${slot} - ${(parseInt(slot.split(':')[0]) + (parseInt(slot.split(':')[1]) + 30) / 60).toFixed(2).replace('.', ':')} `}
            </SlotButton>
          ))}
        </TimeSlots>

        <Label>Reason for Visit</Label>
        <TextArea value={reason} onChange={(e) => setReason(e.target.value)} />

        <TogglePickup onClick={() => setPickupInfoVisible((prev) => !prev)}>
          {pickupInfoVisible ? 'Hide Pickup Info' : 'Add Pickup Info'}
        </TogglePickup>

        {pickupInfoVisible && (
          <PickupSection>
            <Input
              placeholder="Address Line"
              value={pickupInfo.address}
              onChange={(e) => setPickupInfo({ ...pickupInfo, address: e.target.value })}
            />
            <Input
              placeholder="City"
              value={pickupInfo.city}
              onChange={(e) => setPickupInfo({ ...pickupInfo, city: e.target.value })}
            />
            <Input
              placeholder="State"
              value={pickupInfo.state}
              onChange={(e) => setPickupInfo({ ...pickupInfo, state: e.target.value })}
            />
            <Input
              placeholder="Zip Code"
              value={pickupInfo.zip}
              onChange={(e) => setPickupInfo({ ...pickupInfo, zip: e.target.value })}
            />
            <TextArea
              placeholder="Pickup Notes"
              value={pickupInfo.notes}
              onChange={(e) => setPickupInfo({ ...pickupInfo, notes: e.target.value })}
            />
          </PickupSection>
        )}

        <SubmitButton type="submit" disabled={!selectedDoctor || !selectedDay || !selectedSlot}>Create Appointment</SubmitButton>
      </Form>
    </Wrapper>
  );
}
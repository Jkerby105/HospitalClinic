
import React, { useState, useEffect } from 'react';
import { PatientStore } from '../../store/PatientStore';
import {
  Form, Input, Label, PickupSection, Select, SlotButton, SubmitButton,
  TextArea, TimeSlots, Title, TogglePickup, Wrapper
} from '../../styles/patient/CreateAppointmentStyle';


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];



export const PatientAppointmentPage = () => {
  const { getDoctors, getDoctorsAvailability,postAppointment } = PatientStore();
  const [doctors, setDoctors] = useState([]);

  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [takenSlots, setTakenSlots] = useState([]);

  const [reason, setReason] = useState('');
  const [isFollowUp, setIsFollowUp] = useState(null);

  const [pickupInfoVisible, setPickupInfoVisible] = useState(false);
  const [pickupInfo, setPickupInfo] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: '',
  });

  if(selectedDoctor){
    console.log(selectedDoctor);
    console.log("doctor selected");
  }
  if(selectedDay){
    console.log(selectedDay);
    console.log("day selected");
  }
  if(selectedSlot){
    console.log(selectedSlot);
      console.log("slot selected");
  }
  if(isFollowUp){
    console.log(isFollowUp);
    console.log("is selected");
  }

  // Fetch doctors on mount
  useEffect(() => {
    async function fetchDoctors() {
      const res = await getDoctors();
      setDoctors(res);
    }
    fetchDoctors();
  }, []);

  // Fetch slot availability when doctor or day changes
  useEffect(() => {
    if (!selectedDoctor || !selectedDay) return;

    async function fetchAvailability() {
      try {
        const data = await getDoctorsAvailability(selectedDoctor, selectedDay);
        setAvailableSlots(data.availableSlots || []);
        setTakenSlots(data.takenSlots || []);
        setSelectedSlot('');
      } catch (error) {
        console.error('Failed to fetch availability:', error);
      }
    }

    fetchAvailability();
  }, [selectedDoctor, selectedDay]);


const SLOT_MINUTES = 20;

const formatEndTime = (startTime) => {
  const [hourStr, minuteStr] = startTime.split(':');
  let hour = parseInt(hourStr, 10);
  let minute = parseInt(minuteStr, 10);

  minute += SLOT_MINUTES;           
  if (minute >= 60) {
    hour += 1;
    minute -= 60;
  }

  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};



 const handleSubmit = async (e) => {
  e.preventDefault();

  // If pickup info is visible, validate all fields
  if (pickupInfoVisible) {
    const { address, city, state, zip } = pickupInfo;
    if (!address || !city || !state || !zip) {
      alert("Please fill out all required pickup fields.");
      return;
    }
  }
    
  const appointment = {
    doctor_id: selectedDoctor,
    appointment_day: selectedDay,
    start_time: selectedSlot,
    reason_for_visit: reason,
    pickup_address_line: pickupInfo.address,
    pickup_city: pickupInfo.city,
    pickup_state: pickupInfo.state,
    pickup_zip_code: pickupInfo.zip,
    pickup_notes: pickupInfo.notes,
    picked_up: pickupInfoVisible, // ✅ boolean
  };

  console.log("Submitting appointment:", appointment);

  await postAppointment(appointment);
};


  const to12HourFormat = (time24) => {
  const [hourStr, minute] = time24.split(':');
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; // converts 0 to 12
  return `${hour}:${minute} ${ampm}`;
};


  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Create Appointment</Title>

        <Label>Select Doctor</Label>
        <Select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required>
          <option value="">-- Select Doctor --</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>{doc.firstName}</option>
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
  {availableSlots.map((slot) => {
    const cleanTime = slot.slice(0, 5);
    const isTaken = takenSlots.includes(slot);
    return (
      <SlotButton
        key={slot}
        disabled={isTaken}
        $selected={slot === selectedSlot}
        onClick={() => setSelectedSlot(slot)}
        type="button"
      >
        {isTaken
          ? `${to12HourFormat(cleanTime)} (Taken)`
          : `${to12HourFormat(cleanTime)} - ${to12HourFormat(formatEndTime(cleanTime))}`}
      </SlotButton>
    );
  })}
</TimeSlots>


        <Label>Is this a follow-up appointment?</Label>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <SlotButton
            type="button"
            $selected={isFollowUp === true}
            onClick={() => setIsFollowUp(true)}
          >
            Yes
          </SlotButton>
          <SlotButton
            type="button"
            $selected={isFollowUp === false}
            onClick={() => setIsFollowUp(false)}
          >
            No
          </SlotButton>
        </div>

        <Label>Reason for Visit</Label>
        <TextArea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <TogglePickup onClick={() => setPickupInfoVisible(prev => !prev)}>
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

        <SubmitButton
          type="submit"
          disabled={!selectedDoctor || !selectedDay || !selectedSlot || isFollowUp === null}
        >
          Create Appointment
        </SubmitButton>
      </Form>
    </Wrapper>
  );
};

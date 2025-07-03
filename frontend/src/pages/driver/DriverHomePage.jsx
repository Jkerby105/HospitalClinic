
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  gap: 2rem;
`;

const PickupList = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primaryLight : '#fff')};
  border: 2px solid ${({ selected, theme }) => (selected ? theme.colors.primary : '#e5e7eb')};
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${({ selected }) => (selected ? '0 0 0 3px rgba(59,130,246,0.3)' : 'none')};
  cursor: pointer;
`;

const RightPanel = styled.div`
  flex: 2;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  padding: 1rem;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DriverHomePage = () => {
  const [pickups, setPickups] = useState([]);
  const [selectedPickup, setSelectedPickup] = useState(null);
  const driverId = localStorage.getItem('driverId');

  useEffect(() => {
    if (driverId) {
      axios.get(`/api/driver/upcoming/${driverId}`).then(res => {
        setPickups(res.data);
        if (res.data.length > 0) setSelectedPickup(res.data[0]);
      });
    }
  }, [driverId]);

  return (
    <Container>
      <PickupList>
        <SectionTitle>Upcoming Pickups</SectionTitle>
        {pickups.length === 0 ? (
          <p className="text-gray-500">No pickups at the moment.</p>
        ) : (
          pickups.map(pickup => (
            <Card
              key={pickup.id}
              selected={selectedPickup?.id === pickup.id}
              onClick={() => setSelectedPickup(pickup)}
            >
              <p><strong>Patient:</strong> {pickup.patientName}</p>
              <p><strong>Time:</strong> {new Date(pickup.pickupDateTime).toLocaleTimeString()}</p>
              <p><strong>Location:</strong> {pickup.pickupAddress}</p>
            </Card>
          ))
        )}
      </PickupList>

      <RightPanel>
        {/* Placeholder for Map View */}
        <p className="text-gray-400">Map view of pickup and dropoff will appear here.</p>
      </RightPanel>
    </Container>
  );
};





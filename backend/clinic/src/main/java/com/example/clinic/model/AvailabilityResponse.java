package com.example.clinic.model;

import java.util.List;


public class AvailabilityResponse {
    private List<String> availableSlots;
    private List<String> takenSlots;

    public List<String> getAvailableSlots() {
        return availableSlots;
    }

    public void setAvailableSlots(List<String> availableSlots) {
        this.availableSlots = availableSlots;
    }

    public List<String> getTakenSlots() {
        return takenSlots;
    }

    public void setTakenSlots(List<String> takenSlots) {
        this.takenSlots = takenSlots;
    }
}

package com.example.clinic.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Create a DTO (Data Transfer Object) for the request body
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentRequestDTO {
    private Long doctorId;
    private String reasonForVisit;
    private String startTime;
    private String appointmentType;
    private String status;
    private String appointmentDay;
    private boolean pickedUp;
    private String pickupAddressLine;
    private String pickupCity;
    private String pickupState;
    private String pickupZipCode;
    private String pickupNotes;
}

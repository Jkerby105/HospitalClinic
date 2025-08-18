package com.example.clinic.model;

public record AppointmentCreateRequest(
    Long doctorId,
    String appointmentDay,     
    String startTime,          
    String reasonForVisit,
    Boolean pickedUp,
    String pickupAddressLine,
    String pickupCity,
    String pickupState,
    String pickupZipCode,
    String pickupNotes,
    Boolean isFollowUp
) {}
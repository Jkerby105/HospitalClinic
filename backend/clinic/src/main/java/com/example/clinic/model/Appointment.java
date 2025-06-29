package com.example.clinic.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patientDriver_id")
    private PatientDriver patientDriver;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(length = 500, nullable = true)
    private String reasonForVisit;

    @Column(nullable = false)
    // private LocalDateTime endTime = starTime.plusMinutes(30);
    // private LocalDateTime endTime = starTime.plusMinutes(30);
    private LocalDateTime endTime;


    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AppointmentType appointmentType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AppointmentStatus status;

    // ------------

    @Column(nullable = true)
    private boolean pickedUp;

    @Column(length = 255, nullable = true)
    private String pickupAddressLine;

    @Column(length = 100, nullable = true)
    private String pickupCity;

    @Column(length = 100, nullable = true)
    private String pickupState;

    @Column(length = 20, nullable = true)
    private String pickupZipCode;

    @Column(length = 255, nullable = true)
    private String pickupNotes;

}

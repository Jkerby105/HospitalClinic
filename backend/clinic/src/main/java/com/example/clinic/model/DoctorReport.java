package com.example.clinic.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DoctorReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "appointment_id", nullable = false)
    private Appointment appointment;

    @Column(length = 2000, nullable = false)
    private String diagnosis;

    @Column(length = 2000, nullable = false)
    private String treatmentPlan;

    private Boolean followUpRequired;

    private LocalDate nextAppointmentDate;
}

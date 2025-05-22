package com.example.clinic.service;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.clinic.model.Appointment;
import com.example.clinic.model.PatientDriver;
import com.example.clinic.repo.PatientDriverRepo;
import com.example.clinic.repo.AppointmentRepo;

@Service
public class PatientDriverService {

    @Autowired
    private PatientDriverRepo patientDriverRepo;

    @Autowired
    private AppointmentRepo appointmentRepo;


    // Get driver by ID
    public Optional<PatientDriver> getDriverById(Long id) {
        return patientDriverRepo.findById(id);
    }

    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepo.findById(id);
    }

    public List<Appointment> test() {
        return appointmentRepo.findAll();
    }

    public List<Appointment> getPastAppointments(Long driverId) {
        return appointmentRepo.findByPatientDriverIdAndPickupDateTimeBefore(driverId, LocalDateTime.now());
    }

    public List<Appointment> getUpcomingAppointments(Long driverId) {
        return appointmentRepo.findByPatientDriverIdAndPickupDateTimeAfter(driverId, LocalDateTime.now());
    }

    public List<Appointment> getAppointmentsForDriver(Long driverId) {
        return appointmentRepo.getAppointmentsForDriver(driverId);
    }
    
}

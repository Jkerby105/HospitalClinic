package com.example.clinic.controller;

import java.util.List;
import java.util.Optional;

import com.example.clinic.model.Appointment;
import com.example.clinic.model.DoctorReport;
import com.example.clinic.model.Patient;
import com.example.clinic.service.PatientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
@CrossOrigin
public class PatientController {

    @Autowired
    private PatientService patientService;

    // ------------------ Get Info ------------------ \\

    @GetMapping("/info/{id}")
    public ResponseEntity<Optional<Patient>> getPatientById(@PathVariable Long id) {
        return ResponseEntity.ok(patientService.getPatientById(id));
    }

    @GetMapping("/info/appointments/{id}")
    public ResponseEntity<List<Appointment>> getAppointments(@PathVariable Long id) {
        return ResponseEntity.ok(patientService.getAppointments(id));
    }

    @GetMapping("/info/reports/{id}")
    public ResponseEntity<List<DoctorReport>> getDoctorReports(@PathVariable Long id) {
        return ResponseEntity.ok(patientService.getReports(id));
    }

    // ------------------ Create / Update ------------------ \\

    @PostMapping("/appointment")
    public ResponseEntity<Appointment> saveAppointment(@RequestBody Appointment appointment) {
        return ResponseEntity.ok(patientService.saveAppointment(appointment));
    }

    // ------------------ TODO: Login & Create Account ------------------ \\
    // @PostMapping("/login")
    // public ResponseEntity<?> patientLogin(@RequestBody LoginRequest request) {
    //     // TODO: Implement Patient Login
    // }

    // @PostMapping("/register")
    // public ResponseEntity<?> createPatient(@RequestBody Patient patient) {
    //     // TODO: Implement Patient Registration
    // }
}

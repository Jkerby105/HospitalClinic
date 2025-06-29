package com.example.clinic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import com.example.clinic.model.Appointment;
import com.example.clinic.model.PatientDriver;
import com.example.clinic.service.PatientDriverService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class PatientDriverController {

    @Autowired
    private PatientDriverService patientDriverService;

    @GetMapping("/{id}")
    public ResponseEntity<PatientDriver> getDriver(@PathVariable Long id) {

        return patientDriverService.getDriverById(id)
                .map(driver -> new ResponseEntity<>(driver, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/appointments/{id}")
    public ResponseEntity<List<Appointment>> getAllAppointments(@PathVariable Long id) {

        List<Appointment> appointments = patientDriverService.getAppointmentsForDriver(id);
        if (appointments.isEmpty()) {
            return new ResponseEntity<>(appointments, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<List<Appointment>>(appointments, HttpStatus.OK);
        }

    }

    // ----------------- Login ---------------- \\

}

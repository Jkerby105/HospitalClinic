package com.example.clinic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import com.example.clinic.model.Appointment;
import com.example.clinic.service.PatientDriverService;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class PatientDriverController {

    @Autowired
    private PatientDriverService patientDriverService;

    @GetMapping("/allSchedule/{id}")
    public ResponseEntity<List<Appointment>> getAllAppointments(@PathVariable Long id) {

        List<Appointment> appointments = patientDriverService.getAppointmentsForDriver(id);
        if (appointments.isEmpty()) {
            return new ResponseEntity<>(appointments, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<List<Appointment>>(appointments, HttpStatus.OK);
        }

    }


    @GetMapping("/previousSchedule/{id}")
    public ResponseEntity<List<Appointment>> getPreviousAppointments(@PathVariable Long id) {

        List<Appointment> appointments = patientDriverService.getPastAppointments(id);
        if (appointments.isEmpty()) {
            return new ResponseEntity<>(appointments, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<List<Appointment>>(appointments, HttpStatus.OK);
        }

    }


    @GetMapping("/upcomingSchedule/{id}")
    public ResponseEntity<List<Appointment>> getUpcomingAppointment(@PathVariable Long id) {

        List<Appointment> appointments = patientDriverService.getUpcomingAppointments(id);
        if (appointments.isEmpty()) {
            return new ResponseEntity<>(appointments, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<List<Appointment>>(appointments, HttpStatus.OK);
        }

    }

    // ----------------- Login ---------------- \\

    

}

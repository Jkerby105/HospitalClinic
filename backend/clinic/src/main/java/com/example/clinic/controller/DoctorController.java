package com.example.clinic.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.clinic.model.Appointment;
import com.example.clinic.model.Doctor;
import com.example.clinic.model.DoctorAvailability;
import com.example.clinic.model.DoctorAvailabilityView;
import com.example.clinic.model.DoctorReport;
import com.example.clinic.service.DoctorService;
import org.springframework.security.core.Authentication;
// import io.jsonwebtoken.io.IOException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/doctor")
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorService dService;



    @GetMapping("/info")
    public ResponseEntity<Doctor> getDoctorInfo(Authentication authentication) {
        String username = authentication.getName(); // usually email or username

        Optional<Doctor> doctor = dService.getDoctorByUsername(username);
        System.out.println("Doctor Username: " + username);
        System.out.println("Doctor Info: " + doctor);

        if (doctor.isPresent()) {
            return ResponseEntity.of(doctor);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/Availability")
    public ResponseEntity<List<DoctorAvailabilityView>> getDoctorAvailability(Authentication authentication) {
        String username = authentication.getName();
        Doctor doctor = dService.getDoctorByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Doctor not found"));

        return ResponseEntity.ok(dService.getDoctorAvailabilities(doctor.getId()));
    }

    @PutMapping("/Availability")
    public ResponseEntity<?> putMethodName(@RequestBody DoctorAvailability updatedSlot) {
        DoctorAvailability entity = dService.setDoctorAvailability(updatedSlot);

        return ResponseEntity.ok(entity);
    }

    // ----------------- Login ---------------- \\

}

package com.example.clinic.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.clinic.model.Appointment;
import com.example.clinic.model.Doctor;
import com.example.clinic.model.DoctorAvailability;
import com.example.clinic.model.DoctorReport;
import com.example.clinic.service.DoctorService;

// import io.jsonwebtoken.io.IOException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/doctor")
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorService dService;

    // Get Info

    @GetMapping("/info/{id}")
    public ResponseEntity<Optional<Doctor>> getMethodName(@PathVariable Long id) {

        Optional<Doctor> doctor = dService.getDoctorById(id);
      
          if(doctor != null)
            return new ResponseEntity<>(doctor, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    // Come back to this for sure
    @GetMapping("/info/Availability/{id}")
    public ResponseEntity<List<DoctorAvailability>> getDoctorAvailability(@PathVariable Long id) {
         return new ResponseEntity<>(dService.getDoctorAvailabilities(id), HttpStatus.OK);
    }

    @GetMapping("/info/Report/{id}")
    public ResponseEntity<List<DoctorReport>> getDoctorReport(@PathVariable long id) {
        return new ResponseEntity<>(dService.getDoctorReport(id), HttpStatus.OK);
    }
    
    // Create || Update

    @PostMapping("/report")
    public ResponseEntity<?> saveDoctorReport(DoctorReport doctorReport) {
        
        DoctorReport dReport = null;

        try {
            dReport = dService.saveDoctorReport(dReport);
           return new ResponseEntity<>(dReport, HttpStatus.CREATED);
       } catch (Exception e) {
           return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

    @PostMapping("/Availability")
    public ResponseEntity<?> saveDoctorAvailability(DoctorAvailability doctorAvailability) {
       DoctorAvailability dAvailability = null;

       try {
        dAvailability = dService.saveDoctorAvailability(doctorAvailability);
       return new ResponseEntity<>(dAvailability, HttpStatus.CREATED);
   } catch (Exception e) {
       return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
   }

    }

     // ----------------- Login ---------------- \\

}

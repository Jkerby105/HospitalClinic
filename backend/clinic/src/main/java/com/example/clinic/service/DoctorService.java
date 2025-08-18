package com.example.clinic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.clinic.model.Doctor;
import com.example.clinic.model.DoctorAvailability;
import com.example.clinic.model.DoctorAvailabilityView;
import com.example.clinic.model.DoctorReport;
import com.example.clinic.repo.DoctorAvailabilityRepo;
import com.example.clinic.repo.DoctorRepo;
import com.example.clinic.repo.DoctorReportRepo;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private DoctorAvailabilityRepo doctorAvailabilityRepo;

    @Autowired
    private DoctorReportRepo doctorReportRepo;

    // Get Info

    public Optional<Doctor> getDoctorById(Long id) {
        return doctorRepo.findById(id);
    }

    // Get List

    // only admin needs to see all this
    // public List<DoctorAvailability> getAllDoctorAvailability() {
    // return doctorAvailabilityRepo.findAll();
    // }

    // public List<DoctorReport> getAllDoctorReportRepo() {
    // return doctorReportRepo.findAll();
    // }

    // Get List

    // see there upcoming appointments

    public List<DoctorAvailabilityView> getDoctorAvailabilities(Long id) {
        return doctorAvailabilityRepo.findByDoctorId(id);
    }

    public List<DoctorReport> getDoctorReport(Long id) {
        return doctorReportRepo.findByDoctorId(id);
    }

    // Create | Update

    public DoctorReport saveDoctorReport(DoctorReport report) {
        return doctorReportRepo.save(report);
    }

    public DoctorAvailability saveDoctorAvailability(DoctorAvailability report) {
        return doctorAvailabilityRepo.save(report);
    }

    public Optional<Doctor> getDoctorByUsername(String username) {
        return Optional.ofNullable(doctorRepo.findByUsername(username));
    }

    public DoctorAvailability setDoctorAvailability(DoctorAvailability availability) {

              System.out.println("Updated Slot: " + availability + "----------------------------++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

        DoctorAvailability existingSlot = doctorAvailabilityRepo.findById(availability.getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Availability slot not found"));



        existingSlot.setStartTime(availability.getStartTime());
        existingSlot.setEndTime(availability.getEndTime());
        existingSlot.setIsActive(availability.getIsActive());

        return doctorAvailabilityRepo.save(existingSlot);

    }


        public List<Doctor> getActiveDoctors() {
        return doctorRepo.findByIsActive(true);
    }

}

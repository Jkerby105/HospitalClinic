package com.example.clinic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.clinic.model.Doctor;
import com.example.clinic.model.DoctorAvailability;
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

    public List<DoctorAvailability> getAllDoctorAvailability() {
        return doctorAvailabilityRepo.findAll();
    }

    public List<DoctorReport> getAllDoctorReportRepo() {
        return doctorReportRepo.findAll();
    }

    // Get One

    public Optional<DoctorAvailability> getDoctorAvailability(Long id) {
        return doctorAvailabilityRepo.findById(id);
    }

    public Optional<DoctorReport> getDoctorReport(Long id) {
        return doctorReportRepo.findById(id);
    }

    // Create | Update
    
    public DoctorReport saveDoctorReport(DoctorReport report) {
        return doctorReportRepo.save(report);
    }

    public DoctorAvailability saveDoctorAvailability(DoctorAvailability report) {
        return doctorAvailabilityRepo.save(report);
    }

}

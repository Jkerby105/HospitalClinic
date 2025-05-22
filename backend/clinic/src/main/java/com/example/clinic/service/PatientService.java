package com.example.clinic.service;

import com.example.clinic.model.Appointment;
import com.example.clinic.model.AppointmentStatus;
import com.example.clinic.model.DoctorReport;
import com.example.clinic.model.Patient;
import com.example.clinic.repo.AppointmentRepo;
import com.example.clinic.repo.DoctorReportRepo;
import com.example.clinic.repo.PatientRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private AppointmentRepo appointmentRepo;

    @Autowired
    private DoctorReportRepo doctorReportRepo;

    // View patient profile
    public Optional<Patient> getPatientById(Long id) {
        return patientRepo.findById(id);
    }

    // Create / Update patient profile
    public Patient updatePatient(Patient updatedPatient) {
        return patientRepo.save(updatedPatient);
    }

    // View doctor reports for a patient
    public List<DoctorReport> getReportsByPatientId(Long patientId) {
        return doctorReportRepo.findByAppointmentPatientId(patientId);
    }

    public List<Appointment> getAppointmentsByPatientId(Long patientId, String keyword) {
        if (keyword == null || keyword.isBlank()) {
            return appointmentRepo.findByPatientId(patientId);
        }

        try {
            AppointmentStatus status = AppointmentStatus.valueOf(keyword.toUpperCase());
            return appointmentRepo.findByPatientIdAndStatus(patientId, status);
        } catch (IllegalArgumentException e) {

            return appointmentRepo.findByPatientId(patientId);
        }
    }

}

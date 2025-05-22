package com.example.clinic.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.clinic.model.DoctorReport;

@Repository
public interface DoctorReportRepo extends JpaRepository<DoctorReport, Long> {

    List<DoctorReport> findByAppointmentPatientId(Long patientId);

    
} 
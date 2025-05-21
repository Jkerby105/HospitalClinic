package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clinic.model.DoctorReport;

public interface doctorReport extends JpaRepository<DoctorReport, Long> {

    
} 
package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clinic.model.Patient;

public interface patientRepo extends JpaRepository<Patient, Long>{

    
} 
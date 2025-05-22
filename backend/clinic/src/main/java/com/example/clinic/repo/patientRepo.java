package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.clinic.model.Patient;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Long>{

    
} 
package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.clinic.model.Doctor;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Long> {

    
}
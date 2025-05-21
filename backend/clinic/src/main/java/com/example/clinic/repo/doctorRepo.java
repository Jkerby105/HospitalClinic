package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clinic.model.Doctor;

public interface doctorRepo extends JpaRepository<Doctor, Long> {

    
}
package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clinic.model.DoctorAvailability;

public interface doctorAvailabilityRepo extends JpaRepository<DoctorAvailability, Long> {

    
}
package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.clinic.model.DoctorAvailability;

@Repository
public interface DoctorAvailabilityRepo extends JpaRepository<DoctorAvailability, Long> {

    
}
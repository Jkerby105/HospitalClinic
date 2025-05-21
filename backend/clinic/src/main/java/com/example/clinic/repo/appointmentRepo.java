package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clinic.model.Appointment;

public interface appointmentRepo extends JpaRepository<Appointment, Long> {

    
} 
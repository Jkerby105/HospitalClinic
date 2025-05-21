package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clinic.model.Vehicle;

public interface vehicleRepo extends JpaRepository<Vehicle, Long> {
    
}

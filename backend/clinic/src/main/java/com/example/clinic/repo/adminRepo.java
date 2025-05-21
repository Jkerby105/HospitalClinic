package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clinic.model.Admin;

public interface adminRepo extends JpaRepository<Admin, Long> {
    
}

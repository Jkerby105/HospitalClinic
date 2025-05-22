package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.clinic.model.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {
    
}

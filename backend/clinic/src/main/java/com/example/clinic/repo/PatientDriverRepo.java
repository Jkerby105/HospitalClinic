package com.example.clinic.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.clinic.model.PatientDriver;

@Repository
public interface PatientDriverRepo extends JpaRepository<PatientDriver, Long> {

    

}

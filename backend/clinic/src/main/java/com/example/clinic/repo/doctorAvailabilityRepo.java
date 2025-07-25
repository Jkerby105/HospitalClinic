package com.example.clinic.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.clinic.model.DoctorAvailability;
import com.example.clinic.model.DoctorAvailabilityView;

@Repository
public interface DoctorAvailabilityRepo extends JpaRepository<DoctorAvailability, Long> {

    List<DoctorAvailabilityView> findByDoctorId(Long id);


    
}
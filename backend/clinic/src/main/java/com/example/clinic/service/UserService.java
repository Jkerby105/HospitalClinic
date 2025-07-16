package com.example.clinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.clinic.repo.AdminRepo;
import com.example.clinic.repo.DoctorRepo;
import com.example.clinic.repo.PatientDriverRepo;
import com.example.clinic.repo.PatientRepo;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Service
public class UserService {

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private AdminRepo adminRepo;

    @Autowired 
    private DoctorRepo doctorRepo;

    @Autowired
    private PatientDriverRepo patientDriverRepo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);




}

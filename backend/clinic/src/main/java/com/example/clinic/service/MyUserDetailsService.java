package com.example.clinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.clinic.model.Admin;
import com.example.clinic.model.Doctor;
import com.example.clinic.model.Patient;
import com.example.clinic.model.PatientDriver;
import com.example.clinic.model.UserPrincipal;
import com.example.clinic.repo.AdminRepo;
import com.example.clinic.repo.DoctorRepo;
import com.example.clinic.repo.PatientDriverRepo;
import com.example.clinic.repo.PatientRepo;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private PatientDriverRepo patientDriverRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Object user = null;

        user = adminRepo.findByUsername(username);
        if (user != null) {
            return new UserPrincipal(
                    ((Admin) user).getUsername(),
                    ((Admin) user).getPassword(),
                    "ROLE_ADMIN");
        } else {
            user = doctorRepo.findByUsername(username);
            if (user != null) {
                return new UserPrincipal(
                        ((Doctor) user).getUsername(),
                        ((Doctor) user).getPassword(),
                        "ROLE_DOCTOR");
            } else {
                user = patientRepo.findByUsername(username);
                if (user != null) {
                    return new UserPrincipal(
                            ((Patient) user).getUsername(),
                            ((Patient) user).getPassword(),
                            "ROLE_PATIENT");
                } else {
                    user = patientDriverRepo.findByUsername(username);
                    if (user != null) {
                        return new UserPrincipal(
                                ((PatientDriver) user).getUsername(),
                                ((PatientDriver) user).getPassword(),
                                "ROLE_PATIENTDRIVER");
                    }
                }
            }
        }

        throw new UsernameNotFoundException("User 404");
    }

}

package com.example.clinic.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.clinic.model.*;
import com.example.clinic.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;

    // ------------------- Get All --------------------- \\

    @GetMapping("/admins")
    public ResponseEntity<List<Admin>> getAllAdmins() {
        return ResponseEntity.ok(adminService.getAllAdmins());
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        return ResponseEntity.ok(adminService.getAllDoctors());
    }

    @GetMapping("/patients")
    public ResponseEntity<List<Patient>> getAllPatients() {
        return ResponseEntity.ok(adminService.getAllPatients());
    }

    @GetMapping("/drivers")
    public ResponseEntity<List<PatientDriver>> getAllDrivers() {
        return ResponseEntity.ok(adminService.getAllDrivers());
    }

    @GetMapping("/vehicles")
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        return ResponseEntity.ok(adminService.getAllVehicles());
    }

    @GetMapping("/appointments")
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        return ResponseEntity.ok(adminService.getAllAppointments());
    }

    @GetMapping("/doctor-availabilities")
    public ResponseEntity<List<DoctorAvailability>> getAllDoctorAvailability() {
        return ResponseEntity.ok(adminService.getAllDoctorAvailability());
    }

    @GetMapping("/doctor-reports")
    public ResponseEntity<List<DoctorReport>> getAllDoctorReports() {
        return ResponseEntity.ok(adminService.getAllAppointmentsDoctorReport());
    }

    // ------------------- Get By ID --------------------- \\

    @GetMapping("/admin/{id}")
    public ResponseEntity<Optional<Admin>> getAdminById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getAdminById(id));
    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<Optional<Doctor>> getDoctorById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getDoctorById(id));
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<Optional<Patient>> getPatientById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getPatientById(id));
    }

    @GetMapping("/driver/{id}")
    public ResponseEntity<Optional<PatientDriver>> getDriverById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getDriverById(id));
    }

    @GetMapping("/vehicle/{id}")
    public ResponseEntity<Optional<Vehicle>> getVehicleById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getVehicleById(id));
    }

    @GetMapping("/appointment/{id}")
    public ResponseEntity<Optional<Appointment>> getAppointmentById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getAppointmentById(id));
    }

    // ------------------- Get Delete ID --------------------- \\

    // DELETE Admin by ID
    @DeleteMapping("/admin/{id}")
    public ResponseEntity<Void> deleteAdminById(@PathVariable Long id) {
        adminService.deleteAdminById(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }

    // DELETE Doctor by ID
    @DeleteMapping("/doctor/{id}")
    public ResponseEntity<Void> deleteDoctorById(@PathVariable Long id) {
        adminService.deleteDoctorById(id);
        return ResponseEntity.noContent().build();
    }

    // DELETE Patient by ID
    @DeleteMapping("/patient/{id}")
    public ResponseEntity<Void> deletePatientById(@PathVariable Long id) {
        adminService.deletePatientById(id);
        return ResponseEntity.noContent().build();
    }

    // DELETE Driver by ID
    @DeleteMapping("/driver/{id}")
    public ResponseEntity<Void> deleteDriverById(@PathVariable Long id) {
        adminService.deleteDriverById(id);
        return ResponseEntity.noContent().build();
    }

    // DELETE Vehicle by ID
    @DeleteMapping("/vehicle/{id}")
    public ResponseEntity<Void> deleteVehicleById(@PathVariable Long id) {
        adminService.deleteVehicleById(id);
        return ResponseEntity.noContent().build();
    }

    // DELETE Appointment by ID
    @DeleteMapping("/appointment/{id}")
    public ResponseEntity<Void> deleteAppointmentById(@PathVariable Long id) {
        adminService.deleteAppointmentById(id);
        return ResponseEntity.noContent().build();
    }

    // ------------------- TODO: Login & Create Account --------------------- \\
    // @PostMapping("/login")
    // public ResponseEntity<?> adminLogin(@RequestBody LoginRequest request) {
    // // TODO: Implement Admin Login
    // }

    // @PostMapping("/register")
    // public ResponseEntity<?> createAdmin(@RequestBody Admin admin) {
    // // TODO: Implement Admin Registration
    // }
}

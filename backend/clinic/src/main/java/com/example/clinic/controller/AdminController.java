package com.example.clinic.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.clinic.model.*;
import com.example.clinic.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;

    // ------------------- Get All --------------------- \\

    // yes
    @GetMapping("/admins")
    public ResponseEntity<List<Admin>> getAllAdmins() {
        return ResponseEntity.ok(adminService.getAllAdmins());
    }

    // yes
    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        return ResponseEntity.ok(adminService.getAllDoctors());
    }

    // yes
    @GetMapping("/patients")
    public ResponseEntity<List<Patient>> getAllPatients() {
        return ResponseEntity.ok(adminService.getAllPatients());
    }

    // yes
    @GetMapping("/drivers")
    public ResponseEntity<List<PatientDriver>> getAllDrivers() {
        return ResponseEntity.ok(adminService.getAllDrivers());
    }

    // yes
    @GetMapping("/vehicles")
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        return ResponseEntity.ok(adminService.getAllVehicles());
    }

    // yes
    @GetMapping("/appointments")
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        return ResponseEntity.ok(adminService.getAllAppointments());
    }

    // yes
    @GetMapping("/doctor-availabilities")
    public ResponseEntity<List<DoctorAvailability>> getAllDoctorAvailability() {
        return ResponseEntity.ok(adminService.getAllDoctorAvailability());
    }

    // yes
    @GetMapping("/doctor-reports")
    public ResponseEntity<List<DoctorReport>> getAllDoctorReports() {
        return ResponseEntity.ok(adminService.getAllAppointmentsDoctorReport());
    }

    // ------------------- Get By ID --------------------- \\

    // yes
    @GetMapping("/admin/{id}")
    public ResponseEntity<Optional<Admin>> getAdminById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getAdminById(id));
    }

    // yes
    @GetMapping("/doctor/{id}")
    public ResponseEntity<Optional<Doctor>> getDoctorById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getDoctorById(id));
    }

    // yes
    @GetMapping("/patient/{id}")
    public ResponseEntity<Optional<Patient>> getPatientById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getPatientById(id));
    }

    // yes
    @GetMapping("/driver/{id}")
    public ResponseEntity<Optional<PatientDriver>> getDriverById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getDriverById(id));
    }

    // yes
    @GetMapping("/vehicle/{id}")
    public ResponseEntity<Optional<Vehicle>> getVehicleById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getVehicleById(id));
    }

    // yes
    @GetMapping("/appointment/{id}")
    public ResponseEntity<Optional<Appointment>> getAppointmentById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getAppointmentById(id));
    }

    // ------------------- Post --------------------- \\
    @PostMapping("/addAdmin")
    public ResponseEntity<Admin> postAdmin(@RequestBody Admin admin) {
        return ResponseEntity.ok(adminService.createOrUpdateAdmin(admin));
    }

    @PostMapping("/addDoctor")
    public ResponseEntity<Doctor> postDoctor(@RequestBody Doctor doctor) {
        return ResponseEntity.ok(adminService.createOrUpdateDoctor(doctor));
    }

    @PostMapping(value = "/addVehicle", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Vehicle> addVehicle(
            @RequestPart("vehicle") Vehicle vehicle,
            @RequestPart("image") MultipartFile image) throws IOException {
        Vehicle savedVehicle = adminService.createOrUpdateVehicle(vehicle, image);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedVehicle);
    }

    @PostMapping(value = "/addPatientDriver", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<PatientDriver> addPatientDriver(
            @RequestPart("driver") PatientDriver driver,
            @RequestPart("driverImage") MultipartFile driverImage,
            @RequestPart("licenseImage") MultipartFile licenseImage) throws IOException {

        // Pass to service
        PatientDriver savedDriver = adminService.createOrUpdatePatientDriver(driver, driverImage, licenseImage);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDriver);
    }

    // ------------------- Get Delete ID --------------------- \\

    // DELETE Admin by ID
    // @DeleteMapping("/admin/{id}")
    // public ResponseEntity<Void> deleteAdminById(@PathVariable Long id) {
    // adminService.deleteAdmin(id);
    // return ResponseEntity.noContent().build(); // 204 No Content
    // }

    // DELETE Doctor by ID
    // @DeleteMapping("/doctor/{id}")
    // public ResponseEntity<Void> deleteDoctorById(@PathVariable Long id) {
    // adminService.deleteDoctor(id);
    // return ResponseEntity.noContent().build();
    // }

    // DELETE Patient by ID
    // @DeleteMapping("/patient/{id}")
    // public ResponseEntity<Void> deletePatientById(@PathVariable Long id) {
    // adminService.deletePatient(id);
    // return ResponseEntity.noContent().build();
    // }

    // DELETE Driver by ID
    // @DeleteMapping("/driver/{id}")
    // public ResponseEntity<Void> deleteDriverById(@PathVariable Long id) {
    // adminService.deleteDriver(id);
    // return ResponseEntity.noContent().build();
    // }

    // DELETE Vehicle by ID
    // @DeleteMapping("/vehicle/{id}")
    // public ResponseEntity<Void> deleteVehicleById(@PathVariable Long id) {
    // adminService.deleteVehicle(id);
    // return ResponseEntity.noContent().build();
    // }

    // DELETE Appointment by ID
    // @DeleteMapping("/appointment/{id}")
    // public ResponseEntity<Void> deleteAppointmentById(@PathVariable Long id) {
    // adminService.deleteAppointment(id);
    // return ResponseEntity.noContent().build();
    // }

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

package com.example.clinic.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.clinic.model.Admin;
import com.example.clinic.model.Appointment;
import com.example.clinic.model.Doctor;
import com.example.clinic.model.DoctorAvailability;
import com.example.clinic.model.DoctorReport;
import com.example.clinic.model.Patient;
import com.example.clinic.model.PatientDriver;
import com.example.clinic.model.Vehicle;
import com.example.clinic.repo.AdminRepo;
import com.example.clinic.repo.AppointmentRepo;
import com.example.clinic.repo.DoctorAvailabilityRepo;
import com.example.clinic.repo.DoctorRepo;
import com.example.clinic.repo.DoctorReportRepo;
import com.example.clinic.repo.PatientDriverRepo;
import com.example.clinic.repo.PatientRepo;
import com.example.clinic.repo.VehicleRepo;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private AppointmentRepo appointmentRepo;

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private PatientDriverRepo patientDriverRepo;

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    private DoctorAvailabilityRepo doctorAvailabilityRepo;
    
    @Autowired
    private DoctorReportRepo doctorReportRepo;

    // --------------------- List ------------------- \\

    public List<Admin> getAllAdmins() {
        return adminRepo.findAll();
    }

    public List<Doctor> getAllDoctors() {
        return doctorRepo.findAll();
    }

    public List<Patient> getAllPatients() {
        return patientRepo.findAll();
    }

    public List<PatientDriver> getAllDrivers() {
        return patientDriverRepo.findAll();
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepo.findAll();
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepo.findAll();
    }

    public List<DoctorAvailability> getAllDoctorAvailability() {
        return doctorAvailabilityRepo.findAll();
    }

    public List<DoctorReport> getAllAppointmentsDoctorReport() {
        return doctorReportRepo.findAll();
    }



    // -------------------- Singular ------------------- \\

    public Optional<Admin> getAdminById(Long id) {
        return adminRepo.findById(id);
    }

    public Optional<Doctor> getDoctorById(Long id) {
        return doctorRepo.findById(id);
    }

    public Optional<Patient> getPatientById(Long id) {
        return patientRepo.findById(id);
    }

    public Optional<PatientDriver> getDriverById(Long id) {
        return patientDriverRepo.findById(id);
    }

    public Optional<Vehicle> getVehicleById(Long id) {
        return vehicleRepo.findById(id);
    }

    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepo.findById(id);
    }

    public Optional<DoctorAvailability> getDoctorAvailability(Long id) {
        return doctorAvailabilityRepo.findById(id);
    }

    public Optional<DoctorReport> getAppointmentsDoctorReport(Long id) {
        return doctorReportRepo.findById(id);
    }

    // -------------------- Create / Update ------------------- \\

    // Admin
    public Admin createOrUpdateAdmin(Admin admin) {
        return adminRepo.save(admin);
    }

    // Doctor
    public Doctor createOrUpdateDoctor(Doctor doctor) {
        return doctorRepo.save(doctor);
    }

    // PatientDriver with two images: driver and license
    public PatientDriver createOrUpdateDriver(PatientDriver driver, MultipartFile driverImage, MultipartFile licenseImage) throws IOException {
        if (driverImage != null && !driverImage.isEmpty()) {
            driver.setDriverImageName(driverImage.getOriginalFilename());
            driver.setDriverImageType(driverImage.getContentType());
            driver.setDriverImageData(driverImage.getBytes());
        }
        if (licenseImage != null && !licenseImage.isEmpty()) {
            driver.setLicenseImageName(licenseImage.getOriginalFilename());
            driver.setLicenseImageType(licenseImage.getContentType());
            driver.setLicenseImageData(licenseImage.getBytes());
        }
        return patientDriverRepo.save(driver);
    }

    // Vehicle with image
    public Vehicle createOrUpdateVehicle(Vehicle vehicle, MultipartFile image) throws IOException {
        if (image != null && !image.isEmpty()) {
            vehicle.setImageName(image.getOriginalFilename());
            vehicle.setImageType(image.getContentType());
            vehicle.setImageData(image.getBytes());
        }
        return vehicleRepo.save(vehicle);
    }

    // -------------------- Delete ------------------- \\

    public void deleteAdmin(Long id) {
        adminRepo.deleteById(id);
    }

    public void deleteDoctor(Long id) {
        doctorRepo.deleteById(id);
    }

    public void deleteDriver(Long id) {
        patientDriverRepo.deleteById(id);
    }

    public void deletePatient(Long id) {
        patientRepo.deleteById(id);
    }

    public void deleteVehicle(Long id) {
        vehicleRepo.deleteById(id);
    }

    public void deleteAppointment(Long id) {
        appointmentRepo.deleteById(id);
    }

}

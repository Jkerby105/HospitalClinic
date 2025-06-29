package com.example.clinic.service;

import com.example.clinic.model.Appointment;
import com.example.clinic.model.AppointmentStatus;
import com.example.clinic.model.Doctor;
import com.example.clinic.model.DoctorReport;
import com.example.clinic.model.Patient;
import com.example.clinic.model.PatientDriver;
import com.example.clinic.model.Vehicle;
import com.example.clinic.repo.AppointmentRepo;
import com.example.clinic.repo.DoctorRepo;
import com.example.clinic.repo.DoctorReportRepo;
import com.example.clinic.repo.PatientDriverRepo;
import com.example.clinic.repo.PatientRepo;
import com.example.clinic.repo.VehicleRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private PatientDriverRepo patientDriverRepo;

    @Autowired
    private VehicleRepo vehicleRepo;

    // @Autowired
    // private Appointment appointment;


    @Autowired
    private AppointmentRepo appointmentRepo;

    @Autowired
    private DoctorReportRepo doctorReportRepo;

    // View patient profile
    public Optional<Patient> getPatientById(Long id) {
        return patientRepo.findById(id);
    }

    // Create / Update patient profile
    public Patient updatePatient(Patient updatedPatient) {
        return patientRepo.save(updatedPatient);
    }

    // View doctor reports for a patient
    public List<DoctorReport> getReportsByPatientId(Long patientId) {
        return doctorReportRepo.findByAppointmentPatientId(patientId);
    }

    // public List<Appointment> getAppointmentsByPatientId(Long patientId, String keyword) {
    //     if (keyword == null || keyword.isBlank()) {
    //         return appointmentRepo.findByPatientId(patientId);
    //     }

    //     try {
    //         AppointmentStatus status = AppointmentStatus.valueOf(keyword.toUpperCase());
    //         return appointmentRepo.findByPatientIdAndStatus(patientId, status);
    //     } catch (IllegalArgumentException e) {

    //         return appointmentRepo.findByPatientId(patientId);
    //     }
    // }

    // public Appointment saveAppointment(Appointment appointment) {
           
    //     return appointmentRepo.save(appointment);
    // }



    public Appointment createAppointment(Appointment appointment1) {
    Patient patient = patientRepo.findById(appointment1.getPatient().getId())
        .orElseThrow(() -> new RuntimeException("Patient not found"));

    Doctor doctor = doctorRepo.findById(appointment1.getDoctor().getId())
        .orElseThrow(() -> new RuntimeException("Doctor not found"));

    Appointment appointment = new Appointment();
    appointment.setPatient(patient);
    appointment.setDoctor(doctor);

    // Optional: only set if driver/vehicle IDs were provided
    if (appointment1.getPatientDriver() != null) {
        PatientDriver driver = patientDriverRepo.findById(appointment1.getPatientDriver().getId())
            .orElseThrow(() -> new RuntimeException("Patient driver not found"));
        appointment.setPatientDriver(driver);
    }

    if (appointment1.getVehicle() != null) {
        Vehicle vehicle = vehicleRepo.findById(appointment1.getVehicle().getId())
            .orElseThrow(() -> new RuntimeException("Vehicle not found"));
        appointment.setVehicle(vehicle);
    }

    appointment.setStartTime(appointment1.getStartTime());
    
    // Set end time based on start time + 30 minutes
    appointment.setEndTime(appointment1.getStartTime().plusMinutes(30));

    appointment.setAppointmentType(appointment1.getAppointmentType());
    appointment.setStatus(AppointmentStatus.PENDING); // or from appointment1 if needed

    appointment.setReasonForVisit(appointment1.getReasonForVisit());

    // Optional pickup details
    appointment.setPickedUp(appointment1.isPickedUp());
    appointment.setPickupAddressLine(appointment1.getPickupAddressLine());
    appointment.setPickupCity(appointment1.getPickupCity());
    appointment.setPickupState(appointment1.getPickupState());
    appointment.setPickupZipCode(appointment1.getPickupZipCode());
    appointment.setPickupNotes(appointment1.getPickupNotes());

    return appointmentRepo.save(appointment);
}


    // ill get to it later
    public Object getAppointments(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAppointments'");
    }

}

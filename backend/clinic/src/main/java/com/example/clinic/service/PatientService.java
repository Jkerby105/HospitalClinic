package com.example.clinic.service;

import com.example.clinic.model.Appointment;
import com.example.clinic.model.AppointmentCreateRequest;
import com.example.clinic.model.AppointmentRequestDTO;
import com.example.clinic.model.AppointmentStatus;
import com.example.clinic.model.AppointmentType;
import com.example.clinic.model.AvailabilityResponse;
import com.example.clinic.model.Doctor;
import com.example.clinic.model.DoctorAvailability;
import com.example.clinic.model.DoctorReport;
import com.example.clinic.model.Patient;
import com.example.clinic.model.PatientDriver;
import com.example.clinic.model.Vehicle;
import com.example.clinic.repo.AppointmentRepo;
import com.example.clinic.repo.DoctorAvailabilityRepo;
import com.example.clinic.repo.DoctorRepo;
import com.example.clinic.repo.DoctorReportRepo;
import com.example.clinic.repo.PatientDriverRepo;
import com.example.clinic.repo.PatientRepo;
import com.example.clinic.repo.VehicleRepo;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    private static final int SLOT_MINUTES = 20;
    private static final DateTimeFormatter HH_MM = DateTimeFormatter.ofPattern("HH:mm");

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

    @Autowired
    private DoctorAvailabilityRepo availabilityRepo;

    // View patient profile
    public Optional<Patient> getPatientById(Long id) {
        return patientRepo.findById(id);
    }

    // Create / Update patient profile
    public Optional<Patient> createUpdatePatient(Patient patient) {
        if (patient.getPassword() != null) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            patient.setPassword(passwordEncoder.encode(patient.getPassword()));
        }

        return Optional.of(patientRepo.save(patient));
    }

    // View doctor reports for a patient
    public List<DoctorReport> getReportsByPatientId(Long patientId) {
        return doctorReportRepo.findByAppointmentPatientId(patientId);
    }

    // public List<Appointment> getAppointmentsByPatientId(Long patientId, String
    // keyword) {
    // if (keyword == null || keyword.isBlank()) {
    // return appointmentRepo.findByPatientId(patientId);
    // }

    // try {
    // AppointmentStatus status = AppointmentStatus.valueOf(keyword.toUpperCase());
    // return appointmentRepo.findByPatientIdAndStatus(patientId, status);
    // } catch (IllegalArgumentException e) {

    // return appointmentRepo.findByPatientId(patientId);
    // }
    // }

    // public Appointment saveAppointment(Appointment appointment) {

    // return appointmentRepo.save(appointment);
    // }

    // public Appointment createAppointment(Appointment appointment1, Long
    // patientId) {
    // System.out.println("apointment1: " + appointment1);

    // Patient patient = patientRepo.findById(patientId)
    // .orElseThrow(() -> new RuntimeException("Patient not found"));

    // Doctor doctor = doctorRepo.findById(appointment1.getDoctor().getId())
    // .orElseThrow(() -> new RuntimeException("Doctor not found"));

    // Appointment appointment = new Appointment();
    // appointment.setPatient(patient);
    // appointment.setDoctor(doctor);

    // // Optional: only set if driver/vehicle IDs were provided
    // if (appointment1.getPatientDriver() != null) {
    // PatientDriver driver =
    // patientDriverRepo.findById(appointment1.getPatientDriver().getId())
    // .orElseThrow(() -> new RuntimeException("Patient driver not found"));
    // appointment.setPatientDriver(driver);
    // }

    // if (appointment1.getVehicle() != null) {
    // Vehicle vehicle = vehicleRepo.findById(appointment1.getVehicle().getId())
    // .orElseThrow(() -> new RuntimeException("Vehicle not found"));
    // appointment.setVehicle(vehicle);
    // }

    // appointment.setStartTime(appointment1.getStartTime());

    // // Set end time based on start time + 30 minutes
    // appointment.setEndTime(appointment1.getStartTime().plusMinutes(20));

    // appointment.setAppointmentType(appointment1.getAppointmentType());
    // appointment.setStatus(AppointmentStatus.PENDING); // or from appointment1 if
    // needed

    // appointment.setReasonForVisit(appointment1.getReasonForVisit());

    // // Optional pickup details
    // appointment.setPickedUp(appointment1.isPickedUp());
    // appointment.setPickupAddressLine(appointment1.getPickupAddressLine());
    // appointment.setPickupCity(appointment1.getPickupCity());
    // appointment.setPickupState(appointment1.getPickupState());
    // appointment.setPickupZipCode(appointment1.getPickupZipCode());
    // appointment.setPickupNotes(appointment1.getPickupNotes());
    // appointment.setAppointmentDay(appointment1.getAppointmentDay());

    // return appointmentRepo.save(appointment);
    // }

    // ++++++++++++++++++++++++++++++

    public Appointment createAppointment(AppointmentRequestDTO req, Long patientId) {
        Patient patient = patientRepo.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        Doctor doctor = doctorRepo.findById(req.getDoctorId())
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        // Build start LocalDateTime from appointmentDay + startTime ("HH:mm")
        LocalDate date = computeDateFromDayName(req.getAppointmentDay()); // next occurrence (incl. today)
        LocalTime time = LocalTime.parse(req.getStartTime()); // requires "HH:mm"
        LocalDateTime start = LocalDateTime.of(date, time);

        Appointment appt = new Appointment();
        appt.setPatient(patient);
        appt.setDoctor(doctor);
        appt.setStartTime(start);
        appt.setEndTime(start.plusMinutes(SLOT_MINUTES));
        appt.setReasonForVisit(req.getReasonForVisit());
        appt.setAppointmentDay(req.getAppointmentDay());
        appt.setPickedUp(req.isPickedUp());
        appt.setPickupAddressLine(req.getPickupAddressLine());
        appt.setPickupCity(req.getPickupCity());
        appt.setPickupState(req.getPickupState());
        appt.setPickupZipCode(req.getPickupZipCode());
        appt.setPickupNotes(req.getPickupNotes());

        // Map enums safely with defaults
        appt.setAppointmentType(parseAppointmentType(req.getAppointmentType()));
        appt.setStatus(parseAppointmentStatus(req.getStatus()));

        // (Optional) reject double-booking
        boolean taken = appointmentRepo
                .findByDoctorIdAndStartTimeBetween(
                        doctor.getId(),
                        start.toLocalDate().atStartOfDay(),
                        start.toLocalDate().atTime(LocalTime.MAX))
                .stream()
                .anyMatch(a -> a.getStartTime().equals(start));
        if (taken)
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Time slot already taken");

        return appointmentRepo.save(appt);
    }

    private LocalDate computeDateFromDayName(String dayName) {
        if (dayName == null || dayName.isBlank())
            return LocalDate.now();
        DayOfWeek target;
        try {
            target = DayOfWeek.valueOf(dayName.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            return LocalDate.now();
        }
        LocalDate today = LocalDate.now();
        return (today.getDayOfWeek() == target) ? today : today.with(TemporalAdjusters.next(target));
    }

    private AppointmentType parseAppointmentType(String s) {
        if (s == null || s.isBlank())
            return AppointmentType.WALK_IN;
        try {
            return AppointmentType.valueOf(s.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            return AppointmentType.WALK_IN;
        }
    }

    private AppointmentStatus parseAppointmentStatus(String s) {
        if (s == null || s.isBlank())
            return AppointmentStatus.PENDING;
        try {
            return AppointmentStatus.valueOf(s.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            return AppointmentStatus.PENDING;
        }
    }

    // ------------------------------

    public AvailabilityResponse getAvailability(Long doctorId, DayOfWeek dayOfWeek) {

        Optional<DoctorAvailability> optionalAvailability = availabilityRepo
                .findByDoctorIdAndDayOfWeekAndIsActiveTrue(doctorId, dayOfWeek);

        if (optionalAvailability.isEmpty()) {
            AvailabilityResponse empty = new AvailabilityResponse();
            empty.setAvailableSlots(Collections.emptyList());
            empty.setTakenSlots(Collections.emptyList());
            return empty;
        }

        DoctorAvailability availability = optionalAvailability.get();

        LocalDate targetDate = computeNextOrToday(dayOfWeek);

        List<String> allSlots = getTimeSlots(availability.getStartTime(), availability.getEndTime());

        LocalDateTime dayStart = targetDate.atStartOfDay();
        LocalDateTime dayEnd = targetDate.atTime(LocalTime.MAX);

        List<Appointment> existingAppointments = appointmentRepo
                .findByDoctorIdAndStartTimeBetween(doctorId, dayStart, dayEnd);

        List<String> takenSlots = existingAppointments.stream()
                .map(appt -> appt.getStartTime().toLocalTime().toString()) // "10:00"
                .toList();

        List<String> availableSlots = allSlots.stream()
                .filter(slot -> !takenSlots.contains(slot))
                .toList();

        AvailabilityResponse response = new AvailabilityResponse();
        response.setAvailableSlots(availableSlots);
        response.setTakenSlots(takenSlots);
        return response;
    }

    private LocalDate computeNextOrToday(DayOfWeek target) {
        LocalDate today = LocalDate.now();
        return (today.getDayOfWeek() == target)
                ? today
                : today.with(java.time.temporal.TemporalAdjusters.next(target));
    }

    public List<String> getTimeSlots(LocalTime start, LocalTime end) {
        List<String> slots = new ArrayList<>();
        while (!start.plusMinutes(20).isAfter(end)) {
            slots.add(start.toString());
            start = start.plusMinutes(20);
        }
        return slots;
    }

    public Optional<Patient> getPatientByUsername(String username) {
        return Optional.ofNullable(patientRepo.findByUsername(username));
    }

}

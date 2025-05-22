package com.example.clinic.repo;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.clinic.model.Appointment;
import com.example.clinic.model.AppointmentStatus;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Long> {

    List<Appointment> findByPatientDriverId(Long driverId);

    List<Appointment> findByPatientDriverIdAndPickupDateTimeBefore(Long driverId, LocalDateTime dateTime);

    List<Appointment> findByPatientDriverIdAndPickupDateTimeAfter(Long driverId, LocalDateTime dateTime);

    @Query("SELECT a FROM Appointment a WHERE a.patientDriver.id = :driverId")
    List<Appointment> getAppointmentsForDriver(@Param("driverId") Long driverId);

    List<Appointment> findByPatientId(Long patientId);

    List<Appointment> findByPatientIdAndStatus(Long patientId, AppointmentStatus status);

}
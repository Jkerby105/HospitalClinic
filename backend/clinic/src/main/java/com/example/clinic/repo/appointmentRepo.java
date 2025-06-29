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

    List<Appointment> findByPatientDriverId(Long driverId);;

    @Query("SELECT a FROM Appointment a WHERE a.patientDriver.id = :driverId")
    List<Appointment> getUpcomingAppointmentsForDriver(@Param("driverId") Long
    driverId);

    // @Query("SELECT a FROM Appointment a WHERE a.patientDriver.id = :driverId AND a.startTime > :currentTime")
    // List<Appointment> getUpcomingAppointmentsForDriver(
    //         @Param("driverId") Long driverId,
    //         @Param("currentTime") LocalDateTime currentTime);

    List<Appointment> findByPatientId(Long patientId);

    List<Appointment> findByPatientIdAndStatus(Long patientId, AppointmentStatus status);

}
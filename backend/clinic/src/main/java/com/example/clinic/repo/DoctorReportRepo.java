package com.example.clinic.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.clinic.model.DoctorReport;

@Repository
public interface DoctorReportRepo extends JpaRepository<DoctorReport, Long> {

    List<DoctorReport> findByAppointmentPatientId(Long patientId);

    // List<DoctorReport> findByDoctorId(Long id);

    @Query("SELECT dr FROM DoctorReport dr WHERE dr.appointment.doctor.id = :doctorId")
    List<DoctorReport> findByDoctorId(@Param("doctorId") Long doctorId);
    

}
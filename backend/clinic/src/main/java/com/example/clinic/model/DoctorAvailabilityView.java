package com.example.clinic.model;

import java.time.DayOfWeek;
import java.time.LocalTime;



public interface DoctorAvailabilityView {
    Long getId();

    DayOfWeek getDayOfWeek();

    LocalTime getStartTime();

    LocalTime getEndTime();

    Boolean getIsActive();
}

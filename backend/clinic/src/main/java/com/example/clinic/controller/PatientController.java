package com.example.clinic.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.clinic.model.Appointment;
import com.example.clinic.model.DoctorReport;
import com.example.clinic.model.LoginRequest;
import com.example.clinic.model.Patient;
import com.example.clinic.service.JwtService;
import com.example.clinic.service.PatientService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;

import java.time.Duration;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PatientService patientService;

    // ------------------ Get Info ------------------ \\

    @GetMapping("/info/{id}")
    public ResponseEntity<Optional<Patient>> getPatientById(@PathVariable Long id) {
        return ResponseEntity.ok(patientService.getPatientById(id));
    }

    // @GetMapping("/info/appointments/{id}")
    // public ResponseEntity<List<Appointment>> getAppointments(@PathVariable Long
    // id) {
    // return ResponseEntity.ok(patientService.getAppointments(id));
    // }

    // @GetMapping("/info/reports/{id}")
    // public ResponseEntity<List<DoctorReport>> getDoctorReports(@PathVariable Long
    // id) {
    // return ResponseEntity.ok(patientService.getReports(id));
    // }

    // ------------------ Create / Update ------------------ \\

    @PostMapping("/appointment")
    public ResponseEntity<Appointment> saveAppointment(@RequestBody Appointment appointment) {
        return ResponseEntity.ok(patientService.createAppointment(appointment));
    }

    // ------------------ TODO: Login & Create Account ------------------ \\
    // @PostMapping("/login")
    // public ResponseEntity<?> patientLogin(@RequestBody LoginRequest request) {
    // // TODO: Implement Patient Login
    // }

    @PostMapping("/register")
    public Optional<Patient> createPatient(@RequestBody Patient patient) {
        System.out.println("Creating patient: " + patient);
        return patientService.createUpdatePatient(patient);
    }

    // @PostMapping("/login")
    // public String login(@RequestBody LoginRequest loginRequest) {
    // // This is a placeholder for the login logic.
    // System.out.println("Logging in user: " + loginRequest.getUsername() + " with
    // password: " + loginRequest.getPassword());

    // Authentication authentication = authenticationManager.authenticate(new
    // UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
    // loginRequest.getPassword()));

    // if(authentication.isAuthenticated()){
    // return jwtService.generateToken(loginRequest.getUsername());
    // }else{
    // return "failure";
    // }

    // }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        // System.out.println(
        // "Logging in user: " + loginRequest.getUsername() + " with password: " +
        // loginRequest.getPassword());

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()));

        if (authentication.isAuthenticated()) {
            // System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            // System.out.println(authentication);
            // System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            String jwt = jwtService.generateToken(loginRequest.getUsername());
            // System.out.println("==========================================================");
            // System.out.println(jwt);
            // System.out.println("==========================================================");

            // ✅ Set HttpOnly cookie
            ResponseCookie cookie = ResponseCookie.from("jwt", jwt)
                    .httpOnly(true)
                    .secure(false) // set to false if testing without HTTPS locally
                    .path("/")
                    .sameSite("Lax")
                    .maxAge(Duration.ofHours(1)) // optional: sets expiration
                    .build();

            // System.out.println("-------------------------------------------------------");
            // System.out.println(cookie);
            // System.out.println(cookie.toString());
            // System.out.println("-------------------------------------------------------");

            response.setHeader(HttpHeaders.SET_COOKIE, cookie.toString());
            Map<String, Object> responseMap = new HashMap<>();
            String role = authentication.getAuthorities().stream()
                    .findFirst()
                    .map(auth -> auth.getAuthority())
                    .orElse("ROLE_USER");
            System.out.println("User role: " + role);
            responseMap.put("role", role);

            return ResponseEntity.ok(responseMap);

        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }

    @GetMapping("/check-auth")
    public ResponseEntity<?> checkAuth() {
        System.out.println("-------------------------------------------------------------------------");
        System.out.println("Checking authentication status...");
        System.out.println("-------------------------------------------------------------------------");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Checking authentication: " + authentication
                + "----------------------------------------------------------------------------------------");

        if (authentication != null && authentication.isAuthenticated()) {
            System.out.println("User is authenticated: " + authentication.getName());
            Map<String, Object> response = new HashMap<>();
            response.put("authenticated", true);
            response.put("username", authentication.getName());

            String role = authentication.getAuthorities().stream()
                    .findFirst()
                    .map(auth -> auth.getAuthority())
                    .orElse("ROLE_USER");
            System.out.println("User role: " + role);
            response.put("role", role);

            return ResponseEntity.ok(response);
        }

        // This part is a defensive measure and should theoretically be unreachable
        // because Spring Security would have already returned a 401.
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
    }

}

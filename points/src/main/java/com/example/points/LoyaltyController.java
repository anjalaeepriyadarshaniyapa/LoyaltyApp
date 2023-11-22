package com.example.points;

import java.util.List;

import javax.persistence.EntityNotFoundException;

//LoyaltyController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/loyalty")
public class LoyaltyController {

 @Autowired
 private LoyaltyService loyaltyService;

 @PostMapping("/createCustomer")
 public List<Customer> createCustomer(@RequestBody Customer customer) {
    loyaltyService.createCustomer(customer);
    return loyaltyService.getAllCustomers();
 }

@GetMapping("/getAllCustomers")
public List<Customer> getAllCustomers() {
    return loyaltyService.getAllCustomers();
}

 @PostMapping("/addPoints/{customerId}")
 public Purchase addPoints(@PathVariable Long customerId, @RequestBody Purchase purchase) {
     return loyaltyService.addPoints(customerId, purchase);
 }

 @GetMapping("/viewPoints/{customerId}")
 public List<Purchase> viewPoints(@PathVariable Long customerId) {
     return loyaltyService.viewPoints(customerId);
 }

 @PostMapping("/redeemPoints/{customerId}")
 public ResponseEntity<String> redeemPoints(@PathVariable Long customerId, @RequestBody Purchase purchase) {
     // Implement redemption logic here and update points
     return loyaltyService.redeemPoints(customerId, purchase);
 }
}



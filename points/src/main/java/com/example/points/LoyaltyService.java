package com.example.points;

//LoyaltyService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import javax.persistence.EntityNotFoundException;

@Service
public class LoyaltyService {

 @Autowired
 private CustomerRepository customerRepository;

 @Autowired
 private PurchaseRepository purchaseRepository;

 @Transactional
 public Customer createCustomer(Customer customer) {
     return customerRepository.save(customer);
 }

@Transactional
public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
 }

 @Transactional
 public Purchase addPoints(Long customerId, Purchase purchase) {
     Customer customer = customerRepository.findById(customerId)
             .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

     purchase.setCustomer(customer);
     return purchaseRepository.save(purchase);
 }

 @Transactional(readOnly = true)
 public List<Purchase> viewPoints(Long customerId) {
     Customer customer = customerRepository.findById(customerId)
             .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

     return purchaseRepository.findByCustomer(customer);
 }

 // Additional methods for business logic and point redemption
 @Transactional
 public ResponseEntity<String> redeemPoints(Long customerId, Purchase purchase) {
     Customer customer = customerRepository.findById(customerId)
             .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

     List<Purchase> customerPurchases = purchaseRepository.findByCustomer(customer);

     // Calculate total points earned and redeemed
     int totalEarnedPoints = customerPurchases.stream().mapToInt(Purchase::getPoints).sum();
     int totalRedeemedPoints = customerPurchases.stream().mapToInt(Purchase::getRedeemedPoints).sum();

     // Check if there are enough points to redeem
     if (totalEarnedPoints - totalRedeemedPoints >= purchase.getRedeemedPoints()) {
         // Update the Purchase entity with redeemed points
         purchase.setRedeemedPoints(purchase.getRedeemedPoints());

         // Update the customer's total redeemed points
         customer.setTotalRedeemedPoints(customer.getTotalRedeemedPoints() + purchase.getRedeemedPoints());

         // Update the points in the database
         purchase.setCustomer(customer);
         purchaseRepository.save(purchase);
         customerRepository.save(customer);

         return ResponseEntity.ok("Points redeemed successfully");
     } else {
         return ResponseEntity.badRequest().body("Not enough points to redeem");
     }
 }
}

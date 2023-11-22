package com.example.points;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//Customer.java
@Entity
public class Customer {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String name;
 private int totalRedeemedPoints;
 
 
 
public int getTotalRedeemedPoints() {
	return totalRedeemedPoints;
}
public void setTotalRedeemedPoints(int totalRedeemedPoints) {
	this.totalRedeemedPoints = totalRedeemedPoints;
}
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}

 

 // getters and setters
}

package com.sneakup.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "offers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Offer {

    @Id
    private String id; // Matches "off-fresh-01", etc.

    private String title;
    private String badge;
    
    @Column(length = 500) // Extends length to accommodate descriptive text safely
    private String description;
    
    private String discountDisplay;
    private double originalPrice;
    private double offerPrice;
    private String emoji;
    private String expiresIn;
    private String bgColor;
    private String borderColor;
    private String accentColor;
}
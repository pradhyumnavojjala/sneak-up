package com.sneakup.backend.service;

import com.sneakup.backend.entity.Offer;
import com.sneakup.backend.repository.OfferRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfferService {

    private final OfferRepository offerRepository;

    // Standard constructor dependency injection
    public OfferService(OfferRepository offerRepository) {
        this.offerRepository = offerRepository;
    }

    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    public Optional<Offer> getOfferById(String id) {
        return offerRepository.findById(id);
    }
}
package com.sneakup.backend.service;

import com.sneakup.backend.entity.Store;
import com.sneakup.backend.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreService {

    @Autowired
    private StoreRepository repository;

    public List<Store> getAllStores() {
        return repository.findAll();
    }

    public Store getStoreById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Store addStore(Store store) {
        return repository.save(store);
    }

    public Store updateStore(Long id, Store store) {

        Store existing = repository.findById(id).orElse(null);

        if (existing == null)
            return null;

        existing.setName(store.getName());
        existing.setEmoji(store.getEmoji());
        existing.setRating(store.getRating());
        existing.setDelivery(store.getDelivery());
        existing.setProducts(store.getProducts());
        existing.setColor(store.getColor());

        return repository.save(existing);
    }

    public void deleteStore(Long id) {
        repository.deleteById(id);
    }

}
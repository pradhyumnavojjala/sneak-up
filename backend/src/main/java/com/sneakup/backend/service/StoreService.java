package com.sneakup.backend.service;

import com.sneakup.backend.entity.Store;
import com.sneakup.backend.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreService {

    @Autowired
    private StoreRepository storeRepository;

    public List<Store> getAllStores() {
        return storeRepository.findAll();
    }

    public Store getStoreById(Long id) {
        return storeRepository.findById(id).orElse(null);
    }

    public Store createStore(Store store) {
        return storeRepository.save(store);
    }

    public Store updateStore(Long id, Store updatedStore) {

        Store existingStore = storeRepository.findById(id).orElse(null);

        if (existingStore == null) {
            return null;
        }

        existingStore.setName(updatedStore.getName());
        existingStore.setEmoji(updatedStore.getEmoji());
        existingStore.setRating(updatedStore.getRating());
        existingStore.setDelivery(updatedStore.getDelivery());
        existingStore.setProducts(updatedStore.getProducts());
        existingStore.setColor(updatedStore.getColor());

        return storeRepository.save(existingStore);
    }

    public void deleteStore(Long id) {
        storeRepository.deleteById(id);
    }
}
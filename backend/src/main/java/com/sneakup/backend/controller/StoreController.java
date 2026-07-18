package com.sneakup.backend.controller;

import com.sneakup.backend.entity.Store;
import com.sneakup.backend.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stores")
@CrossOrigin(origins = "http://localhost:3000")
public class StoreController {

    @Autowired
    private StoreService service;

    @GetMapping
    public List<Store> getStores() {
        return service.getAllStores();
    }

    @GetMapping("/{id}")
    public Store getStore(@PathVariable Long id) {
        return service.getStoreById(id);
    }

    @PostMapping
    public Store addStore(@RequestBody Store store) {
        return service.addStore(store);
    }

    @PutMapping("/{id}")
    public Store updateStore(@PathVariable Long id,
                             @RequestBody Store store) {
        return service.updateStore(id, store);
    }

    @DeleteMapping("/{id}")
    public String deleteStore(@PathVariable Long id) {
        service.deleteStore(id);
        return "Store Deleted Successfully";
    }

}
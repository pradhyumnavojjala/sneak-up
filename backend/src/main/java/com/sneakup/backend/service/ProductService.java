package com.sneakup.backend.service;

import com.sneakup.backend.entity.Product;
import com.sneakup.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    public List<Product> getProductsByStore(Long storeId) {
        return repository.findByStoreId(storeId);
    }

    public Product getProduct(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Product addProduct(Product product) {
        return repository.save(product);
    }

    public Product updateProduct(Long id, Product product) {

        Product existing = repository.findById(id).orElse(null);

        if (existing == null)
            return null;

        existing.setName(product.getName());
        existing.setPrice(product.getPrice());
        existing.setImage(product.getImage());
        existing.setCategory(product.getCategory());
        existing.setRating(product.getRating());
        existing.setAvailable(product.getAvailable());
        existing.setStore(product.getStore());

        return repository.save(existing);
    }

    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
}
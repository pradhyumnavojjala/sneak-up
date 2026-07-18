package com.sneakup.backend.service;

import com.sneakup.backend.entity.Category;
import com.sneakup.backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository repository;

    public CategoryService(CategoryRepository repository) {
        this.repository = repository;
    }

    public List<Category> getAllCategories() {
        return repository.findAll();
    }

    public List<Category> getStoreCategories(Long storeId) {
        return repository.findByStoreId(storeId);
    }

    public Category save(Category category) {
        return repository.save(category);
    }
}
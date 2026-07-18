package com.sneakup.backend.controller;

import com.sneakup.backend.entity.Category;
import com.sneakup.backend.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "*")
public class CategoryController {

    private final CategoryService service;

    public CategoryController(CategoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<Category> getAll() {
        return service.getAllCategories();
    }

    @GetMapping("/store/{storeId}")
    public List<Category> getStoreCategories(@PathVariable Long storeId) {
        return service.getStoreCategories(storeId);
    }

    @PostMapping
    public Category save(@RequestBody Category category) {
        return service.save(category);
    }
}
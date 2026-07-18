package com.sneakup.backend.service;

import com.sneakup.backend.entity.Order;
import com.sneakup.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.sneakup.backend.entity.OrderItem;
import com.sneakup.backend.repository.ProductRepository;
import com.sneakup.backend.entity.Product;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {
	
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository repository;

    public List<Order> getAllOrders() {
        return repository.findAll();
    }

    public Order getOrder(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Transactional
    public Order placeOrder(Order order) {
        order.setOrderTime(LocalDateTime.now());
        
        // Ensure default status if missing
        if (order.getStatus() == null || order.getStatus().isEmpty()) {
            order.setStatus("Pending");
        }

        if (order.getItems() != null) {
            for (OrderItem item : order.getItems()) {
                item.setOrder(order);
                
                // CRITICAL: Fetch the attached product from the DB to prevent transient detachment errors
                if (item.getProduct() != null && item.getProduct().getId() != null) {
                    Product persistedProduct = productRepository.findById(item.getProduct().getId())
                            .orElseThrow(() -> new RuntimeException("Product not found with ID: " + item.getProduct().getId()));
                    item.setProduct(persistedProduct);
                } else {
                    throw new RuntimeException("Every order item must have a valid associated product ID.");
                }
            }
        }

        return repository.save(order);
    }

    @Transactional
    public Order updateOrder(Long id, Order order) {
        Order existing = repository.findById(id).orElse(null);

        if (existing == null)
            return null;

        // ✅ FIX: Only update fields if they are sent in the payload (prevents turning fields to null)
        if (order.getCustomerName() != null) existing.setCustomerName(order.getCustomerName());
        if (order.getPhone() != null) existing.setPhone(order.getPhone());
        if (order.getAddress() != null) existing.setAddress(order.getAddress());
        if (order.getTotalAmount() != null) existing.setTotalAmount(order.getTotalAmount());
        if (order.getStatus() != null) existing.setStatus(order.getStatus());
        if (order.getStore() != null) existing.setStore(order.getStore());

        return repository.save(existing);
    }

    public void deleteOrder(Long id) {
        repository.deleteById(id);
    }
}
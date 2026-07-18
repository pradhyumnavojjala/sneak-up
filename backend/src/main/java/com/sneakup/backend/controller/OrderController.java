package com.sneakup.backend.controller;

import com.sneakup.backend.entity.Order;
import com.sneakup.backend.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderService service;


    @GetMapping
    public List<Order> getOrders() {
        return service.getAllOrders();
    }


    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {
        return service.getOrder(id);
    }


    @PostMapping
    public Order placeOrder(@RequestBody Order order){

        System.out.println("ORDER RECEIVED:");
        System.out.println(order);

        return service.placeOrder(order);
    }


    @PutMapping("/{id}")
    public Order updateOrder(
            @PathVariable Long id,
            @RequestBody Order order
    ) {
        return service.updateOrder(id, order);
    }


    @DeleteMapping("/{id}")
    public String deleteOrder(@PathVariable Long id) {
        service.deleteOrder(id);
        return "Order Deleted Successfully";
    }

}
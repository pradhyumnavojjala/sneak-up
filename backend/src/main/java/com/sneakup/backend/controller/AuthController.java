package com.sneakup.backend.controller;

import com.sneakup.backend.entity.User;
import com.sneakup.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User register(@RequestBody User user) {

        return service.register(user);

    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        return service.login(
                user.getEmail(),
                user.getPassword()
        );

    }

}
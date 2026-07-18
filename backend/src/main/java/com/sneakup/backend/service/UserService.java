package com.sneakup.backend.service;

import com.sneakup.backend.entity.User;
import com.sneakup.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder encoder;

    public User register(User user) {

        user.setPassword(
                encoder.encode(user.getPassword())
        );

        user.setRole("CUSTOMER");

        return repository.save(user);
    }

    public String login(String email, String password) {

        User user = repository.findByEmail(email).orElse(null);

        if(user == null)
            return "User Not Found";

        if(encoder.matches(password, user.getPassword()))
            return "Login Successful";

        return "Invalid Password";

    }

}
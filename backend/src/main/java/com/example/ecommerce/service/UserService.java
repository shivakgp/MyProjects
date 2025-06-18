package com.example.ecommerce.service;

import com.example.ecommerce.model.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
    private final Map<String, User> users = new HashMap<>();
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private long idCounter = 1;

    public User register(String username, String password, String role) {
        String hash = encoder.encode(password);
        User user = new User(idCounter++, username, hash, role);
        users.put(username, user);
        return user;
    }

    public Optional<User> findByUsername(String username) {
        return Optional.ofNullable(users.get(username));
    }

    public boolean checkPassword(User user, String rawPassword) {
        return encoder.matches(rawPassword, user.getPasswordHash());
    }
}

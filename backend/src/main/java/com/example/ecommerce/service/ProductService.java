package com.example.ecommerce.service;

import com.example.ecommerce.model.Product;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService {
    private final Map<Long, Product> products = new HashMap<>();
    private long idCounter = 1;

    public List<Product> findAll() {
        return new ArrayList<>(products.values());
    }

    public Product addProduct(Product product) {
        product.setId(idCounter++);
        products.put(product.getId(), product);
        return product;
    }
}

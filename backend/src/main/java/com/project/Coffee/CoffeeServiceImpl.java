package com.project.Coffee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class CoffeeServiceImpl implements CoffeeService {

    @Autowired
    private CoffeeRepository coffeeRepository;

    @Override
    public ResponseEntity<String> save(Coffee coffee) {
        return new ResponseEntity<>("Zapisano", HttpStatus.OK);
    }

    @Override
    public Iterable<Coffee> listCoffees() {
        return coffeeRepository.findAll();
    }

    @Override
    public Optional<Coffee> getCoffeeById(Long id) {
        return coffeeRepository.findById(id);
    }

    @Override
    public Set<Coffee> getMostPopularCoffees() {
        return coffeeRepository.getMostPopularCoffees();
    }
}

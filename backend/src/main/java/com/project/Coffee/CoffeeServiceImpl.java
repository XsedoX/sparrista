package com.project.Coffee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class CoffeeServiceImpl implements CoffeeService {

    @Autowired
    private CoffeeRepository coffeeRepository;

    @Override
    public Coffee save(Coffee coffee) {
        return coffeeRepository.save(coffee);
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

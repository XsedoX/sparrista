package com.project.coffee;


import java.util.Optional;
import java.util.Set;

public interface CoffeeService {

    void save(Coffee coffee);
    Iterable<Coffee> listCoffees();
    Optional<Coffee> getCoffeeById(Long id);
    Set<Coffee> getMostPopularCoffees();
}

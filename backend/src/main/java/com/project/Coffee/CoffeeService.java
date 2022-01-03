package com.project.Coffee;


import org.springframework.http.ResponseEntity;

import java.util.Optional;
import java.util.Set;

public interface CoffeeService {

    ResponseEntity<String> save(Coffee coffee);
    Iterable<Coffee> listCoffees();
    Optional<Coffee> getCoffeeById(Long id);
    Set<Coffee> getMostPopularCoffees();
}

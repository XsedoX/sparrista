package com.project.Coffee;


import java.util.Optional;
import java.util.Set;

public interface CoffeeService {

    Coffee save(Coffee coffee);
    Iterable<Coffee> listCoffees();
    Optional<Coffee> getCoffeeById(Long id);
    Set<Coffee> getMostPopularCoffees();
}

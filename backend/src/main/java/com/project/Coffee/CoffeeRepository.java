package com.project.Coffee;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface CoffeeRepository extends CrudRepository<Coffee, Long> {
    @Query(value = "SELECT * FROM Coffee WHERE popularity = (SELECT MAX(popularity) FROM Coffee)", nativeQuery = true)
    Set<Coffee> getMostPopularCoffees();
}

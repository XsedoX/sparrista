package com.project.coffee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface CoffeeRepository extends JpaRepository<Coffee, Long> {
    @Query(value = "SELECT * FROM coffee WHERE popularity = (SELECT MAX(popularity) FROM coffee)", nativeQuery = true)
    Set<Coffee> getMostPopularCoffees();
}

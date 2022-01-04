package com.project.Coffee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface CoffeeRepository extends JpaRepository<Coffee, Long> {
    @Query(value = "SELECT * FROM Coffee WHERE popularity = (SELECT MAX(popularity) FROM Coffee)", nativeQuery = true)
    Set<Coffee> getMostPopularCoffees();
}

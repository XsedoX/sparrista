package com.project.Coffee;

import io.swagger.models.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class CoffeeController {

    @Autowired
    private CoffeeServiceImpl coffeeService;

    @GetMapping(value = "/coffees", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Coffee> list(Model model)
    {
        return coffeeService.listCoffees();
    }

    @GetMapping(value = "/coffees/popular", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Coffee> getMostPopularCoffees()
    {
        return coffeeService.getMostPopularCoffees();
    }

    @GetMapping(value = "/coffees/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Coffee one(@PathVariable Long id)
    {
        return coffeeService.getCoffeeById(id)
                .orElseThrow(() -> new RuntimeException("Could not find coffee "+ id));
    }
}

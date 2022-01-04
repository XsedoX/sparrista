package com.project.DrankCoffee;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class DrankCoffeeController {

    @Autowired
    private DrankCoffeeServiceImpl drankCoffeeService;
}

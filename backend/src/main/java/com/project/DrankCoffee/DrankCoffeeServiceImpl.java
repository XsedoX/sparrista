package com.project.DrankCoffee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DrankCoffeeServiceImpl implements DrankCoffeeService{

    @Autowired
    private DrankCoffeeRepository drankCoffeeRepository;
}

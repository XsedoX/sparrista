package com.project.coffeeIngredient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoffeeIngredientServiceImpl implements CoffeeIngredientService{

    @Autowired
    private CoffeeIngredientRepository coffeeIngredientRepository;
}

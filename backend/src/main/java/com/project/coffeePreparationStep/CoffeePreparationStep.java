package com.project.coffeePreparationStep;


import com.project.coffee.Coffee;

import javax.persistence.*;

@Entity
public class CoffeePreparationStep {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue
    private Long id;

    private int stepNumber;
    private String description;

    @ManyToOne
    @JoinColumn(name = "coffee_id")
    private Coffee coffee;

    public CoffeePreparationStep() {
    }

    public Coffee getCoffee() {
        return coffee;
    }

    public void setCoffee(Coffee coffee) {
        this.coffee = coffee;
    }

    public int getStepNumber() {
        return stepNumber;
    }

    public void setStepNumber(int stepNumber) {
        this.stepNumber = stepNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

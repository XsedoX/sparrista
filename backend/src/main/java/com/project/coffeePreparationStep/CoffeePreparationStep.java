package com.project.coffeePreparationStep;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CoffeePreparationStep {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue
    private Long id;
    private int stepNumber;
    private String description;

    public CoffeePreparationStep() {
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

package com.project.coffee;


import com.project.coffeeIngredient.CoffeeIngredient;
import com.project.coffeePreparationStep.CoffeePreparationStep;
import com.project.drankCoffee.DrankCoffee;
import com.project.postCoffeeSurvey.PostCoffeeSurvey;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Coffee {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue
    private Long id;

    private String title;
    private String coffeeDescription;
    private String preparationDescription;
    private String photoUrl;
    @Enumerated
    private CoffeePreparationDifficulty difficulty;

    private int preparationTime;
    private int popularity=0;

    @OneToMany(mappedBy = "coffee")
    private Set<DrankCoffee> drankCoffees;

    @OneToOne
    private PostCoffeeSurvey postCoffeeSurvey;

    @OneToMany(mappedBy = "coffee")
    private Set<CoffeeIngredient> coffeeIngredients;

    @OneToMany(mappedBy = "coffee")
    private List<CoffeePreparationStep> coffeePreparationSteps;

    public Coffee() {
    }

    public Coffee(String title, String coffeeDescription, String preparationDescription, String photoUrl, CoffeePreparationDifficulty difficulty, int preparationTime) {
        this.title = title;
        this.coffeeDescription = coffeeDescription;
        this.preparationDescription = preparationDescription;
        this.photoUrl = photoUrl;
        this.difficulty = difficulty;
        this.preparationTime = preparationTime;
    }

    public PostCoffeeSurvey getPostCoffeeSurvey() {
        return postCoffeeSurvey;
    }

    public void setPostCoffeeSurvey(PostCoffeeSurvey postCoffeeSurvey) {
        this.postCoffeeSurvey = postCoffeeSurvey;
    }

    public Set<CoffeeIngredient> getCoffeeIngredients() {
        return coffeeIngredients;
    }

    public void setCoffeeIngredients(Set<CoffeeIngredient> coffeeIngredients) {
        this.coffeeIngredients = coffeeIngredients;
    }

    public List<CoffeePreparationStep> getCoffeePreparationSteps() {
        return coffeePreparationSteps;
    }

    public void setCoffeePreparationSteps(List<CoffeePreparationStep> coffeePreparationSteps) {
        this.coffeePreparationSteps = coffeePreparationSteps;
    }

    public Set<DrankCoffee> getDrankCoffees() {
        return drankCoffees;
    }

    public void setDrankCoffees(Set<DrankCoffee> drankCoffees) {
        this.drankCoffees = drankCoffees;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPopularity() {
        return popularity;
    }

    public void setPopularity(int popularity) {
        this.popularity = popularity;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCoffeeDescription() {
        return coffeeDescription;
    }

    public void setCoffeeDescription(String coffeeDescription) {
        this.coffeeDescription = coffeeDescription;
    }

    public String getPreparationDescription() {
        return preparationDescription;
    }

    public void setPreparationDescription(String preparationDescription) {
        this.preparationDescription = preparationDescription;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public CoffeePreparationDifficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(CoffeePreparationDifficulty difficulty) {
        this.difficulty = difficulty;
    }

    public int getPreparationTime() {
        return preparationTime;
    }

    public void setPreparationTime(int preparationTime) {
        this.preparationTime = preparationTime;
    }
}

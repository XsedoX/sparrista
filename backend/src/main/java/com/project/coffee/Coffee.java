package com.project.coffee;


import javax.persistence.*;

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

package com.project.employee;

import com.project.drankCoffee.DrankCoffee;
import com.project.postCoffeeSurvey.PostCoffeeSurvey;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Employee {

    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String nickName;
    private String avatarUrl;
    private Boolean isGuest=false;

    @OneToMany(mappedBy = "employee")
    private Set<DrankCoffee> drankCoffees;

//    @OneToMany(mappedBy = "employee")
//    private Set<PostCoffeeSurvey> postCoffeeSurveys;

    public Employee() {}

    public Employee(String firstName, String lastName, String nickName, String avatarUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.avatarUrl = avatarUrl;
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

    public Boolean getGuest() {
        return isGuest;
    }

    public void setGuest(Boolean guest) {
        isGuest = guest;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    @Override
    public String toString() {
        return "Employee{" + "id=" + this.id + ", firstName='" + this.firstName + '\'' + ", lastName='" + this.lastName + '\'' + ", nickName='" + this.nickName + '\'' + '}';
    }

}

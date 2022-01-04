package com.project.drankCoffee;



import com.project.coffee.Coffee;
import com.project.employee.Employee;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
public class DrankCoffee {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue
    private Long id;

    private int earnedPoints=0;
    private ZonedDateTime submittedAt;

    @ManyToOne
    @JoinColumn(name="coffee_id")
    private Coffee coffee;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;


    public DrankCoffee() {
    }



    public Coffee getCoffee() {
        return coffee;
    }

    public void setCoffee(Coffee coffee) {
        this.coffee = coffee;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public int getEarnedPoints() {
        return earnedPoints;
    }

    public void setEarnedPoints(int earnedPoints) {
        this.earnedPoints = earnedPoints;
    }

    public ZonedDateTime getSubmittedAt() {
        return submittedAt;
    }

    public void setSubmittedAt(ZonedDateTime submittedAt) {
        this.submittedAt = submittedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

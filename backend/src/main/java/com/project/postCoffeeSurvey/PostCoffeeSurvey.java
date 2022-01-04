package com.project.postCoffeeSurvey;


import com.project.coffee.Coffee;
import com.project.employee.Employee;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
public class PostCoffeeSurvey {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue
    private Long id;
    private SurveyResult surveyResult;
    private ZonedDateTime submittedAt;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @OneToOne
    private Coffee coffee;

    public PostCoffeeSurvey() {
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Coffee getCoffee() {
        return coffee;
    }

    public void setCoffee(Coffee coffee) {
        this.coffee = coffee;
    }

    public SurveyResult getSurveyResult() {
        return surveyResult;
    }

    public void setSurveyResult(SurveyResult surveyResult) {
        this.surveyResult = surveyResult;
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

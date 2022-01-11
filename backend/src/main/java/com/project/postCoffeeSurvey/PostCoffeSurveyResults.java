package com.project.postCoffeeSurvey;

import com.project.employee.Employee;

import javax.persistence.*;

public class PostCoffeSurveyResults {


    Employee employee;

    Integer grade;

    Integer numberOfSurveys;

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public Integer getNumberOfSurveys() {
        return numberOfSurveys;
    }

    public void setNumberOfSurveys(Integer numberOfSurveys) {
        this.numberOfSurveys = numberOfSurveys;
    }

    public PostCoffeSurveyResults(Employee employee, Integer grade, Integer numberOfSurveys) {
        this.employee = employee;
        this.grade = grade;
        this.numberOfSurveys = numberOfSurveys;
    }

    public PostCoffeSurveyResults() {
    }

    @Override
    public String toString() {
        return "PostCoffeSurveyResults{" +
                "employee=" + employee +
                ", grade=" + grade +
                ", numberOfSurveys=" + numberOfSurveys +
                '}';
    }
}

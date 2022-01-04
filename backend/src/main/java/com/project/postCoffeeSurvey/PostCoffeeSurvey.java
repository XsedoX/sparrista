package com.project.postCoffeeSurvey;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class PostCoffeeSurvey {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue
    private Long id;
    private SurveyResult surveyResult;
    private LocalDateTime submittedAt;

    public PostCoffeeSurvey() {
    }

    public SurveyResult getSurveyResult() {
        return surveyResult;
    }

    public void setSurveyResult(SurveyResult surveyResult) {
        this.surveyResult = surveyResult;
    }

    public LocalDateTime getSubmittedAt() {
        return submittedAt;
    }

    public void setSubmittedAt(LocalDateTime submittedAt) {
        this.submittedAt = submittedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

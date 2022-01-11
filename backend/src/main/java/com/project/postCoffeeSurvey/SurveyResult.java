package com.project.postCoffeeSurvey;

public enum SurveyResult {
    HAPPY(1),
    NEUTRAL(0),
    SAD(-1);

    private final int grade;

    SurveyResult (int grade) {
        this.grade=grade;
    }

    public int getGrade() {
        return this.grade;
    }
}

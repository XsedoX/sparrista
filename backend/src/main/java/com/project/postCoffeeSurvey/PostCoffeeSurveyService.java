package com.project.postCoffeeSurvey;


public interface PostCoffeeSurveyService {
public PostCoffeeSurvey saveSurvey(Long employee_id, PostCoffeeSurvey postCoffeeSurvey);
public Iterable<PostCoffeeSurvey> listAllSurveys();
public Iterable<PostCoffeSurveyResults> listAllPostCoffeSurveysResults();
}

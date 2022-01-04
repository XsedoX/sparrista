package com.project.postCoffeeSurvey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostCoffeeSurveyServiceImpl implements PostCoffeeSurveyService{
    @Autowired
    private PostCoffeeSurveyRepository postCoffeeSurveyRepository;
}

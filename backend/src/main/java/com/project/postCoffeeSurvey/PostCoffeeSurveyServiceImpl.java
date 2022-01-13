package com.project.postCoffeeSurvey;

import com.project.employee.Employee;
import com.project.employee.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PostCoffeeSurveyServiceImpl implements PostCoffeeSurveyService{

    @Autowired
    private PostCoffeeSurveyRepository postCoffeeSurveyRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public PostCoffeeSurvey saveSurvey(Long employee_id, PostCoffeeSurvey postCoffeeSurvey) {
        postCoffeeSurvey.setEmployee(employeeRepository.getById(employee_id));
        return postCoffeeSurveyRepository.save(postCoffeeSurvey);
    }

    @Override
    public Iterable<PostCoffeeSurvey> listAllSurveys() {
        return postCoffeeSurveyRepository.findAll();
    }

    @Override
    public Iterable<PostCoffeSurveyResults> listAllPostCoffeSurveysResults() {
        return postCoffeeSurveyRepository.findAll().stream()
                .collect(Collectors.groupingBy(PostCoffeeSurvey::getEmployee))
                .entrySet()
                .stream()
                .map(this::mapToEG)
                .collect(Collectors.toList());
    }

    private PostCoffeSurveyResults mapToEG(Map.Entry<Employee, List<PostCoffeeSurvey>> entry) {
        int surveysNumber = entry.getValue().size();
        int grade = entry.getValue().stream().map(psc -> psc.getSurveyResult().getGrade()).mapToInt(Integer::intValue)
                .sum();
        return new PostCoffeSurveyResults(entry.getKey(), grade, surveysNumber);
    }
}

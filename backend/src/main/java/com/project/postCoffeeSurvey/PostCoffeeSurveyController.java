package com.project.postCoffeeSurvey;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class PostCoffeeSurveyController {

    @Autowired
    private PostCoffeeSurveyServiceImpl postCoffeeSurveyService;

    @PostMapping(value = "/employees/{id}/post-coffee-survey")
    public ResponseEntity<PostCoffeeSurvey> create(@PathVariable Long user_id, @RequestBody PostCoffeeSurvey postCoffeeSurvey) {
        return ResponseEntity.ok().body(postCoffeeSurvey);
    }

    @GetMapping(value = "/post-coffee-surveys", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<PostCoffeSurveyResults> list(Model model) throws JsonProcessingException {
        return postCoffeeSurveyService.listAllPostCoffeSurveysResults();
    }
}

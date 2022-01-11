package com.project.postCoffeeSurvey;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    public ObjectMapper jsonMapper = new ObjectMapper();

    public ObjectMapper getJsonMapper() {
        return jsonMapper;
    }
}

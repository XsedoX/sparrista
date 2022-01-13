package com.project.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl employeeService;

    @GetMapping(value = "/employees", produces = MediaType.APPLICATION_JSON_VALUE)
    Iterable<Employee> all() {
        return employeeService.listAllEmployees();
    }

    @GetMapping(value = "/employees/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    Employee one(@PathVariable Long id) {

        return employeeService.GetEmployeeById(id)
                .orElseThrow(() -> new RuntimeException("Could not find employee "+ id));
    }
}

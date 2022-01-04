package com.project.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl employeeService;

    @GetMapping("/employees")
    Iterable<Employee> all() {
        return employeeService.listAllEmployees();
    }

    @GetMapping("/employees/{id}")
    Employee one(@PathVariable Long id) {

        return employeeService.GetCoffeeById(id)
                .orElseThrow(() -> new RuntimeException("Could not find employee "+ id));
    }
}

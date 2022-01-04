package com.project.employee;

import java.util.Optional;

public interface EmployeeService {

    Optional<Employee> GetCoffeeById(Long id);
    Iterable<Employee> listAllEmployees();
}

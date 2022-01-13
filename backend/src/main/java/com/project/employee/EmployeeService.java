package com.project.employee;

import java.util.Optional;

public interface EmployeeService {

    Optional<Employee> GetEmployeeById(Long id);
    Iterable<Employee> listAllEmployees();
}

package com.project.employee;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Optional<Employee> GetEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public Iterable<Employee> listAllEmployees() {
        return employeeRepository.findAll();
    }
}

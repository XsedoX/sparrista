package com.project;

import com.project.employee.Employee;
import com.project.employee.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private EmployeeRepository employeeRepository;

    @Autowired
    public DataLoader(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public void run(ApplicationArguments args) {
        employeeRepository.save(new Employee("Lela", "Burton", "BeardDemon", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Ruben", "Edwards", "KookSpook", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Madeline", "Coleman", "Pharos", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Tracy", "Oliver", "Daybreak", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Wilson", "Berry", "FlowerPower", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Blake", "Warner", "Palanquin", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Belinda", "Howell", "HaelSturm", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Valerie", "Wade", "Octopi", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Simon", "White", "RustySilver", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Garry", "Sandoval", "Seashanty", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Darlene", "Lee", "Warlockk", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Kelly", "Weaver", "SandySun", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Pamela", "Abbott", "Indium", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Alonzo", "Nichols", "RichterScales", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Cory", "Wilson", "Opally", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Vickie", "Harrison", "GrownMan", "https://picsum.photos/200/300"));
        employeeRepository.save(new Employee("Mabel", "Castro", "BatBoy", "https://picsum.photos/200/300"));
    }
}
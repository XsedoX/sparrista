package com.project;

import com.project.coffee.Coffee;
import com.project.coffee.CoffeePreparationDifficulty;
import com.project.coffee.CoffeeServiceImpl;
import com.project.employee.Employee;
import com.project.employee.EmployeeRepository;
import com.project.postCoffeeSurvey.PostCoffeeSurvey;
import com.project.postCoffeeSurvey.PostCoffeeSurveyRepository;
import com.project.postCoffeeSurvey.SurveyResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private final EmployeeRepository employeeRepository;

    @Autowired
    private CoffeeServiceImpl coffeeService;

    @Autowired
    private PostCoffeeSurveyRepository postCoffeeSurveyRepository;

    @Autowired
    public DataLoader(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public void run(ApplicationArguments args) {
        Employee e1 = new Employee("Lela", "Burton", "BeardDemon", "https://picsum.photos/200/300");
        Employee e2 = new Employee("Ruben", "Edwards", "KookSpook", "https://picsum.photos/200/300");
        employeeRepository.save(e1);
        employeeRepository.save(e2);
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


        Coffee coffee = new Coffee("nowa", "cos tam", "dawda", "dawda", CoffeePreparationDifficulty.EASY, 3);
        coffee.setPopularity(5);
        coffeeService.save(coffee);
        coffee = new Coffee("dawawaw", "cos tam", "dawda", "dawda", CoffeePreparationDifficulty.EASY, 3);
        coffee.setPopularity(1);
        coffeeService.save(coffee);

        PostCoffeeSurvey s1 = new PostCoffeeSurvey();
        s1.setEmployee(e1);
        s1.setSurveyResult(SurveyResult.HAPPY);
        PostCoffeeSurvey s2 = new PostCoffeeSurvey();
        s2.setEmployee(e1);
        s2.setSurveyResult(SurveyResult.HAPPY);
        PostCoffeeSurvey s3 = new PostCoffeeSurvey();
        s3.setEmployee(e2);
        s3.setSurveyResult(SurveyResult.NEUTRAL);
        PostCoffeeSurvey s4 = new PostCoffeeSurvey();
        s4.setEmployee(e2);
        s4.setSurveyResult(SurveyResult.SAD);

        postCoffeeSurveyRepository.save(s1);
        postCoffeeSurveyRepository.save(s2);
        postCoffeeSurveyRepository.save(s3);
        postCoffeeSurveyRepository.save(s4);


    }
}
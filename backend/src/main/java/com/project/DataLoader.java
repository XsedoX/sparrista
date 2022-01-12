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

import java.time.LocalDateTime;
import java.time.ZonedDateTime;

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


        Coffee coffee = new Coffee("Americano", "Prawdopodobnie kawa taka powstała we Włoszech w czasie II wojny światowej, kiedy to żołnierze z USA żądali dolewania wody do espresso, tak aby otrzymać kawę podobną do tej, jaką pili w domach", "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx", "dawda", CoffeePreparationDifficulty.EASY, 3);
        coffee.setPopularity(5);
        coffeeService.save(coffee);

        coffee = new Coffee("Espresso", "Powstaje przez przez przepuszczenie 25-35 ml gorącej (90,5-96 °C) wody pod ciśnieniem 8,5-9,5 bara przez bardzo drobno zmielone i ubite ziarna kawowca", "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx", "dawda", CoffeePreparationDifficulty.EASY, 1);
        coffee.setPopularity(4);
        coffeeService.save(coffee);

        coffee = new Coffee("Flat White", "W odróżnieniu od caffe latte jest zazwyczaj podawane w kubku lub dużej filiżance i ma na wierzchu mniej piany z mleka (która na caffè latte tworzy wyraźną osobną warstwę)", "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx", "dawda", CoffeePreparationDifficulty.EASY, 5);
        coffee.setPopularity(3);
        coffeeService.save(coffee);

        coffee = new Coffee("Cappuccino", "Włoski napój kawowy z dodatkiem spienionego mleka (rzadziej z bitą śmietaną) i szczyptą sypkiej czekolady lub kakao dla ozdoby", "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx", "dawda", CoffeePreparationDifficulty.EASY, 4);
        coffee.setPopularity(2);
        coffeeService.save(coffee);

        coffee = new Coffee("Caffe Latte", "Wbrew nazwie, latte art (sztuka wykonywania rysunków i wzorów na powierzchni kawy), na tradycyjnej latte nie wykonuje się ozdób na piance", "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx", "dawda", CoffeePreparationDifficulty.EASY, 4);
        coffee.setPopularity(1);
        coffeeService.save(coffee);

        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e1 , coffee));
        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.NEUTRAL, ZonedDateTime.now() ,e2 , coffee));
        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.HAPPY, ZonedDateTime.now() ,e1 , coffee));
        postCoffeeSurveyRepository.save(new PostCoffeeSurvey(SurveyResult.SAD, ZonedDateTime.now() ,e2 , coffee));
    }
}
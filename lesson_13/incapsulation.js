// Інкапсуляція - приховування даних доступа поза класом або при наслідуванні
 

// # - значок приховати дані 
class Developer {
    #salary

    constructor(name, programmingLanguage) {
        this.name = name;
        this.programmingLanguage = programmingLanguage;
        this.#salary = 5000;
    }
    // get - отримання значення приватного поля
    get devSalary() {
        return this.#salary;
    }
//  set - змінення  значення приватного поля
    set setSalary(salary) {
        this.#salary = salary; 
    }

    startCoding() {
        console.log(this.#salary);
        this.#printProgrammingLanguage();
        console.log(` ${this.name} починає писати код`);
    }

    #printProgrammingLanguage() {
        console.log(`Мова програмування: ${this.programmingLanguage}`);
    }
}

class JuniorDeveloper extends Developer {
    constructor(name, programmingLanguage) {
        super(name, programmingLanguage);
     }
}

const juniorDeveloper = new JuniorDeveloper('Oleg', 'JavaScript');
// juniorDeveloper.printProgrammingLanguage();
    
const developer = new Developer('Halyna', 'JavaScript');
console.log(developer.devSalary);
developer.setSalary = 7000;
console.log(developer.devSalary);
//   Публічне (можуть побачити всі)
// console.log('developer', developer); 
// console.log(developer.name);
// console.log(developer.programmingLanguage);
// developer.startCoding();
// developer.printProgrammingLanguage();
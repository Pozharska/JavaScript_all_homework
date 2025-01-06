// Ex 1
const developerName = 'Halyna';
const programmingLanguage = 'JavaScript';

const programmingLanguages = {
    javaScript: 'JavaScript',
    nodeJS: 'NodeJS',
};

if (programmingLanguage === programmingLanguages.javaScript) {
    console.log(`${developerName} є Front-End розробником`);
} else if (programmingLanguage === programmingLanguages.nodeJS) {
    console.log(`${developerName} є Back-End розробником `);
} else {
    console.log(`Мова програмування у розробникa ${developerName} не визначена`);
};

// Ex 2
let health = prompt('Введите число параметра "здоровье" для персонажа');
console.log('health', typeof health);
health = Number(health);

if (health <= 0 || !health) {
    alert('Параметр "здоровье" должен быть больше нуля!');
} else {
    console.log('health', health);
    alert(`Параметр "здоровье" равен ${health}`);
}

// Ex 3
let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
console.log('temperatureInCelsius', typeof temperatureInCelsius);
temperatureInCelsius = Number(temperatureInCelsius);

if (temperatureInCelsius === 0) {
alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    console.log('temperatureInCelsius', temperatureInCelsius);
    alert(`Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже`);
}

let temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32; {
    alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по
Фаренгейту.`);
}
 
// Ex 4
const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
    totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
// const developerNames = ['Halyna', 'Halysha', 'Oleg', 'Olezhka', 'Halchonok'];

// for (початкове значення; умова; крок)
 
// console.log(developerNames[4]);

for (let i = 0; i < developerNames.length; i += 1) {
    console.log('i', i);
    console.log('item', developerNames[i]);
} 

// for of

for (const name of developerNames) {
    console.log('name', name);
}

// forEach

developerNames.forEach((name, index, array) => {
    // console.log('name', name);
    // console.log('index', index);
    console.log('array', array);
});

//  map 

const salariesOfDevelopers = [400, 500, 1000, 2500, 300];
const updetedSalaries = salariesOfDevelopers.map((salary, index, array) => {
    return salary ** 2 
 })
console.log('updetedSalaries', updetedSalaries);

// filter

const filtredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
    return index % 2 === 0;
});
console.log('filtredSalaries', filtredSalaries);
 
// find
 
const searchSalary = salariesOfDevelopers.find((salary) => {
    return salary > 400;
});
console.log('searchSalary', searchSalary);

// findIndex

const searchIndex = salariesOfDevelopers.findIndex((salary) => {
    return salary === 300; 
});
console.log('searchIndex', searchIndex);

// some - повертає true, коли хоча б один елемент в масиві  задовільняє умові або false; 

const elementExist = salariesOfDevelopers.some((salary) => {
    return salary > 3000; 
});
console.log('elementExist', elementExist);

//  every повертає true, коли всі елементи в масиві задовільняють умові або false; 

const allElementExist = salariesOfDevelopers.every((salary) => {
    return salary > 0; 
});
console.log('allElementExist', allElementExist);

// reduce (acc - акумулятор)

const sum = salariesOfDevelopers.reduce((acc, salary, index, array) => { 
    console.log('acc/salary', acc, salary);
    return acc + salary;
}, 0); 
console.log('sum', sum);

// sort - сортує масими по зростанню чи спаданню чисел, return  по зростанню a - b та по спаданню b - a

salariesOfDevelopers.sort((a, b) => {
    return a - b;
}); 
console.log('salariesOfDevelopers', salariesOfDevelopers);

const developerNames = ['Halyna', 'Halysha', 'Oleg', 'Olezhka', 'Halchonok'];
developerNames.sort((a, b) => {
    if (a < b) {
        return 1;
    } if (a > b) {
        return -1;
    }

    return 0;
});
console.log('developerNames', developerNames);
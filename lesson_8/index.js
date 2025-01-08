// Function declaration

feedAnimal('Dog');

function feedAnimal(animalName = 'Monkey ') {
    console.log(`Тварина ${animalName} була покормлена `);
}

// Function expession

const feedAnimal = function (animalName = 'Monkey ') {
    console.log(`Тварина ${animalName} була покормлена `);
}
feedAnimal();

// Стрілочна функція

() => {}

const feedAnimal = (animalName = 'Monkey') => {
    console.log(`Тварина ${animalName} була покормлена `);
}
feedAnimal('Cat');


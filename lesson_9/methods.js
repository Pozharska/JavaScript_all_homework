// splice - видалити елементи з масиву та вставити на їх місце інші елементи .splice(index початок та чим закінчується видалення 2 індекси)

const cars = ['Audi', 'Kia', 'Mustang'];

const removedElements = cars.splice(0, 2, 'Golf', 'Ford');
console.log('removedElements', removedElements);

console.log('cars', cars);

// slice

const agesOfDevelopers = [29, 45, 57, 33];
// console.log(agesOfDevelopers.slice(0, 2));

const slicedAgesOfDevelopers = agesOfDevelopers.slice(0, 2);
console.log('slicedAgesOfDevelopers', slicedAgesOfDevelopers);
console.log('agesOfDevelopers', agesOfDevelopers);

// indexOf

const favoriteFood = ['Sushi', 'Fri', 'Eclair'];
const indexOfFood = favoriteFood.indexOf('Fri');
console.log('indexOfFood', indexOfFood);

// includes - true or false

const technologies = ['JavaScript', 'HTML', 'CSS'];
const isTechnologiesExist = technologies.includes('HTML');
console.log('isTechnologiesExist', isTechnologiesExist);

// split- метод рядків, який розділяє рядки та перетворює їх на масив; + join - перетворює масив у рядок.

const listOfOrders = 'Спідниця, Кросівки, Джинси, Сумка';
const listOfOrdersArray = listOfOrders.split(', ');
console.log('listOfOrdersArray ', listOfOrdersArray);

const orderString = listOfOrdersArray.join('; ');
console.log('orderString', orderString);

// reverse - перевертає масив задом навпаки
technologies.reverse();
console.log('technologies', technologies);

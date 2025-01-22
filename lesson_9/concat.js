const currentDeveloper = ['Halyna', 'Oleg'];
const newDevelopers = ['Galina', 'Olezhka'];

// ['Halyna', 'Oleg', 'Galina', 'Olezhka'];

// concat

// 1 method
// const allDevelopers = currentDeveloper.concat(newDevelopers);
// console.log('allDevelopers', allDevelopers);

// 2 method
//  ... ("Spread-оператор" назва методу)
 
const allDevelopers = [
    ...currentDeveloper,
    ...newDevelopers,
]
console.log('allDevelopers', allDevelopers);

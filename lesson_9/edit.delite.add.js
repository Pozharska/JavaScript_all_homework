const salariesOfDevelopers = [400, 500, 1000, 2500, 300];

//  Add elements
// push - додає елементи в кінець масиву
// unshift - додає елементи на початку масиву
const newSeniorDeveloperSalary = [5000];
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5003, 5005); 
salariesOfDevelopers.unshift(100, 118, 200, 460 );

// Delete elements
// shift - видаляє елементи з початку масиву
// pop - видаляє елементи з кінця масиву
const firstRemovedElement = salariesOfDevelopers.shift();
salariesOfDevelopers.shift()

const lastRemovedElement = salariesOfDevelopers.pop();

console.log('lastRemovedElement', lastRemovedElement); 
console.log('firstRemovedElement', firstRemovedElement); 
console.log('salariesOfDevelopers', salariesOfDevelopers);

// Зміна елементів масиву

salariesOfDevelopers[6] = 489;
console.log('salariesOfDevelopers', salariesOfDevelopers);
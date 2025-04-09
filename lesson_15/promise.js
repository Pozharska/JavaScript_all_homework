
// setTimeout (() => { 
//     console.log('setTimeout');
// }, 4000); 

// console.log(developer);

// setInterval(() => {
//     console.log('setInterval');
// }, 1000);

// pending - в очікуванні
// fulfilled - виконаний
// rejected - коли викликаємо reject і наш 'promise' видає помилку

const developer = {
    name: 'Halyna',
    isJSDev: true,
};

const promise = new Promise((resolve, reject) => {
    if (developer.isJSDev) {
        setTimeout(() => {
            resolve(` ${developer.name} - є JavaScript розробником`);
        }, 3000);
    } else {
        reject(`${developer.name} - НЕ є JavaScript розробником`);
    }
});

console.log(promise);

//   then, catch, finally

promise
    .then((successMessage) => {
        console.log('successMessage', successMessage);
    })
    .catch((error) => {
        console.log('error', error);
    })
    .finally(() => {
        console.log('finally');
    }) 
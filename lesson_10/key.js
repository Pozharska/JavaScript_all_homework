//  string / Symbol - ключ може бути 2 типами данних


// const user = {
//     name: 'Halyna',
//     10: '1234',
//     undefined: undefined,
//     [false]: false,
// }; - показує, як  тип данних - рядок

// console.log(Object.keys(user)); 

const id = Symbol('id');
// const id2 = Symbol('id2');

const user = {
    [id]: 5,
    name: 'Halyna',
};
console.log('user', user);

console.log(user[id]);

// in

console.log('name' in user);
console.log('programmingLanguage' in user);
// console.log(id2 in user);
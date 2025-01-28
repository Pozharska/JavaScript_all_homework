
// const users = [
//     {
//     username: 'Halyna',
//     status: 'online',
//     lastActivity: 10,
//     }, {
//     username: 'Oleg',
//     status: 'offline',
//     lastActivity: 45,
//     }, {
//     username: 'Julia',
//     status: 'online',
//     lastActivity: 67,
//     }
// ];

// const userOnline = users.filter((person) => person.status === 'online');
// const usersOnlineNames = userOnline.map((person) => person.username).join(', ');
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


// arr.map(item => item.title).join(', ');

// const ordersArr = [4, 2, 1, 3];
// const people = [
//     { id: 1, name: 'Galyna' },
//     { id: 2, name: 'Halyna' },
//     { id: 3, name: 'Oleg' },
//     { id: 4, name: 'Olezha' },
// ];
// const giveTalonsInOrder = (patients, orders) => {
//     const objectWithIndexes = patients.reduce((acc, curPerson) => {
//         acc[curPerson.id] = curPerson;
//         return acc;
//     }, {});
//     return orders.map((order) => objectWithIndexes[order]);
// }

// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);

// const handleObject = (obj, key, action = 'get') => {
//     switch (action) {
//         case 'get':
//             return obj[key];
//         case 'delete': {
//             delete obj[key];
//             return obj;
//         }
//         case 'add':
//             obj[key] = '';
//             return obj;
//         default:
//             return obj;
//     }
// }

// const student = {
//     name: 'Halyna',
//     programmingLanguage: 'JavaScript',
// }

// const result = handleObject(student, 'programmingLanguage', 'delete');
// console.log('result', result);


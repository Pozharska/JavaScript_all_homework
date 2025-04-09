//  Central problem with then, catch, finally
// Asinc Await - робить так, щоб функція повертала  Promise

// const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'; 

// fetch(USERS_URL)
//     .then((response) => response.json())
//     .then((users) => {
//         console.log('users', users);
//         const firstUsersId = users[0]?.id;
//         console.log('firstUsersId', firstUsersId);
//         fetch(`${TODOS_URL}?userId=${firstUsersId}`)
//             .then((response) => response.json())
//             .then((todos) => {
//                 console.log('todos', todos);
//             })
//             .catch((error) => {
//                 console.log('error', error);
//             })
//     })
//     .catch((error) => {
//         console.log('error', error);
//     })

const USERS_URL = 'https://jsonplaceholder.typicode.com/usrs';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'; 

//  try, catch, finally

// try {
    
// } catch (error) {
//     console.log('error', error);
// } finally {
//     console.log('finally' );
// }


const getTodosWithUserData = async () => {
    try {
        const response = await fetch(USERS_URL);
        if (!response.ok) {
            throw new Error('Помилка в отриманні даних про користувачів');
        }
        console.log('response', response);
        const users = await response.json();
        console.log('users', users);
        const firstUsersId = users[0]?.id;
        const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUsersId}`);
        if (!todosResponse.ok) {
            throw new Error('Помилка в отриманні даних задач');
        }
        const todos = await todosResponse.json();
        console.log('todos', todos);
    } catch (error) {
        console.log('error', error);
    } finally {
        console.log('finally');
    }
};
 
const promise = getTodosWithUserData();
console.log('promise', promise);
// Callback - функція, яка передається як параметр всередині іншої функції

const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';

const getTodo = (Callback) => { 
    fetch(FIRST_TODO_URL)
        .then((response) => response.json())
        .then((todo) => {
            Callback(todo);
        })
        .catch((error) => {
            console.log('error', error);
    })
};

getTodo((todoItem) => {
    console.log('todoItem', todoItem);  
});
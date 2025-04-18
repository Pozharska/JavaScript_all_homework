Promise.all([
    new Promise(),
    new Promise(), // fulfilled
    new Promise(), //rejected
    new Promise(),
]);
// fulfilled
// rejected

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const todosIds = [35, 14, 79, 102, 43];
const dataContainer = document.querySelector('#data-container');
const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);

    return todoElement;
}

const getTodosByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults);
        })
       .then((todos) => { 
           console.log('todos', todos);
           todos.forEach((todo) => { 
               const todoHTML = createTodoElement(todo.title);
               dataContainer.append(todoHTML);  
           });
       })
        .catch((error) => {
            console.log('error', error); 
    })
};

getTodosByIds(todosIds);
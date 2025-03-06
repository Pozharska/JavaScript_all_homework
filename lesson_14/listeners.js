//  addEventsListener

// const firstNavButton = document.querySelector('.');
// firstNavButton.addEventsListener('click', (event) => { 
//     console.log(event.target);
//     // const target = event.target; - 1 варіант
//     // const { target } = event; - 2 варіант (більш сучасний)
//     target.classList.add('new name class');
// });

// const allNavButtons = document.querySelectorAll('.name button');
// allNavButtons.forEach((button) => {
//     button.addEventsListener('click', (event) => {
//     allNavButtons.forEach((button) => {
//     button.classList.remove('new class name');
//     });
//     const { target } = event; 
//     target.classList.add('new class name'); 
//     });
// });
  
// submit - зазвичай у тезі "form"

// const createTaskForm = document.querySelector('.create-task-block');
// createTaskForm.addEventListener('submit', (event) => {
//     console.log(event);
//     // event.preventDefault() - відмінити перезавантаження сторінки та відправки данних в URL
//     const { target } = event;
//     const taskNameInput = target.taskName;
//     const inputValue = taskNameInput.value;
//     console.log('inputValue', inputValue); 
//     if (inputValue) {
//         alert(`Ви створили завдання ${inputValue}`);
//     } else {
//         alert(`Веддіть вірні данні`);
//     }
//     console.log('taskNameInput', taskNameInput);
// });



// keydown, keyup

// document.addEventListener('keydown', (event) => {
//     console.log(event);
//     const { key } = event;
    // console.log('keydown', key);
//     const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`);
//     if (taskItemToDelete) {
//         const deleteConfired = confirm('Ви дійсно хочете видалити дане завдання?');
//         if (deleteConfired) {
//             taskItemToDelete.remove();
//         }
//     }
// });

// document.addEventListener('keyup', (event) => {
//     const { key } = event;
//     console.log('keyup', key);
//     const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`);
//     if (taskItemToDelete) {
//         taskItemToDelete.remove();
//     }
// });


// mouseover

// const createTooltip = (text) => {
//     const tooltip = document.createElement('span');
//     tooltip.textContent = text;
//     tooltip.className = 'tooltip';

//     return tooltip;
// }

// document.addEventListener('mouseover', (event) => {
//     // console.log(event); 
//     const { target } = event;
//     console.log(target);
//     const isOverDeleteButton = target.className.includes('name button');
//     if (isOverDeleteButton) {
//         console.log('success');
//         const taskItemHTML = target.closest('.class name');
//         const taskId = taskItemHTML?.dataset.taskid;
//         if (taskId) {
//             const tooltipHTML = createTooltip(`Видалити завдання під номером ${taskId}?`);
//             target.append(tooltipHTML);
//         }
//     }
// });


// mouseout

// document.addEventListener('mouseout', (event) => {
//     const { target } = event;
//     const isOutFromDeleteButton = target.className.includes('name button');
//     if (isOutFromDeleteButton) {
//         const tooltip = document.querySelector('.tooltip');
//         if (tooltip) {
//             tooltip.remove();
//         }
//     }
// });


// mousemove

// document.addEventListener('mousemove', (event) => {
//     console.log(event);
// });

// contextmenu

// document.addEventListener('contextmenu', (event) => { 
//     console.log(event);
//     // event.preventDefault() - контекстне меню не відкривається по замовчуванню 
// });

// change - спрацьовує тоді, коли ми прибираємо фокус з нашого input, 
// input - спрацьовує тоді, коли ми вводимо будь який символ у нас input

const checkTaskNameInputOnValadation = (value) => {
    if (!value || value.includes('@')) {
        return false; 
    }
    
    return true;
}

const createTaskBlock = document.querySelector('.create-task-block');
const taskNameInput = document.querySelector('.create-task-block__input');
taskNameInput.addEventListener('change', (event) => { 
    const { target } = event;
    const { value } = target;
    const isValid = checkTaskNameInputOnValadation(value);
    const messageBlockFronDOM = document.querySelector('.error-message-block');

    if (!isValid) {
        const newMessageBlock = document.createElement('span');
        newMessageBlock.classname = '.error-message-block';
        newMessageBlock.textContent = 'Помилка! Текст для задачі не може бути порожнім чи тримати в собі "@"!';
        createTaskBlock.append(newMessageBlock);
    } else if (isValid && messageBlockFronDOM) {
        messageBlockFronDOM.remove();
    }
}); 
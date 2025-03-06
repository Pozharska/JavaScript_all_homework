// createElement

const newNavButton = document.createElement('a');
newNavButton.className = '';
newNavButton.href = '';
newNavButton.dataset.buttonId = '4';
newNavButton.textContent = 'прострочені завдання';
console.log(newNavButton);
  

// append - додати клас на початок, prepend - додати клас в кінець
// insertAdjacentElement

const mainNavigation = document.querySelector('class name');
// mainNavigation.prepend(newNavButton);

mainNavigation.insertAdjacentElement('afterbegin', newNavButton);

// remove - видалити метод з DOM

mainNavigation.remove();
 
// closest - знаходить найближчого родителя  або елемент перед крапкою

const taskItemText = document.querySelector('.task item text');
console.log('taskItemText', taskItemText);

const taskItem = askItemText.closest('.task-item');
console.log('taskItem', taskItem);

//  classList: add - додає новий клас до вже існуючого, remove - видаляє клас, 
// toggle - якщо клас, який був переданий існує - він його видаляє. А якщо не існує, тоді він його додає.

const firstNavigationButton = document.querySelector('.main-navigation__button-item');
firstNavigationButton.classList.add('');
firstNavigationButton.classList.remove('');
firstNavigationButton.classList.toggle('');

const createTaskInput = document.querySelector('.');
console.log(createTaskInput.hasAttribute('type'));
onsole.log(createTaskInput.getAttribute('value'));
createTaskInput.removeAttribute('plaseholder'); 
createTaskInput.setAttribute('plaseholder', 'Створити нове завдання'); 
 
 

 


 

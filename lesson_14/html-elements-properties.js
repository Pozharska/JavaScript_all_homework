const tasksWrapper = document.querySelector('.class');
console.log(tasksWrapper.className); 

tasksWrapper.className = 'class name1';
console.log(tasksWrapper.className);  

const taskBlock = document.querySelector('#id');
console.log(taskBlock.id);

taskBlock.id = 'taskBlocknew';

const submitButton = document.querySelector('.class name');
console.log(submitButton.innerText);
console.log(submitButton.textContent);

submitButton.textContent = '<b>new text</b>>';

// innerHTML

console.log(taskBlock.innerHTML);

// taskBlock.innerHTML = '<b>taskBlock<b>'

//  children

const createTaskForm = document.querySelector('.class name');
console.log(createTaskForm.children);


// data-атрибути

const firstNavButton = document.querySelector('.class name');
console.log(firstNavButton.dataset.buttonId);
// firstNavButton.dataset.buttonMainId

// firstNavButton.dataset.buttonId = '34';

// style

console.log(firstNavButton.style);
firstNavButton.style.fontWeight = 'bold';
firstNavButton.style.boxShadow - 'inset 0 0 0 3px #fff';







 
 
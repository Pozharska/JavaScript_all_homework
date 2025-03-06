// DOM - об'єктна модель документа (Document Object Model).
// міжплатформний, незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей та методів, 
// які дозволяють шукати, створювати та видаляти елементи, реагувати на дії користувача та інше.

// Вузли HTML-дерева мають ієрархічне відношення один до одного. Терміни ancestor (предок), descendant (нащадок), 
// parent (батько), child (дитина) і sibling (сусід) використовуються для опису відносин.

// У дереві вузлів верхній вузол називається кореневим (root node). Кожен вузол, окрім root node, має лише одного з батьків.
// У вузла може бути скільки завгодно дітей.
// Сусіди - це вузли із спільним батьком.
// Дочірні елементи (діти) – елементи, які лежать безпосередньо всередині цього.
// Нащадки – всі елементи, які лежать усередині цього, разом із їхніми дітьми, дітьми їхніх дітей тощо. Тобто все піддерево.

const taskcBlock = document.getElementById('');
console.log('taskcBlock', taskcBlock);
const allNavButtons = document.getElementsByClassName('');
console.log('allNavButtons', allNavButtons);
const allButtons = document.getElementsByTagName('');
console.log('allButtons', allButtons);

// querySelector - document.querySelector() - повертає перший елемент в документі який співпадає з вказаним CSS селектором.
// document.querySelectorAll() - повертає список всіх елементів в документі, які відповідають зазначеним CSS селекторам.
// Пошук: getElement*, querySelector*

// Під час побудови DOM-дерева багато стандартних HTML-атрибутів стають властивостями вузлів. Подивимося на кілька властивостей,
//  що часто використовуються.
// hidden – контролює видимість елемента.
// value - містить поточний текстовий контент елементів input, select, textarea. checked - зберігає стан чекбоксу чи радіокнопки.
// name - зберігає значення, вказане в HTML-атрибуті name.
// src – шлях до зображення тега <img>.


// Створення елементу
// Є два способи створення DOM вузлів:
// document.createElement(tag)
// Створює новий елемент з заданим тегом:
// let div = document.createElement('div'); document.createTextNode(text)
// Створює новий текстовий вузол з заданим текстом:
// let textNode = document.createTextNode('От і я');
// У більшості випадків нам потрібно створювати саме елементи, такі як div для повідомлень.

// Нижче наведено більше методів для вставки, вони вказують куди саме буде вставлено вміст:
// node.append(...вузли або рядки) – додає вузли або рядки в кінець node,
//     node.prepend(...вузли або рядки) – вставляє вузли вбо рядки на початку node,
//     node.before(...вузли або рядки) – вставляє вузли або рядки попереду node,
//     node.after(...вузли або рядки) – вставляє вузли або рядки після node,
//     node.replaceWith(...вузли або рядки) – замінює node заданими вузлами або рядками.


const taskcBlock2 = document.querySelector('#id');
console.log('taskcBlock2', taskcBlock2);
const mainNavigation = document.querySelector('.nameOfClass');
console.log('mainNavigation', mainNavigation);
// const firstButton = document.querySelector('');
// console.log('firstButton', firstButton);

// const thirdNavagationButton = document.querySelector('[]');
// console.log('thirdNavagationButton', thirdNavagationButton);

// querySelectorAll

const allNavigationButtons = document.querySelectorAll('.class');
console.log('allNavigationButtons', allNavigationButtons);
allNavigationButtons.forEach((button, index) => {
    console.log(index, button)
}); 

const createTasksBlock = document.querySelector('.class');
console.log('createTasksBlock', createTasksBlock);

// const submitButton = createTasksBlock.querySelector('[type = submit}');
// console.log('submitButton', submitButton);





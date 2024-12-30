// toUpperCase,  toLowerCase;
 
const animal = 'Rabbit';
console.log('upper', animal.toUpperCase());
console.log('lower', animal.toLowerCase());

console.log('animal', animal);

//  Як знайти символи в рядку - IndexOf, includes;
const text = 'My fovorite programming language JavaScript';
console.log('indexOf', text.indexOf('JavaScript'));
console.log('includes', text.includes('JavaScript'));

// Обрізки рядків - slice - потрібно додати 2 числа Перше - це індекс, з якого мі починаємо обрізку, друге - кінцевий індекс, де будемо завершувати обрізку, substring;
// const programmingLanguage = 'JavaScript';
// console.log('slice', programmingLanguage.slice(1, 5));
// console.log('substring', programmingLanguage.substring(1, 5));

// Заміна символів в рядку - replace, replaceall; 
const programmingLanguage = 'JavaScript';
console.log('replace', programmingLanguage.replace('a', 'A '));
console.log('replaceAll', programmingLanguage.replaceAll('a', 'A'));

// repeat
const helloText = 'hello';
console.log(helloText.repeat(3));

// trim
const nameOfUser = prompt('What is your name?');
console.log('upper', nameOfUser.trim()); 


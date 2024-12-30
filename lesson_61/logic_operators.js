// && (оперсанд назва) (перекладається як логічна 'і')
//  || (або)
// ! (НЕ)
// ??

const userAge = 16;
if (userAge > 5 && userAge <= 18) {
    console.log('Користувач ходить до школи');
}

const programmingLanguage = 'JavaScript';
const expirienceInYears = 2;

if (programmingLanguage === 'JavaScript' && expirienceInYears > 1) {
    console.log('Вітаємо в нашій команді!');
}

//  || 

const currentHours = 6;
if (currentHours < 8 || currentHours > 20) {
    console.log('Наш офіс закритий! Приходьте завтра!');
} else {
    console.log('Вітаємо в нашому офісі!');
}
 
const userNickname = 'Halyna' ;
const defaultNickname = ' ';
const nickname = userNickname || defaultNickname || 'noname';

const finalNickname = userNickname && "Користувач існує";
console.log('nickname', nickname);
console.log('finalNickname', finalNickname);
  
// (НЕ)

// const hasAccess = false;
// console.log('!hasAccess', !hasAccess);
// if (!hasAccess) {
//     console.log('Доступ заборонено');
// } else {
//     console.log('Доступ  надано');
// }
 
// const answer = prompt('Скільки вам років?');
// if (!answer) {
//     alert('Введіть скільки вам повних літ');
// } else {
//     alert(`Вам ${answer} років`);
// }

// Оператор об'єднання з null ( виглядає як '??') схоже на ||
// false, 0, '', NaN, undefined,null
console.log('' || 'Hello World');
//  null, undefined
console.log(' ' ?? 'Hello World');




// if перевірка значення на умову
// else if
// switch case
// ? :


const isFrontEndDeveloper = true ;

if (isFrontEndDeveloper) {
    console.log('Ви Front-End розробник. Вітаємо в команді!')
} else {
    console.log('Ви НЕ Front-End розробник.');
}

const closingTime = 9;
const currentTime = 6;

if (currentTime > closingTime) {
    console.log('Магазин закрито!');
} else {
    console.log('Магазин відчинено! Звертайтесь за покупками!');
}

const developerJobType = 'Back-End';

if (developerJobType === 'Front-End') {
    console.log('2000$');
} else if (developerJobType === 'Back-End') {
    console.log('1500$');
} else if (developerJobType === 'Full-Stack') {
    console.log('3500$');
} else {
    console.log('Зарплата не визначена');
}

// switch case

switch (developerJobType) {
    case 'Front-End':
        console.log('2000$');
        break;
    case 'Back-End':
        console.log('1500$');
        break;
    case 'Full-Stack':
        console.log('3500$');
        break;
        default:
 console.log('Зарплата не визначена');
}

// ? - if 
// : - else // заміна if else

const favoriteDrink = 'Vine';

const message1 = favoriteDrink === 'Vine'
    ? 'Your favorite drink - vine'
    : 'Do you prefer - procecco';
console.log('message1', message1);

     
 

// function declaration

// getName1();

// function getName1(name = 'Nastya') {
//     console.log(`Hello, my name is ${name}, I'm glad to see you!`);
// }
   
//  function expression

// const getName2 = function(name) {
//     console.log(`Hello, my name is ${name}, I'm glad to see you!`);
// }
// getName2('Halyna');
 
//  стрелочная функция

// const getName3 = (name = 'Halyna') => {
//     console.log(`Hello, my name is ${name}, I'm glad to see you!`);
// }
// getName3()


// function getName1(name) {
//     return (`Імʼя дорівнює ${name}`);
// }
// const result1 = getName1('Halyna');
// console.log('result1', result1);


// const getName2 = function(name) {
//     return (`Імʼя дорівнює ${name}`);
// }
// const result2 = getName2('Oleg');
// console.log('result2', result2);

// const getName3 = (name) => {
//     return (`Імʼя дорівнює ${name}`);
// }
// const result3 = getName3('Katya');
// console.log('result3', result3);


// const getSumOfNumbers = (number, type = 'odd') => {
//    let sum = 0;
//     for (let i = 0; i <= number; i += 1) {
//         const isEven = i % 2 === 0;
//         const isOdd = !isEven;
//         if (!type) {
//             sum += i;
//         } else if (isEven && type === 'even') {
//             sum += i;
//         } else if (isOdd && type === 'odd') {
//             sum += i;
//         }
//     }
//     return sum;
// }
// const result = getSumOfNumbers(10, 'odd');
// console.log('result', result);

// 

function getDivisors(number = 1) {
    if (!Number.isInteger(number) || number < 0) {
        alert('number должен быть целым числом и больше нуля!');
    } else {
        let counter = 0;
        for (let i = number; i > 0; i -= 1) {
          const isDivisor = number % i === 0;
          if (isDivisor) {
              counter += 1;
          }
        }
      
        return counter;   
    }
}

const result = getDivisors();
console.log('result', result);

// 

// const checkQuestionAnswer = (question, correctAnswer) => {
//     let userAnswer = prompt(question);
//     userAnswer = userAnswer.trim().toLowerCase();
//     if (correctAnswer.toLowerCase() === userAnswer) {
//         alert('Ответ Верный');
//     } else {
//         alert('Ответ Неверный');
//     }
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

// 

const showSuccessMessage = (message) => {
    console.log(message);
}

const showErrorMessage = (message) => {
    console.error(message);
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    let countErrors = 0;
    for (let i = 0; i < text.length; i += 1) {
        const currentSymbol = text[i];
        if (currentSymbol === errorSymbol && errorCallback) {
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
            countErrors += 1;
        }
    }

    if (successCallback && countErrors === 0) {
        successCallback('В данном тексте нет запрещенных символов');
    }
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
checkTextOnErrorSymbol(text, 'Ф', showSuccessMessage, showErrorMessage);
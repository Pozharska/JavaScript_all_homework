// Ex-1

// 1. myName – ваше ім'я
// 2. programmingLanguage - мова програмування
// 3. courseCreatorName - творець даного курсу
// 4. reasonText - причина, чому ви хочете стати веб - розробником
// 5. numberOfMonth - кількість місяців, які ви приділили вивченню JavaScript до початку курсу

// const myName = 'Halyna';
// const programmingLanguage = 'JavaScript';
// const courseCreatorName = 'Alexey Minin';
// const reasonText = 'I want to become a programmer and earn a lot of money';
// const numberOfMonth = 1;

// const allInfo = `Hello everyone! My name is ${myName}.
// I'm currently learning the programming language ${programmingLanguage} 
// in the course on programmingLanguage in the ${courseCreatorName}.
// I want to become a web developer because ${reasonText}.
// Before that I studied programmingLanguage ${numberOfMonth} months.
// I'm sure I'll finish this course!`; 
// console.log('allInfo', allInfo);

// Ex-2

// 2.1
// let myInfoText = `Hello everyone! My name is ${myName}.
// I'm currently learning the programming language ${programmingLanguage} 
// in the course on programmingLanguage in the ${courseCreatorName}.
// I want to become a web developer because ${reasonText}.
// Before that I studied programmingLanguage ${numberOfMonth} months.
// I'm sure I'll finish this course!`; 
// myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());
// console.log('myInfoText', myInfoText);
// console.log('length', myInfoText.length);
// console.log('1st', myInfoText[0]);
// console.log('last', myInfoText[myInfoText.length - 1]);

// // Ex-3-4
// let userName = prompt('What is your name?');
// userName = userName.toUpperCase().trim();
// alert(`Your name ${userName}`);

// let userName = prompt('What is your name?');
// userName = userName.toUpperCase().trim();
// let userAge = prompt('How old are you?'); 
// userAge = userAge.trim(), Number();
// alert(`Your name ${userName} and you are ${userAge} years old`);

// EX-5
// const userString = prompt('Enter text to crop');
// let startSliceIndex = prompt('Enter the index from which you want to start trimming the term');
// startSliceIndex = Number(startSliceIndex);
// let endSliceIndex = prompt('Enter the index at which you want to end the string trimming');
// endSliceIndex = Number(endSliceIndex);
// const resultString = userString.trim().slice(startSliceIndex, endSliceIndex);
// alert(`Result: ${resultString}`);

// EX-6
// let userText = prompt('Введіть текст');
// let wordFromText = prompt('Введіть слово з тексту');
// userText = userText.trim();
// wordFromText = wordFromText.trim();
// const indexOfWord = userText.indexOf(wordFromText);
// const resultString = userText.slice(0, indexOfWord);
// alert(`Results: ${resultString}`);



// Давайте починати!
// Я в промісі
// Давайте завершувати!
//  result
// Привіт, я setTimeout!
// Я теж в setTimeout, тільки чекаю довше


console.log('Давайте починати!');

setTimeout(() => {
    console.log('Привіт, я setTimeout!');
}, 1000)

const promise = new Promise((resolve) => {
    console.log('Я в промісі');

    resolve('Повертаю результат з промісу');
});

setTimeout(() => { 
    console.log('Я теж в setTimeout, тільки чекаю довше');
}, 2000);

promise.then((result) => {
    console.log('result');
})

console.log('Давайте завершувати!');

// microtasks - код, який знаходиться всередині then catch finally 

// Виконується мАкрозадача = виконується код
// Викликається все, що є в черзі мІкрозадач
// Викликається все, що є в черзі викликів (Callback queue)

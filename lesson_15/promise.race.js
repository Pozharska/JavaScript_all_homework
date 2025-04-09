//  Promise.race - потрібен для того, щоб повернути Promise, який виконався швидше за всі з масиву переданих Promise/
// повертає значення, не в залежності від того, з яким статусом виконався Promise 

//  Promise.race([
//     new Promise(),
//     new Promise(), 
//     new Promise(),
//     new Promise(),
// ]);

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise1');
     }, 500);
});
 
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise2');
     }, 1000);
});
 
const promise3  = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise3');
     }, 3000);
});
 
Promise.race([promise1, promise2, promise3])
.then((result) => { 
    console.log('result', result)
})
    .catch((error) => {
        console.log('error', error);
})
//Exercise-2

// console.log(Number('10'), typeof Number('10')); // явное 
// //1
// console.log(+'50');
// //2
// console.log(Number('100')); 
// //3
// console.log('' + 1);
// //4
// console.log(String(1)); 
// //5 
// console.log(Boolean(0)); 
// //6
// console.log(+'001');
// //7
// console.log(1 + '');
// //8
// console.log(Boolean(1));
// //9
// console.log(String(001));
// //10
// console.log(Number('Hello World'));

console.log(Number('10'), typeof Number('10')); // явнe

//console.log(+'50'); // неявне
console.log(Number('50'), typeof Number('50')); // явнe

console.log(Number('100'), typeof Number('100')); // явнe

//console.log('' + 1); // неявне
console.log(String(1), typeof String(1)); //явне

console.log(String(1),  typeof String(1)); //явне

console.log(Boolean(0), typeof Boolean(0)); //явне

//console.log(+'001'); //неявне
console.log(Number('001'), typeof Number('001')); //явне

//console.log(1 + ''); // неявне
console.log(String(1), typeof String(1)); //явне

console.log(Boolean(1), typeof Boolean(1)); //явне

console.log(String('001'), typeof String('001')); //явне

console.log(Number('Hello World'), typeof Number('Hello World')); // явне

//Exercise - 3
  
//Перетворити явнe до string, number і boolean наступні сутності, подивитися на результат і проаналізувати його:
// 1. console.log
// 2. { name: 'Maxim' }
// 3. Symbol('key')
// 4. Number
// 5. ''
// 6. 0
// 7. -10
// 8. '-105'

console.log(console.log); // ƒ log() { [native code] }
console.log(String(console.log)); // function log() { [native code] }
console.log(Number(console.log)); // NaN
console.log(Boolean(console.log)); // true

console.log({ name: 'Maxim' }); // 
console.log(String({ name: 'Maxim' })); // [object Object]
console.log(Number({ name: 'Maxim' })); // NaN
console.log(Boolean({ name: 'Maxim' })); // true

console.log(Symbol('key')); // Symbol(key)
console.log(String(Symbol('key')));  // Symbol(key)
//console.log(Number(Symbol('key'))); // TypeError: Cannot convert a Symbol value to a number
console.log(Boolean(Symbol('key'))); // true

console.log(Number); // ƒ Number() { [native code] }
console.log(String(Number)); // function Number() { [native code] }
console.log(Number(Number)); // NaN
console.log(Boolean(Number)); // true

console.log('пустий рядок'); // 'пустий рядок'
console.log(String('')); // '  '
console.log(Number('')); // 0
console.log(Boolean('')); // false

console.log(0); // 0
console.log(String(0)); // 0
console.log(Number(0)); // 0
console.log(Boolean(0)); // false

console.log(-10); // -10
console.log(String(-10)); // -10
console.log(Number(-10)); // -10
console.log(Boolean(-10)); // true

console.log(-105); // -105
console.log(String('-105')); // -105
console.log(Number('-105')); // -105
console.log(Boolean('-105')); // true

//Exercise - 4
 // 1 
console.log(Number(' 1 2 3 4 5')); // NaN
// 2
console.log(Number('1234 5')); // NaN
// 3
console.log(Number('12345')); // 12345
// 4 
console.log(String(false)); // false
// 5 
console.log(Boolean('0000000')); // false
//  6 
console.log(Boolean(0.0000001)); // true
//  7 
console.log(String(undefined)); // undefined
// 8 
console.log(Number('100f')); // NaN
// 9
console.log(Number('100')); // 100
// 10 
console.log(Number('000001')); // 1

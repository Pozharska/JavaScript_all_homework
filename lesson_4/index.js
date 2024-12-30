// Java Script має динамічну типізацію

// до рядка
const age = 20;
console.log('number age:', typeof age);
console.log('string age:', typeof String (age)); // явне перетворення

const updateAge = '1' + 20; //  неявне перетворення
console.log('updateAge', typeof updateAge);

// до числа
const experienceInJaveScript = '5';
console.log('string experienceInJaveScript:', typeof experienceInJaveScript);
console.log('number experienceInJaveScript:', typeof Number (experienceInJaveScript)); // явне перетворення

console.log('experienceInJaveScript', typeof +experienceInJaveScript); //  неявне перетворення

console.log('Hello World', Number ('Hello World')); // NaN - not a number


// до Boolean  (логічний тип - true або false)
console.log('Hello', Boolean ('Hello'));
console.log('5', Boolean ('5'));

// null, undefined, NaN, 0, " " - always false
console.log('null', Boolean (null));
console.log('undefined', Boolean (undefined ));

console.log('0', Boolean (0));
console.log(' ', Boolean (  ));

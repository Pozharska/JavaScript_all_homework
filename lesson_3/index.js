// У Java Script існує 7 примітивних типів даніх та 1 не примітивний тип данних - це object.


// 1. string
const favoriteDrink = 'Vine';
console.log(favoriteDrink);

// 2. number
const numberOfBottle = 1;
console.log(numberOfBottle);

// 3. boolean
const isGoodDrink = true;
console.log(isGoodDrink);

// 4. null - значення пусте або невідоме;
const OlegFavoriteEat = null;
console.log(OlegFavoriteEat);

// 5. undefined - значення не було вказано;
let pigOwner = undefined;
console.log(pigOwner);

// 6. object
const drink= {
    favoriteDrink:'Vine',
    numberOfBottle: 1,
    isGoodDrink: true,
    };
console.log(drink);

// 7. symbol - створення унікальних ключів об'єктів;
const id = Symbol('id');
console.log(id); 

// 8. bigint - велике число (не може бути більше 2^53 - 1 або -2^53 - 1 );
const bigIntNumber = BigInt(10);
console.log(bigIntNumber);



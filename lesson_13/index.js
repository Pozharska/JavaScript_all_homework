// ООП - Об'єктно-Орієнтоване Програмування (ООП) - один з методів програмування, який розглядає програму як множину «об'єктів»,
//  що взаємодіють між собою.
// ООП представляє програмне забезпечення як сукупність взаємних об'єктів, 
// а не просто набір команд чи функцій як у традиційному програмуванні.
// У JavaScript є багато об'єктів які є вбудовані у ядро, 
// так звані стандартні об'єкти JavaScript наприклад: String, Number, Date і т. д.
// Кожен стандартний об'єкт являється екземпляром об'єкта Object, наслідуючи його властивості і методи.
// У JavaScript об'єкти це сукупність методів і властивостей.



// Процедурне програмування — набір не пов'язаних функцій і змінних для зберігання та обробки інформації. 
// Цей підхід простий і прямолінійний, 
// але при зростанні кодової бази результатом може бути те, що називається spaghetti code - тісно пов'язаний код.

//  function and class

// function Animal(name) {
//     this.name = name;

//     this.getName = function () {
//         return this.name;
//     }
// }

class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

// new
const Ellefant = new Animal('Ellefant');
const puppy = new Animal('Pupppy');
console.log('puppy', puppy); 
// console.log('Ellefant', Ellefant);
// console.log(Ellefant.name);  
// console.log(Ellefant.getName());

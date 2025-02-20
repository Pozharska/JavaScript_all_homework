//  static - потрібен для того, щоб створювати поля та методи, які належать саме класу, а не якимось його обʼєктам.
//  не можна використовувати this

class Car {
    static isCar(car) {
        return car instanceof Car;
}
    static #initialParams = {
        name: 'Kia',
        maxSpeed: 150,
}
    
    constructor(name, maxSpeed) {
        this.name = name || Car.#initialParams.name;
        this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
    }

    drive() {
        console.log(`Машина ${this.name} зараз на шляху`);
    }
}
const car = new Car(); 
console.log(car);
const isCar = Car.isCar();
// console.log(isCar); 
// Наслідування

class Plane {
    constructor(type, numberOfPassengers) {
        this.type = type;
        this.numberOfPassengers = numberOfPassengers;
    }

    startFlight() {
        console.log('Полетіли!');
    }
}

// extends -  створення дочірнього класу.     super() - викликати конструктор батьківського класу (наслідування)
class MilitaryPlane extends Plane {
    constructor(type) {
        super(type, 0);
        this.numberOfGuns = 0;

    }
    startFlight() {
        console.log('Полетіли в атаку!');
    }

    setNumberOfGuns(numberOfGuns) {
        this.numberOfGuns = numberOfGuns;
    }

    shoot() {
        console.log('Стріляємо у ру***ню!');
    }
}

// const plane = new Plane('Passengers', 78);
// console.log('plane', plane);
// plane.startFlight();

const militaryPlane = new MilitaryPlane('military');
militaryPlane.startFlight();
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();
console.log('militaryPlane', militaryPlane);

// instanceof

class God {}

console.log(militaryPlane instanceof God );
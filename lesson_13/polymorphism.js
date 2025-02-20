// Поліморфізм - одна дія та декілька реалізацій цієї дії

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    makeSound () {}
}
 
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log('Meow-meow');
    }
}

class Horse extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log('Іго-го-го');
    }
}


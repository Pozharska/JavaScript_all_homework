// Абстракція - це використання тільки тих характеристик обʼєкту, які з найбільшою вірогідністю показують його в певній системі/

class Footbaler {
    constructor(name, club) {
        this.name = name;
        this.club = club;
    }

    shoot() { }
    celebrateGol() {}
    pass() {}
}

class Forward extends Footbaler {
    constructor(name, club) {
        super(name, club);
    }

    shoot() { 
        console.log('Дуже сильний удар!'); 
    }
    celebrateGol() {
        console.log('Так, я забив гол!');
    }
    pass() {
        console.log('Середній пас');
     }
}
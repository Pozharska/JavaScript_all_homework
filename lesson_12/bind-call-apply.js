const mainHero = {
    fullName: 'FantasticWoman',
    health: 118,
    strenght: 7,
};

const badHero = {
    fullName: 'Godzilla',
    health: 47,
    strenght: 9,
}

function printHeroInfo(extraInfo = '') {
    console.log('this', this);
    console.log(`Name: ${this.fullName}, Health:${this.health}, Strenght: ${this.strenght}, ${extraInfo}`);
}

//  bind, call, apply

printHeroInfo.call(badHero, 'Роль: Злодій');
printHeroInfo.apply(badHero,['Роль: Злодій']);
 
const bindedPrintHeroInfo = printHeroInfo.bind(mainHero, 'Роль: Головний герой');
bindedPrintHeroInfo();
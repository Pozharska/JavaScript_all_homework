const setName = (entity, value) => {
    if (typeof entity === 'object') {
        entity.name = value;
    } else {
        entity = value;
        name = value;
    }
};

const developer = {
    name:'Halyna'
};
let developerName = 'Halyna';

setName(developer, 'Haluysia');
setName(developerName, 'Haluysia');

// console.log('developer', developer);
// console.log('developerName', developerName);

const entity = {};
const entityCopy = entity;

console.log(entity === entityCopy)

// console.log({} === {});
// console.log([] === []); 

console.log('hello' === 'hello');
console.log(7 === 7);


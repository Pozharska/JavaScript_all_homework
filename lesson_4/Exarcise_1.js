let age = 29;
console.log(Number(age), Boolean(age), String(age));

let favotiteFruit = 'banana';
console.log(Number(favotiteFruit ), Boolean(favotiteFruit), String(favotiteFruit));

let itSweetFruit =  true;
console.log(Number(itSweetFruit), Boolean(itSweetFruit), String(itSweetFruit));

let aBeautifulflower = null;
console.log(Number(aBeautifulflower), Boolean(aBeautifulflower), String(aBeautifulflower));

let theBestWriter = undefined;
console.log(Number(theBestWriter), Boolean(theBestWriter), String(theBestWriter));

let bigIntNumber4 = 354n;
console.log(Number(bigIntNumber4), Boolean(bigIntNumber4), String(bigIntNumber4));

let infoAboutFruit = {
    age: 1,
    name: 'banana',
    color: true,
}
console.log(Number(infoAboutFruit), Boolean(infoAboutFruit), String(infoAboutFruit));

let id = Symbol('id');
console.log(Number(id), Boolean(id), String(id));
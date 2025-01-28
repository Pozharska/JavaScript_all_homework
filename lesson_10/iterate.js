const goodInfo = {
    id: 4,
    prise: 256,
    currency: '$',
    name: 'bag',
};

console.log('goodInfo', goodInfo);

// for of - для перебирання масивів;
//  for in - для перебирання об'єктів;

// for (const key in goodInfo) {
//     console.log('key', key);
//     const value = goodInfo[key];
//     console.log('value', value);
// };

// Object.keys

const keys = Object.keys(goodInfo);
console.log('keys', keys);

// Object.values

const values = Object.values(goodInfo);
console.log('values', values);

// Object.entries

const entries = Object.entries(goodInfo);
console.log('entries', entries);
console.log(entries[0]);


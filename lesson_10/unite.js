const developerInfo = {
    age: 29,
    experience: 2,
    name:'Halyna',
};

const developerExtraInfo = {
    name:'Oleg',
    height: 170,
    isJunior: false,
};

//  ...

// const array = [
//     ...array1,
//     ...array2,
// ];

// 1 

// const developer = {
//     ...developerInfo,
//     ...developerExtraInfo,
//     name: 'Helen',
// };
// console.log('developer', developer);

// 2

// Object.assign

// const developer2 = Object.assign(developerInfo, developerExtraInfo);

// console.log('developer2', developer2);

// Опціональна цепочка  - ?.

const developer = {
    name: 'Halyna',
    job: 'Front-End developer',
    experience: 24,
//     jobAllInfo: {
//         type: 'Front-End',
//         framework: {
//             name: 'ReactJS',
//         }
//     }
};

// console.log(developer.jobAllInfo);
// console.log(developer.jobAllInfo.framework);

// if ((developer.jobAllInfo.framework)) 

if (developer && developer.jobAllInfo && developer.jobAllInfo.framework && developer.jobAllInfo.framework.name) {
    console.log('Наш розробник вже знає фреймворк');
} else {
    console.log('Наш розробник ще НЕ знає фреймворк');
};

//  ?.

if (developer?.jobAllInfo?.framework?.name) {
    console.log('Наш розробник вже знає фреймворк');
} else {
    console.log('Наш розробник ще НЕ знає фреймворк');
};
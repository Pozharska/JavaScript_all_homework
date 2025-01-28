const developer = {
    // key: value,
    name: 'Halyna',
    job: 'Front-End developer',
    experience: 24,
    jobAllInfo: {
        type: 'Front-End',
        framework: 'ReactJS',
    }
};

console.log('type', developer.jobAllInfo.type);
console.log('framework', developer['jobAllInfo']['framework']);

// console.log('developer', developer);

// // 1
// console.log('name', developer.name);
// console.log('jobAllInfo', developer.jobAllInfo);

// // 2
// const key = 'name';

// console.log('name', developer[key]);


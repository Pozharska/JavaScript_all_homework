// const addZero = (numberStr) => String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr);

// const getDateFormat = (date, separator = '.') => {
//     const dateItem = date.getDate();
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const dateArray = [dateItem, month + 1, year].map((item) => addZero(item));
//     console.log('dateArray', dateArray)

//     return dateArray.join(separator);
// }

// console.log(getDateFormat(new Date()));

// const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

// const getDaysBeforeBirthday = (birthdayDate) => {
//     const currentDateMs = Date.now();
//     const birthdayDateMs = birthdayDate.getTime();
//     return convertMsToDays(birthdayDateMs - currentDateMs);
// }

// console.log(getDaysBeforeBirthday(new Date(2025, 9, 13)))

// const convertDaysToMs = (days) => days * 24 * 3600 * 1000

// const addDays = (date, days = 1) => {
//     return new Date(date.getTime() + convertDaysToMs(days));
// }

// const date = new Date();
// console.log('before', date);
// const newDate = addDays(date, 5);
// console.log('after', newDate);

const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    },
];

const allowVisa = (people) => {
    return people.filter((person) => {
        const splittedExpirationDate = person.passportExpiration.split('.');
        const year = splittedExpirationDate[splittedExpirationDate.length - 1];
        const month = splittedExpirationDate[1];
        const date = splittedExpirationDate[0];
        const passportExpirationDate = new Date(year, month - 1, date);
        console.log('passportExpirationDate', passportExpirationDate);
        if ((passportExpirationDate.getTime() > Date.now()) && !person.criminalRecord) {
            return true;
        }

        return false;
    });
};

const result = allowVisa(peopleWithVisa);
console.log('result', result);
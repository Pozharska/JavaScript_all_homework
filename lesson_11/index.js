// Date

const date = new Date();
console.log('date', date);

//  new Date (year, month, date, hours, minutes, seconds, milliseconds

//  0 - січень. 11 - грудень 

const newDate = new Date(1995, 9, 13, 11, 20, 30, 3000);
console.log('newDate', newDate);

console.log('year', newDate.getFullYear());
console.log('month', newDate.getMonth());
console.log('date', newDate.getDate());
console.log('hours', newDate.getHours());
console.log('minutes', newDate.getMinutes());
console.log('seconds', newDate.getSeconds());
console.log('milliseconds', newDate.getMilliseconds());

// День тижня від 0 до 6 ( 0 - неділя, 1 - понеділок, 2 - вівторок, 3 - середа, 4 - четвер, 5 - пʼятниця, 6 - субота)
 
console.log('day', newDate.getDay());
if (newDate.getDay() === 5) {
    console.log('Today is Friday')
};

newDate.setFullYear(2023);
newDate.setMonth(4);
newDate.setDate(8);
newDate.setHours(8);
newDate.setMinutes(54);
newDate.setSeconds(40);
newDate.setMilliseconds(5000);
console.log('newDate', newDate);


//   getTime

const date1 = new Date(2021, 12, 20);
const date2 = new Date(2024, 3, 8);

// кількість мілісекунд починаючи з 1 січня 1970 року
console.log('date1', date1.getTime());
console.log('date2', date2.getTime());

const difference = date2.getTime() - date1.getTime();
console.log('difference', difference / 1000 / 60); 

const startTime = Date.now();

for(let i = 0; i < 100000000; i += 1) {
    // do something  
}

const endTime = Date.now();
 
console.log('startTime', startTime);
console.log('endTime', endTime);

const difference2 = endTime - startTime;
console.log('difference2', difference2);
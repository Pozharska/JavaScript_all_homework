//  Event loop

function sayHello(name) {
    console.log(`Hello ${name}`);
}

console.log('Start');
sayHello('Halyna');
setTimeout(() => {
    sayHello('Nastya');
}, 0)
sayHello('Oleh'); 
console.log('End');

// Call Stack -> додати в стек -> запустити код -> видалили із стеку

// Callback queue - черга викліків (перший зайшов - перший вийшов)

// Web Api - сутності, які надає нам браузер -> setTimeout, setInterval
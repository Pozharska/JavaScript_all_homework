// // Ex 1 
// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем',];

// const giveParcel = () => {
//     const personalName = peopleWaiting.shift();
//         alert (`${personalName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`);

// }

// const leaveQueueWithoutParcel = () => {
//     const personalName = peopleWaiting.pop();
//     alert(`${personalName} не получил(а) посылку и ушел(ла) из очереди`);
// }

// giveParcel();
// giveParcel();
// giveParcel();

// for (let i = peopleWaiting.length; i > 0; i -=1) {
//     leaveQueueWithoutParcel();
// }

// // Ex 2

// const getSumOfSequence = (number) => {
//     const newArray = [];
//     for (let i = 1; i <= number; i += 1) {
//        newArray.push(i);
//     }

//     return newArray[0] + newArray[newArray.length - 1];
// }
 
// const result = getSumOfSequence(10);
// console.log('result', result);

// // Ex 3

// let coffeName = prompt('Поиск кофе по названию: ');
// coffeName = coffeName.trim().toLocaleLowerCase();

// const coffeeSearchIndex = coffees.findIndex((coffees) => coffees.toLocaleLowerCase() === coffeName );
// const favoriteCoffee = coffees[coffeeSearchIndex];
// if (favoriteCoffee) {
//     alert(`Держите ваш любимый кофе ${favoriteCoffee}. Он ${coffeeSearchIndex + 1}-й по популярности в нашей кофейне.`);
// } else {
//     alert('К сожалению, такого вида кофе нет в наличии');
// }

const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price + 0.5);

coffees.forEach((coffeeName, index) => {
    alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро`);
});






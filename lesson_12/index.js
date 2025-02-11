//  this - object

console.log(this);

const user = {
    name: 'Halyna',
    dateOfBirth: 1995,
    getName() {
        //return user.name
        return this.name;
    },
    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.dateOfBirth;
    },
    getAllInfo: function () {
        const age = this.calculateAge();
        console.log(`name: ${this.name}, year: ${age}`);
    }
}
console.log(user.getName());
console.log(user.calculateAge());
user.getAllInfo();

// bind, call, apply - ці методи використовуються виключно для функцій

const user2 = {
    name: 'Oleg',
}

const user2Name = user.getName.call(user);
console.log('user2Name', user2Name);


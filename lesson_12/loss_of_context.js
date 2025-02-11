

const user = {
    name: 'Halyna',
    progrramingLanguage: 'Java Script',
    getName() {
        return this.name;
    },
    // в JS у стрілочної функції немає this
    // getProgrramingLanguage: () => {
    //     console.log(this);
    //     return this.progrramingLanguage
    // }
    getProgrramingLanguage: function() {
        console.log(this);
        return this.progrramingLanguage
    }
};

console.log('getName', user.getName());

const newGetName = user.getName;
 
console.log('newGetName', newGetName.call(user)); 

console.log(user.getProgrramingLanguage());
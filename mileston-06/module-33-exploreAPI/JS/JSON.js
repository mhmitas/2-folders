const user = {
    name: 'Abdullah',
    age: 22,
    job: 'Programmar',
}

// JavaScript Object Notation (JSON)
const myString = JSON.stringify(user);

// console.log(user)
// console.log(myString)

// { name: 'Abdullah', age: 22, job: 'Programmar' }
// {"name":"Abdullah","age":22,"job":"Programmar"}


const shop = {
    owner: 'John',
    address: {
        street: 'abcd',
        city: 'xyz',
        country: 'bangladesh'
    },
    products: ['apple', 'banana'],
    isOpen: true,
}

console.log(shop);

const shopJSON = JSON.stringify(shop)
console.log(shopJSON)

const shopObj = JSON.parse(shopJSON)
console.log(shopObj)
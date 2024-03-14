// 1. JSON => stringify, parse;

const person = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

const personJSON = JSON.stringify(person)
// console.log(personJSON);

const personObj = JSON.parse(personJSON)
// console.log(personObj)


//2 fetch()

// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

// object -> keys, values
const keys = Object.keys(person)
const values = Object.values(person)
// console.log(keys,values)
//


// Add or remove from an array.

const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 121000, brand: 'apple', color: 'purple' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'golden' },
    { name: 'camera', price: 40000, brand: 'canon', color: 'gray' },
    { name: 'sunglass', price: 500, brand: 'abcd', color: 'black' },
]

const newProduct = { name: 'webcam', price: 700, brand: 'abc' }

// copt products array and then add newProduct
const newProducts = [...products, newProduct]
console.log(newProducts);


// Create a new array after remove phone from the array 

const productsWithoutPhone = products.filter(product => product.name !== 'phone')
console.log(productsWithoutPhone)
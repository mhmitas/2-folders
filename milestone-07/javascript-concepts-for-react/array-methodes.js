const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 121000, brand: 'apple', color: 'purple' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'golden' },
    { name: 'camera', price: 40000, brand: 'canon', color: 'gray' },
    { name: 'sunglass', price: 500, brand: 'abcd', color: 'black' },
]

// Array map
const brands = products.map(product => product.brand)
// console.log(brands)


// array forEach
// const colors = products.forEach(product => console.log(product.color))


// array filter()
const less5k = products.filter(product => product.price < 50000)
// console.log(less5k)

const SpecificName = products.filter(product => product.name.includes('n'))
// console.log(SpecificName)


// aray find
const special = products.find(p => p.name.includes('n'))
console.log(special)
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// dot notetion
const prof1 = person.firstName;

// Bracet Notation 
const prof2 = person['firstName']

const keys = Object.keys(person)
console.log(keys)

console.log("" || 'Hello')
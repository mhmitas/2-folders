/*
data type -primitive,-non-primitive
*/

/*-------------->>>

let x = 5;
let z = x;

z = 10;

console.log('z', z)
console.log('x', x)

let a = {name: 'mahim'}
let b = a;

a.age = 23;

console.log('a',a)
console.log('b',b)


const c = ['apple', 'banana']
const d = c;
console.log(d)
d.push('orange')
console.log('c=',c )
console.log('d=',d)
<<<----- comment --------------->>>*/


// truthy and falsy -

// false => false, 0, "", null, undefined, NaN
// truthy => truth, 'mahim', 1, 1235, [], {}

const value = {};
console.log(!!value)
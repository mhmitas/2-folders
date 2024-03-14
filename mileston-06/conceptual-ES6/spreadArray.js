/**
const numbers = [2, 4, 6]

const numbers1 = [...numbers]
// for(let num of numbers){
//     numbers1.push(num)
// }

numbers.push('100')
numbers1.push('99')

console.log('numbers: ', numbers)
console.log('numbers1: ', numbers1)
*/


const nums = [3, 5, 7, 9, 2, 4, 6, 8]

// const c = nums[2]
// const a = nums[0]
// const b = nums[1]

const [a, b, c, ...rest] = nums

console.log(a, b, rest)
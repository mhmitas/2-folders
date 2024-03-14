// Array distructuring
const numbers = [42, 57, 39]
// const x = numbers[0]
// const y = numbers[1]

const [x, y] = numbers
// console.log(x, y)

function boxify(num1, num2) {
    const nums = [num1, num2]
    return nums
}

// console.log(boxify(23, 45))

const person = {
    name: 'mahim',
    age: 32,
    job: ['webDeveloper', 'bussinessman']
}

const [job1, job2] = person.job
// console.log(job1, job2)




// object distructuring
const { name, age } = { name: 'alu', age: 12 }
console.log(age, name);

const employee = {
    name: 'Mr Mahim',
    ide: 'VS code',
    designetion: 'developer',
    languages: ['html', 'css', 'js'],
    machine: {
        name: 'macbook',
        weight: '1kg',
        prossesor: {
            model: 'm1',
            core: 4,
            threds: 8
        }
    }
}

const { core, model } = employee.machine.prossesor
console.log(core,model)
//" ", 'almas', 5, true, {}, []
// '', 0, null, undefined, false

let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
} else {
    myVar = 0
}


// 
let myMoney = 50;
let lunch;
if (myMoney > 100) {
    lunch = 'sada vat'
} else {
    lunch = 'Kacchi'
}
// console.log(lunch)

// ternary: 
const money = 800;
let food = money > 100 ? 'biryani' : 'cha biscuit'
// console.log(food)



// Shortcut way to convert numbers to string=>
const number = 76;
// console.log(number)
const numberStr = number + "";
// console.log(numberStr)

// Shortcut way to convert string to numbers =>
const inputStr = '576';
const inputNum = +inputStr;



const isActive = false;
const showUser = () => console.log('show user')
const hideUser = () => console.log('Hide user')
// isActive ? showUser() : hideUser();
// moreShortcut 
isActive && showUser()
isActive || hideUser(); 

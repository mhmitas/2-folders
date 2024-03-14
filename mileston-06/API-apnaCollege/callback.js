function sum(a, b) {
    console.log(a + b)
}

function calculator(a, b, sumCalback) {
    sumCalback(a, b);
}

calculator(1, 2, sum)
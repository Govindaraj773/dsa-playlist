// Check the number is even or Odd without using if-else statement and loop method
function evenOrOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
}
console.log(evenOrOdd(8));


// with math floor method
function evenOrOddCheck(num) {
    return Math.floor(num/2) === num/2 ? "even" : "odd";
}
console.log(evenOrOddCheck(7));
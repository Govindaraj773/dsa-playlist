// using for loop method 
const numbers = [1,2,3,4,5,6];
const result = [];

for (let i=0; i<numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        result.push(numbers[i]**2)
    }
}
console.log(result);


//using for..of method
const numbers2 = [1,2,3,4,5,8];
const result2 = []

for (const num of numbers2){
    if(num % 2 === 0){
        result2.push(num**2)
    }
}
console.log(result2);


// using filter and map method
const numbers3 = [1,2,3,4,5,10];
const result3 = numbers3.filter(num => num % 2 === 0).map(num => num**2);
console.log(result3);
// Map : The map() methodcreates new array by applying function to the every element in the original array. It doenn't change the original array. (doubling the numbers, converting string to number etc.)
// Filter : The filter() method is create a new array containing the only elements pass the specific test.. (filter the even, odd numbers, )
// Reduce : The reduce() method executes a reducer function to each element of the array and resulting in a single array. it reduces entire array in to one result array or string or number etc.


const numbers = [1,2,3,4,5,6];

// map method
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter method
const even = numbers.filter(num => num % 2 === 0);
console.log(even);

// reduce method
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// Combined example: double the numbers, filter even results, and sum them up
const combinedResult = numbers
    .map(num => num * 2)
    .filter(num => num % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
console.log(combinedResult);


// Combined example 2 with products
const products = [
    {name:"Laptop", price: "30999", category: "electronics"},
    {name:"Phone", price: "19999", category: "electronics"},
    {name:"Jeans Pant", price: "1999", category: "Fashion"},
    {name:"Bag", price: "999", category: "Fashion"},
    {name:"Shoes", price: "2999", category: "Fashion"},
]

const totalFashionPrice = products
       .filter(p => p.category === "Fashion")
       .map(p => Number(p.price))        // in products list price is string so we need to convert it to number or remove string from products list
       .reduce((acc, price) => acc + price, 0);

       console.log("Total Fashion Price", totalFashionPrice);

       
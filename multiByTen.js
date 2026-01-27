// const array = [3,6,9,12,15];
// const result = [];

// for (let i=0; i<array.length; i++){
//     if(array[i]%3 === 0){
//         result.push(array[i]*10);
//     }
// }

// console.log(result);

const array = [3,6,9,12,15];
const result = array.filter(num => num % 3 ===0).map(num => num*10);
console.log(result);
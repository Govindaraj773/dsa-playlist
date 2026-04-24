// finding the unique value in an array
let arr = [1, 2, 3, 4, 3, 2, 1, -3];

let bag = {};

for (let i = 0; i < arr.length; i++) {
  let ele = arr[i];
  if (bag[ele] === undefined) {
    bag[ele] = 1;
  } else {
    bag[ele]++;
  }
}
// console.log(bag); //finding the unique value in the array

for (let key in bag) {
  if (bag[key] === 1) {
    console.log(key);
  }
}

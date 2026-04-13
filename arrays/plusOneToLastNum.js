// adding one number to the last number in the array and if it is 9 then we will make it to 0 and add one to the previous number and if all the numbers are 9 then we will add 1 to the beginneing to the array and make all the numbers to 0
let digits = [1, 2, 9];

function plusOneToLastNum(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0; // if last number is 9 make to 0 and continue to the previous number
  }
  digits.unshift(1); // if all the numbers are 9 then we will add 1 to the beginneing and make remaining numbers to 0
  return digits;
}

console.log(plusOneToLastNum(digits));

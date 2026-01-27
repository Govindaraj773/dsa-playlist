
let int = "X";
var romanToInt =function(int) {
    const romans = {
        I: 1, 
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0;
    for(let i=0; i<int.length; i++) {
        const currentVal = romans[int[i]];
        const nextVal = romans[int[i+1]];
        if(nextVal && currentVal < nextVal ) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    } 
    return total;
}
console.log(romanToInt(int));
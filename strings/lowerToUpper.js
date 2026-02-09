let words = "hello world";

let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let bag = "";

for (let i=0; i<words.length; i++) {
    let char = words[i];

    let converted = false;
    for (let j=0; j<lower.length; j++) {
        if(char == lower[j]){
            bag = bag + upper[j];
            converted = true;
            break;
        }
    }
    //  if charecter was uppercase or space then we will add it to bag as it is
    if(!converted){
        bag = bag + char;
    }

}
console.log(bag);

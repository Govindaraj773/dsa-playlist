let string1 = "sadbutsad";
let string2 = "sad";

// // Method 1 : Using substring
// var strStr = function(string1, string2){
//     const n = string1.length;
//     const m = string2.length;

//     for(let i=0; i<=n-m; i++){
//         if(string1.substring(i, i+m) === string2){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(strStr(string1, string2));  


// Method 2 : Brute force method

var strStr2 = function(string1, string2){
    if(string2.length === 0) return 0;

    for(let i=0; i<string1.length - string2.length; i++){
        let match = true;

        for(let j=0; j<string2.length; j++){
            if(string1[i+j] !== string2[j]){
                match = false;
                break;
            }
        }
        if(match) return i;
    }
    return -1;
}

console.log(strStr2(string1, string2));


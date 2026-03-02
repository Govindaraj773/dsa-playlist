let string1 = "sadbutsad";
let string2 = "sad";

var strStr = function(string1, string2){
    const n = string1.length;
    const m = string2.length;

    for(let i=0; i<=n-m; i++){
        if(string1.substring(i, i+m) === string2){
            return i;
        }
    }
    return -1;
}

console.log(strStr(string1, string2));  
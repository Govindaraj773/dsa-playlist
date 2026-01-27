let palindrome = 151;

var isPalindrome = function(palindrome) {
    if( palindrome < 0 || (palindrome % 10 === 0 && palindrome !== 0)) return false;

    let reversedHalf = 0;
    while( palindrome > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (palindrome % 10);
        palindrome = Math.floor(palindrome / 10);
    }
    return palindrome === reversedHalf || palindrome === Math.floor(reversedHalf/10);
};

console.log(isPalindrome(palindrome));
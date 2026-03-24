let s = "Good Morning";

function lastWordLength(s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && count === 0) {
            continue;
        }

        if (s[i] === ' ') {
            break;
        }

        count++;
    }

    return count;
}

console.log(lastWordLength(s));
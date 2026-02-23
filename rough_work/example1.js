

console.log("First");

setTimeout(() => {
    console.log("Second")
}, 0);

Promise.resolve().then(() => {
    console.log("Third")
});

console.log("Fourth");


// First → synchronous → executes first

// Fourth → synchronous → executes second

// Third → microtask → higher priority

// Second → callback queue → last
// -----------------Callback example---------------------------------------------------------
// function test(name, callback) {
//     console.log("hello " + name);
//     callback();
// }

// function tester() {
//     console.log("welcome to js");
// }

// test("raju", tester);
// // console.log(tester)

// -----------------Async/Await example---------------------------------------------------------


// // example 1 ----------------------------
// async function test(name) {
//     return "Hello Govi"
// }
// test().then((data)=> console.log(data))

// // example 2----------------------------------
// async function test(){
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const res = await data.json();
//     console.log(res)
// }
// test()

// // asynchronous example

console.log("start");

setTimeout(() => {
    console.log("Progress takes 2 seconds")
}, 2000)

console.log("end");
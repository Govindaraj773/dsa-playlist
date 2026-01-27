d1 = { 'a': 100, 'b': 200, 'c': 300 }
d2 = { 'a': 300, 'b': 200, 'd': 400 }

// Sample Output
// { 'a': 400, 'b': 400, 'c': 300, 'd': 400 }

let d1 = { 'a': 100, 'b': 200, 'c': 300 };
let obj = {};
for (let key in d1) {
  let value = d1[key]
  obj[key] = value;
}
let d2 = { 'z': "yes", 'a': 300, 'b': 200, 'd': 400 };
for (let key in d2) {
  let value = d2[key];

  if (obj[key] == undefined) {
    obj[key] = value;
  } else {
    obj[key] = obj[key] + value;
  }
} console.log(obj);
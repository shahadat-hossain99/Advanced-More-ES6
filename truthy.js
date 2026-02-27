let data;
data = 0; //'falsy'
data = ""; //'falsy'
data = "0"; //'Truthy'
data = " "; //'Truthy'
data = false; //'falsy'
data = true; //'Truthy'
data = null; //'falsy'
data = undefined; //'falsy'
data = {}; //'Truthy'
data = []; //'Truthy'

if (data) {
  console.log("Truthy");
} else {
  console.log("falsy");
}

//! when variable value is true
// let price = 25;

// if (price) {
//   console.log("I have truthy value"); //'I have truthy value'
// }

//! when variable value is false
// let price = 0;

// if (price) {
//   console.log("I have truthy value"); //value didn't enter here bcz it was false
// }

//! when variable value is false but ! -sign change it oposite
let price = false;

if (!price) {
  console.log("I have falsy value"); //'I have falsy value'
}

// ! to understand the value is it true or false we use double bang sign (!!)

let value = 0;
if (!!value) {
  console.log("truthy");
}

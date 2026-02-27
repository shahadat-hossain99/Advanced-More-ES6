console.log(2 === 2); //true
console.log(2 === 3); //false
console.log(2 === " 2"); //false
//! triple equals compares the data type

//! double equals does type coercion
//
console.log(2 == 2); //true
console.log(2 == "2"); //true
//? convert the string '2' to number 2 and campares, return true
console.log(1 == true); //true
//? true is converts to 1 and then compared. returns true
console.log(0 == false); //true
console.log(null == undefined); //true
console.log(NaN == NaN); //false
console.log({} == {}); //false

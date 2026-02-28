// task--->01

const numbers = [2, 4, 6, 8];
const double = numbers.map((num) => num * 2);
console.log(double);

// task ---->02

const names = ["rahim", "karim", "sakib"];

const upperCase = names.map((name) => {
  return name.toLocaleUpperCase();
  // console.log()
});
console.log(upperCase);

// task---->03

const values = [1, 2, 3, 4, 5];
const square = values.map((value) => value * value);
console.log(square);

// task---4

const numArray = [10, 20, 30];
const toString = numArray.map((num) => num.toString());
console.log(toString);

// task--->05

const words = ["hello", "world"];
const modWord = words.map((word) => {});

// bonus task

const objs = [
  { name: "rahim", age: 20 },
  { name: "karim", age: 25 },
];

const nameArr = objs.map((obj) => obj.name);
console.log(nameArr);

// Price Increase Project (2 Tasks)
// task--01
const productList = [
  { name: "Shirt", price: 1000 },
  { name: "Pant", price: 1500 },
  { name: "Shoes", price: 2000 },
];

const priceRise = productList.map((pd) => {
  return {
    ...pd,
    price: pd.price + pd.price * 0.1,
  };
});
console.log(priceRise);

// task--->02
const prods = [
  { name: "Shirt", price: 1000, finalPrice: 1500 },
  { name: "Pant", price: 1500, finalPrice: 2000 },
  { name: "Shoes", price: 2000, finalPrice: 2500 },
];

const sddNewProp = prods.map((pd) => {
  return {
    ...pd,
    finalPrice: (pd.finalPrice = pd.price + 500),
  };
});
console.log(sddNewProp);

// 2️⃣ Object Modify using map (2 Tasks)
// Task 1

// const dataObjs = [
//   { name: "rahim", age: 20 },
//   { name: "karim", age: 25 },
// ];

// const upperFullName = dataObjs.map((data) => {
//   return {
//     ...data,
//     name: data.name.toUpperCase(),
//   };
// });
// console.log(upperFullName);

// task-->02

const dataObjs = [
  { name: "rahim", marks: 40 },
  { name: "karim", marks: 80 },
];

const results = dataObjs.map((data) => {
  let status;

  if (data.marks >= 80) {
    status = "pass";
  } else {
    status = "fail";
  }

  return {
    ...data,
    status: status,
  };
});
console.log(results);

// 3️⃣ map + Condition (2 Tasks)
// Task 5

const numberData = [10, 15, 20, 25, 30];
const modNum = numberData.map((num) => {
  if (num % 2 == 0) {
    num = num * 2;
  } else {
    num = num;
  }

  return num;
});
console.log(modNum);

// Task 6

const strings = ["apple", "banana", "cat", "elephant"];

const upOrSame = strings.map((word) => {
  if (word.length > 5) {
    word = word.toUpperCase();
  } else {
    word = word;
  }

  return word;
});
console.log(upOrSame);

console.log(strings);

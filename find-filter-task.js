// Filter Tasks (4 Easy Tasks)
// 1️⃣ Even Numbers Filter

// Filter all even numbers from the array
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNum = numbers.filter((num) => num % 2 === 0);
// console.log(evenNum);

// // Filter all people with age >= 18
// const people = [
//   { name: "Rahim", age: 17 },
//   { name: "Karim", age: 25 },
//   { name: "Sakib", age: 15 },
// ];
// const adultPeople = people.filter((peop) => peop.age >= 18);
// console.log(adultPeople);

// // Filter words with length > 4
// const words = ["apple", "cat", "banana", "dog"];
// const wordLength = words.filter((word) => word.length > 4);
// console.log(wordLength);

// // Filter products with price > 1000
// const products = [
//   { name: "Shirt", price: 800 },
//   { name: "Pant", price: 1500 },
//   { name: "Shoes", price: 2000 },
// ];

// const highPrice = products.filter((pd) => pd.price > 1000);
// console.log(highPrice);

// 🔹 Find Tasks (4 Easy Tasks)

// Find the first even number
const numbers = [1, 3, 7, 8, 10];

const findEven = numbers.find((num) => num % 2 === 0);
console.log(findEven);

// Find the first person with age >= 18
const people = [
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 25 },
  { name: "Sakib", age: 15 },
];

const adult = people.find((pp) => pp.age > 18);
console.log(adult);

// Find the first word with length > 4
const words = ["cat", "dog", "banana", "apple"];
const longWord = words.find((word) => word.length > 4);
console.log(longWord);

// Find the first product with price > 1000
const products = [
  { name: "Shirt", price: 800 },
  { name: "Pant", price: 1500 },
  { name: "Shoes", price: 2000 },
];

const overPriced = products.find((pd) => pd.price > 1000);
console.log(overPriced);

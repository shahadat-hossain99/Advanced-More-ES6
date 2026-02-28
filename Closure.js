// function outerFunction() {
//   function innerFunction() {
//     console.log("This is the inner Function");
//   }
//   return innerFunction;
// }
// const result = outerFunction();
// console.log(result);

function counter(owner) {
  let count = 0;
  function increment() {
    count++;
    console.log("value of count", owner, count);
  }
  return increment;
}

const rahimCounter = counter("rahim");
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
// const count1 = counter();
// count1();
// count1();
// count1();
// count1();
// count1();
// count1();

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("সংখ্যাটি হলো: " + i);
  }, 1000);
  //   return;
}
// আউটপুট: 1, 2, 3

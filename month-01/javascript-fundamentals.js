// Excercise 1: 
// Write a function makeMultiplier(x) that returns a function which multiplies any number by x. Example: makeMultiplier(3)(5) should return 15.

function makeMultiplier(x) {
  return function (number) {
    return x * number;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(19));        // 38
console.log(triple(5));        // 15
console.log(makeMultiplier(4)(6)); // 24
console.log(makeMultiplier(4)(6)); // 24


// Excercise 2: 
// Create a counter object with increment(), decrement(), and getCount() methods using closures. The count should not be directly accessible.

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },

    decrement() {
      count--;
      return count;
    },

    getCount() {
      return count;
    },
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
console.log(counter.count);       // undefined

// Excercise 3: 
// Write a function that uses block scope to prevent variable leaking. Create 3 variables with the same
// name in different blocks.

function blockScopeFunction() {
  {
    const message = "First block";
    console.log(message);
  }

  {
    const message = "Second block";
    console.log(message);
  }

  {
    const message = "Third block";
    console.log(message);
  }

  // console.log(message); // ReferenceError: message is not defined
}

blockScopeFunction();

// Excercise 4:
// Convert these 3 function declarations into arrow functions: add(a,b), greet(name), square(n)

const add = (a, b) => a + b;
const greet = (name) => `Hello, ${name}!`;
const square = (n) => n * n;

console.log(add(2, 3));       // 5
console.log(greet("Shpetim")); // Hello, Shpetim!
console.log(square(4));       // 16


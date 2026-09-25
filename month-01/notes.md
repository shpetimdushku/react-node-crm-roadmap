1. What is the difference between var, let, and const?

var is function scoped, while let and const are block scoped. You can reassign var and let; you cannot reassign a const binding. In modern JavaScript, I use const by default and let when the value needs to change.

2. What is a closure? Can you give a real-world use case?

A closure is a function that remembers variables from where it was created, even after the outer function has returned. I might use one to keep a counter private while exposing methods to update it:

Code outside createCounter cannot access count directly.

3. What is the difference between function declarations and arrow functions?

A function declaration can be called before its definition in the same scope. An arrow function assigned to const can only be called after that assignment. Arrow functions also inherit this from the surrounding scope, whereas a regular function’s this depends on how it is called.

4. What does “hoisting” mean in JavaScript?

Hoisting describes how JavaScript handles declarations before executing a scope. Function declarations can be called before their position in the code. A var variable can be read before its assignment, but its value will be undefined. Reading a let or const variable before initialization throws a ReferenceError.

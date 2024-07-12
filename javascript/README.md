# JavaScript1

Welcome to the JavaScript1 repository! This repository contains my journey of learning JavaScript, focusing on loops, arrays, functions, and the `prompt` method.

## Table of Contents

- [Introduction](#introduction)
- [Loops](#loops)
- [Arrays](#arrays)
- [Functions](#functions)
- [Prompt](#prompt)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

JavaScript is a versatile and powerful programming language widely used for web development. This repository documents my learning process as I explore fundamental JavaScript concepts, including loops, arrays, functions, and the `prompt` method.

## Loops

Loops in JavaScript are used to perform repeated tasks based on a condition. This repository covers different types of loops:

- `for` loop
- `while` loop
- `do...while` loop
- `for...in` loop
- `for...of` loop

## Arrays

Arrays are used to store multiple values in a single variable. In this repository, I explore:

- Creating arrays
- Accessing array elements
- Modifying arrays
- Array methods (e.g., `push`, `pop`, `shift`, `unshift`, `slice`, `splice`)

## Functions

Functions are reusable blocks of code designed to perform a specific task. This repository covers:

- Function declarations
- Function expressions
- Arrow functions
- Higher-order functions
- Function scope and closures

## Prompt

The `prompt` method is used to display a dialog box that prompts the user for input. In this repository, I demonstrate how to use the `prompt` method to interact with users and capture input.

## Examples

Here are some examples of what you will find in this repository:

### Loop Example

```javascript
// For loop example
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}
 
// Array example
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Output: apple

// Function example
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('John')); // Output: Hello, John!

// Prompt example
const name = prompt('What is your name?');
alert(`Hello, ${name}!`);

const numbers = [4, 6, 8, 10];
// const output = [];
const tripleIt = number => number * 3;
// for (const number of numbers) {
//     const result = tripleIt(number);
//     output.push(result);
// }
// console.log(output);

const output = numbers.map(tripleIt);
console.log(output);
//result for each element will be strored in an array

const squres = numbers.map(x => x * x);
console.log(squres);
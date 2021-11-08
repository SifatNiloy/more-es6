//declare variable based on the name of an object property   
const myObject = { x: 2, y: 60, z: 600, a: 25, b: 68 };
const { x, b, y } = myObject;
// console.log(x);
console.log(y, b);
console.log(myObject?.m?.q)

//destructuring array
const [p, q] = [45, 37, 91, 86];
// console.log(p, q);
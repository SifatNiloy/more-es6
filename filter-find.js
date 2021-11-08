const numbers = [5, 42, 7, 17, 34, 45, 9, 43, 98, 65];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(bigNumbers);
// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: '15', color: 'white' },
    { name: 'mobile phone', price: '15000', color: 'black' },
    { name: 'smart watch', price: '1500', color: 'red' },
    { name: 'notepad', price: '25', color: 'green' },
    { name: 'water glass', price: '45', color: 'transparent' },

]
const expensive = products.filter(product => product.price > 100);
const blacks = products.filter(product => product.color == 'black');
;
// console.log("these products are black: ", ...blacks)
// console.log(expensive);
const transparentItem = products.find(product => product.color == 'transparent');
console.log('this product is transparent:', transparentItem.name);
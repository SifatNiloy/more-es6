const friends = ["Tom Hanks", "Tom Cruise", "Tom Brady", "Tom Solaiman"];
const fLength = friends.map(friend => friend.length);
console.log(fLength);

const products = [
    { name: 'water bottle', price: '15', color: 'white' },
    { name: 'mobile phone', price: '15000', color: 'black' },
    { name: 'smart watch', price: '1500', color: 'red' },
    { name: 'notepad', price: '25', color: 'green' },
    { name: 'water glass', price: '45', color: 'transparent' },

]
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
// console.log(productName);
// console.log(productPrice);
products.forEach(product => console.log(product));

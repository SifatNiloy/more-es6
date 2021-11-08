const fish = { id: 58, name: "king hilsha", price: 9000, phone: '0183498579843', address: 'chandpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
const { phone, price, dress, id } = fish;

// console.log(phone, price);
// console.log(phone);
// console.log(phone);
// console.log(phone);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: { work: 'website development', employee: 22, framework: 'react', tech: { first: 'html', second: 'css' } }
};

// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { food } = company.ceo;
const { first, second } = company.web.tech;
console.log(work, framework, food, first, second);

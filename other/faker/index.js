const faker = require('faker');
const fs = require('fs');
const producGen = () => {
    return {
        name: faker.commerce.productName(),
        category: faker.commerce.product(),
        color: faker.commerce.color(),
        price: faker.commerce.price(),
        producer: faker.random.alphaNumeric(10),
        }
};

const data = [];
for (let i = 0; i< 1000000; i++) {
    data.push(producGen());
}

fs.writeFile(
    './data/goods.json'
    , JSON.stringify(data)
    , err => {
        console.log(err);
});
console.log('work is done');
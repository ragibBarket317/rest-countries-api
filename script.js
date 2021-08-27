const products = {
    name: 'laptop',
    price: 40000,
    memory: '16gb',
    isSsd: true
}
const covertString = JSON.stringify(products);
const convertObject = JSON.parse(covertString);

// console.log(products)
// console.log(covertString);
// console.log(convertObject);


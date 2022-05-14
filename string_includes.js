// STRING INCLUDES ******************
// check if a string contains another string

const siProducts = [
    { title: 'Modern Poster' },
    { title: 'Bar Stool' },
    { title: 'Armchair' },
    { title: 'Leather Chair' }
];

const siText = 'ai';

const filteredProducts = siProducts.filter((product) => product.title.toLowerCase().includes(siText));
console.log(filteredProducts);

const siFirstName = 'john';

const siResult1 = siFirstName.includes('J');
const siResult2 = siFirstName.includes('h', 2);

console.log(`first result : ${siResult1}`);
console.log(`second result : ${siResult2}`);

const siProduct = { title: 'Bar Stool' };   

const siResult3 = siProduct.title.includes('oo');
console.log(`third result : ${siResult3}`);


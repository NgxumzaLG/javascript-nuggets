// SET OBJECT ******************
// Stores a collection of unique values of any type

// new Set() - accepts iterable objects - creates an empty object
// add(value) - add the value (ignores it if already exist in the object)
// delete(value) - delete the value (also return true if the value does exits)
// clear() - deletes every value in the object
// has(value) - checks if the value exists in the object then return true, if not false

// iterators
// entries(), keys(), values(), forEach()

const nsUnique = new Set();

const random = 'third';

nsUnique.add('first');
nsUnique.add('second');
nsUnique.add(random);
nsUnique.add(4);

// const delResult = nsUnique.delete(random);
const delResult = nsUnique.delete('five');
const hasResult = nsUnique.has('second');

console.log(delResult);
console.log(hasResult);

console.log(nsUnique);

const products = [
    {
        title: 'high-back bench',
        company: 'ikea'
    },
    {
        title: 'albany table',
        company: 'marcos'
    },
    {
        title: 'accent chair',
        company: 'caressa'
    },
    {
        title: 'wooden table',
        company: 'ikea'
    }
];

const companies = products.map((item) => item.company);

const uniqueCompanies = new Set(companies);

const finalComapnies = ['all', ...uniqueCompanies];

const nsResult = [...new Set(products.map((item) => item.company)), 'all'];

console.log(finalComapnies);
console.log(nsResult);


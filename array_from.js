// ARRAY.FROM ******************
// NOT ON PROTOTYPE
// From - returns array object from an object
// With a length property or an iterable object
// From - turns array-like/ish into array - string, nodeList, set

const afUdemy = 'udemy';
console.log(Array.from(afUdemy));

const text = document.querySelectorAll('.text');

const newText = Array.from(text).find((item) => item.textContent === 'Person');

const afItems = Array.from({ length: 120 }, (_, index) => { return index });

const itemsPerPage = 14;
const pages = Math.ceil(afItems.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    const tempItems = afItems.slice(start, start + itemsPerPage);

    return tempItems;
});
console.log(newItems);
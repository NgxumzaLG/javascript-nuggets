// DESTRUCTURING ARRAY AND OBJECT ******************
// faster/easier to access/unpack variables from array and objects

// Array
// Order is important when destructuring and array

const desFruit = ['orange', 'lemon', 'banana', 'apple'];
const friends = ['john', 'bob', 'peter', 'anna', 'kelly'];

const fruit1 = desFruit[0];
const fruit2 = desFruit[1];
const fruit3 = desFruit[2];

console.log(fruit1, fruit2, fruit3);

const [enemy, , peter, , kelly, susan] = friends

console.log(enemy, peter, kelly, susan);

let first = 'bob';
let second = 'john';

let temp = second;

// second = first;
// first = temp;

// OR
[second, first] = [first, second];

console.log(first, second);


// Object
// The order is not important with object

const myDetails = {
    first: 'bob',
    last: 'turner',
    city: 'cape town',
    siblings: {
        sister: 'jane'
    }
};

// const firstName = myDetails.first;
// const lastName = myDetails.last;
// const sister = myDetails.siblings.sister;

const { first:firstName, city, last, zip, siblings:{sister:favoriteSibling} } = myDetails;

console.log(firstName, last, city, zip, favoriteSibling);

// function printPerson(person) {
//     const { first, last } = person;
//     console.log(first, last);
// }
// OR 
function printPerson({ first, last, siblings:{sister} }) {
    console.log(first, last, sister);
}

printPerson(myDetails);




// FILTER ******************
// Returns a new array
// Can manipulate the size of the new array (unlike map)
// Returns based on condition
// If no mathc - [] (empty array)

// FIND ******************
// Returns single instance (object/string)
// returns the first match
// If no match - undifined

const ffPeople = [
    { name: 'bob', age: 20, position: 'intern' },
    { name: 'peter', age: 23, position: 'designer' },
    { name: 'susy', age: 25, position: 'Singer' },
    { name: 'anna', age: 27, position: 'developer' },
    { name: 'susan', age: 30, position: 'nurse' }
];

const fruits = ['banana', 'lemon', 'orange', 'mango', 'apple'];

// Filter
const youngPeople = ffPeople.filter((person) => {
    if (person.age < 27) {
        return person;
    }
});

console.log(youngPeople);

const developers = ffPeople.filter((person) => person.position === 'developer');
console.log(developers);

// Find
const peter = ffPeople.find(candidate => candidate.name === 'peter');
console.log(peter);

const lemon = fruits.find(fruit => fruit === 'lemon');
console.log(lemon);

const oldPerson = ffPeople.find(person => person.age > 30);
console.log(oldPerson);

const firstPerson = ffPeople.find((person) => person.age < 27);
console.log(firstPerson);

const anna = ffPeople.filter((person) => person.name === 'anna');

console.log(peter.position);
console.log(anna[0].position);

// REST OPERATOR... ******************
// Gather/collects items
// Destructuring, functions
// Placement important, careful with the same name
// Rest when declare function, spread when invoke the function

// Arrays
const restFruits = ['orange', 'lemon', 'banana', 'apple'];
const [firstFruit, secondFruit, ...restOfTheFruits] = restFruits;

const specificFruit = restOfTheFruits.find(fruit => fruit === 'apple');
console.log(specificFruit);

// Objects
const restPerson = { name: 'anna', age: 27, position: 'developer' };
const { position, ...rest } = restPerson;

console.log(position, rest);

const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, item) => { return total += item }, 0) / scores.length;
    console.log(average);
};

// getAverage(restPerson.name, 89, 76, 81, 93);

const testScores = [89, 76, 81, 93, 68];
getAverage('lusanda', ...testScores);

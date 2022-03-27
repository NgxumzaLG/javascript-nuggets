// REST OPERATOR... ******************
// Allows and iterable to spread/expand individually inside receiver
// Split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'bob', 'peter'];
const girls = ['anna', 'susan', 'kelly'];

const bestFriend = 'arnold';

const allFriends = [...boys, ...girls, bestFriend];
console.log(allFriends)

// Reference
// const newFriends = allFriends;

// Copy
const newFriends = [...allFriends]
newFriends[0] = 'nancy';
console.log(allFriends);
console.log(newFriends);

// ES2018 - ES8 objects
const person = { name: 'john', job: 'developer' };
const newPerson = {...person, city: 'paarl', name: 'peter'}
console.log(person);
console.log(newPerson);


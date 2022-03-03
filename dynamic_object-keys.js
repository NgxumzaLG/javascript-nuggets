// DYNAMIC OBJECT KEYS ******************
// Dot notation does not allow you to create keys that include - (Dash)
// But square bracket notation does allow you to create one that include -

// DOT NOTATION ******************
const person = {
    name: 'john'
};

console.log(person.name);
person.age = 25;

console.log(person);

// SQUARE BRACKET NOTATION ******************
const items = {
    'featured-items': ['item1', 'item2', 'item3'],
};

console.log(items['featured-items']);
console.log(person['name']);

let appState = 'loading';
const keyName = 'computer';
const theState = {
    [appState]: true
};

theState[keyName] = 'apple';

console.log(theState);

const state = {
    loading: true,
    name: '',
    job: ''
};

function updateState(key, value) {
    state[key] = value;

}

updateState('name', 'lusanda');
updateState('job', 'developer');
updateState('loading', false);
updateState('products', []);

console.log(state);
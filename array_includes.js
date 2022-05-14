// ARRAY INCLUDES ******************
// Checks if the item is in an array
// Useful in the conditional statements

const groceries = ['milk', 'bread', 'meat'];

const randomItem = 'milk';

const isIncluded = groceries.includes(randomItem, 1); // starts searching from index (position) 1
console.log(isIncluded);

if (groceries.includes(randomItem)) console.log(`Yeah!, it's on the list`);

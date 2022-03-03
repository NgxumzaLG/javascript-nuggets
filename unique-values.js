// UNIQUE VALUE ******************
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array (Spread operators...)

const menu = [
    {
        name: 'Pancakes',
        category: 'Breakfast'
    },
    {
        name: 'Burger',
        category: 'Lunch'
    },
    {
        name: 'Steak',
        category: 'Dinner'
    },
    {
        name: 'Bacon',
        category: 'Breakfast'
    },
    {
        name: 'Eggs',
        category: 'Breakfast'
    },
    {
        name: 'Pasta',
        category: 'Dinner'
    }
];

const myMap = item => item.category;

const newSet = new Set(menu.map(myMap));

const categories = [...newSet];

// OR.....

const uniqueValues = [...new Set(menu.map(item => item.category))]

const category = categories.map(item => `<li>${item}</li>`);

const results = document.querySelector('.unique-list');

results.innerHTML = category.join('');
// REDUCE EXPERT ******************
const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 799.99,
        amount: 1
    },
    {
        title: 'Google Pixel',
        price: 499.99,
        amount: 2
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 399.99,
        amount: 4
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 699.99,
        amount: 3
    }
];

let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
    const { price, amount } = cartItem;
    // count items
    total.totalItems += amount;
    // total sum
    total.cartTotal += amount * price;

    return total;
}, {
    totalItems: 0,
    cartTotal: 0
});

cartTotal = parseFloat(cartTotal.toFixed(2));

console.log(totalItems, cartTotal);

// GitHub repos example
const url = 'https://api.github.com/users/ngxumzalg/repos?per_page=100';

const fetchRepos = async () => {
    const response = await fetch(url);
    const data = await response.json();
        
    const newData = data.reduce((total, repo) => {
        const { language } = repo;

        // if (language) {
        //     if (total[language]) {
        //         total[language] = total[language]++;

        //     } else {
        //         total[language] = 1;
        //     }
        // }
        if (language) {
            total[language] = total[language] +1 || 1;
        }

        return total;
    }, {});

    console.log(newData);

};

fetchRepos();

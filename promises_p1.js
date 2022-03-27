// PROMISES PART 1 ******************
// Async await
// Consume/use promises

// Pending, Rejected, Fulilled

const value = 2;

const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 3);
    console.log(random);

    if (random === value) {
        resolve('You guessed correctly');

    } else {
        reject('Oops, wrong number');
    }
});


promise.then((data) => console.log(data)).catch((err) => console.log(err));
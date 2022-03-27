// ASYNC / AWAIT ******************
// Async must be present, always return a promise
// Await waits till the promised is settled
// Error handling - try/catch block

// const example = async () => {
//     return 'Hello there';
// }

// async function someFunc() {
//     const someResult = await example();
//     console.log(someResult);
// }


const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' },
    { id: 4, name: 'alex' }
]

const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] }
]

const getData = async () => {
    try {
        const user = await getUser('anna');
        const articles = await getArticles(user.id);
        console.log(articles);
    } catch (error) {
        console.log(error);
    }
}

getData()

// getUser('susan')
//     .then((user) => getArticles(user.id))
//     .then((articles) => console.log(articles))
//     .catch((err) => console.log(err))

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name);

        if (user) {
            return resolve(user);

        } else {
            return reject(`No such user with name: ${name}`);
            
        }
    });
}

function getArticles(userId) {
    return new Promise((resolve, reject) => {
        const userArticles = articles.find((user) => user.userId === userId);
        if (userArticles) {
            return resolve(userArticles.articles);

        } else {
            return reject(`Wrong ID`);
        }
    })
}

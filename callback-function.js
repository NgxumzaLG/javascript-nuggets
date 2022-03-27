// CALLBACK FUNCTION ******************
// Array methods, setTimeout, event listeners etc

function makeUppercase(value) {
    console.log(value.toUpperCase());
}

makeUppercase('peter');

function reverseString(value) {
    console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
    const fullName = `${name} smith`;
    cb(fullName);
    // Some more logic
}

handleName('susan', makeUppercase);
handleName('peter', makeUppercase);

handleName('anna', (value) => console.log(value));

const cbBtn = document.querySelector('.btn');

cbBtn.addEventListener('click', function () {
    console.log('Hello World!');
})

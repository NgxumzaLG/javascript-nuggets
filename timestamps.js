// TIMESTAMPS ******************

console.log(new Date());

// Unix Time
// Jauary 1, 1970
// 1s = 1000ms

// Date.now()
console.log(Date.now());
// new Date().getTime() 
console.log(new Date().getTime());
// new Date().valueOf() 
console.log(new Date().valueOf());

setTimeout(() => {
    console.log(Date.now());
}, 1000);

// create id's in learning apps
let newPeople = [];
newPeople = [...newPeople, { id: Date.now(), name: 'peter' }];

setTimeout(() => {
    newPeople = [...newPeople, { id: Date.now(), name: 'john' }];
    console.log(newPeople);

}, 1000);

// create/get dates
console.log(new Date(1648913361709));
const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate);
console.log(new Date());

// difference between dates
const firstDate = new Date();
const secondDate = new Date(2022, 3, 28);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(firstValue);
console.log(secondValue);

const timeDifference = secondValue - firstValue;
console.log(timeDifference);

const minutes = timeDifference / (1000 * 60);
console.log(minutes);

const hours = timeDifference / (1000 * 60 * 60);
console.log(hours);


// FOR IN LOOP ******************
// Iterate over object properties
// Not advised to use it on array, especially if the order is important
// On arrrays use "FOR OF" loop instead

const fiPerson = {
    name: 'john',
    age: 23,
    status: 'student'
};

for (const propertyName in fiPerson) {
    console.log(`${propertyName} : ${fiPerson[propertyName]}`);
};
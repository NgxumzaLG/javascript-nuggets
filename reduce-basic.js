// REDUCE BASIC ******************
// Iterates, callback function
// Reduce to a single avlue - number, object, array
// 1st parameter ('acc') - total of all calculations
// 2nd parametr ('curr') - current iteration/value

const staff = [
    { name: 'bob', age: 20, position: 'intern', salary: 350 },
    { name: 'peter', age: 23, position: 'designer', salary: 650 },
    { name: 'susy', age: 25, position: 'Singer', salary: 500 },
    { name: 'anna', age: 27, position: 'developer', salary: 900 },
    { name: 'susan', age: 30, position: 'cleaner', salary: 150 }
];

const dailyTotal = staff.reduce((total, person) => {
    console.log(total);
    console.log(person.salary);
    total += person.salary;

    return total;
}, 0)

console.log(dailyTotal);

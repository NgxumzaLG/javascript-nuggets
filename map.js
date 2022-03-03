// MAP METHOD ******************
// Returns a new array
// Does not change the size of the original array (unlike filter)
// Uses values from original array when making new one

const people = [
    {
        name: 'Lusanda',
        surname: 'Ngxumza',
        age: 22,
        position: 'The Boss'
    },
    {
        name: 'Sapho',
        surname: 'Nkunzi',
        position: 'Developer',
        age: 24,
    },
    {
        name: 'Chantell',
        surname: 'Van Zyl',
        age: 26,
        position: 'Designer'
    },
    {
        name: 'Lwazi',
        surname: 'Ntshuntshe',
        age: 32,
        position: 'Singer'
    },
    {
        name: 'Mthobisi',
        surname: 'Mashabela',
        age: 19,
        position: 'Dancer'
    }
];

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20

    };
});

const names = people.map(person => `<li>${person.name}</li>`);

const result = document.querySelector('.names-list');

result.innerHTML = names.join('');



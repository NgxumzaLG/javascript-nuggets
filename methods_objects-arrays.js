// OBJECT METHODS ******************
// Three methods ot convert objects into arrays
// Object.keys() - convert property names into array
// Object.values()- convert property values into array
// Object.entries() - converts them both

const objPerson = {
    name: 'peter',
    age: 21,
    status: 'student'
};

const keys = Object.keys(objPerson);
const values = Object.values(objPerson);
const objResult = Object.entries(objPerson);

const objNewResult = objResult.map((item) => {
    const [objFirst, objSecond] = item; 

    return objFirst; 
});

for (const [objFirst, objSecond] of objResult) {
    console.log({ objFirst }, { objSecond });
};

console.log('Keys', keys);
console.log('Values', values);
console.log('Entries', objResult);



// GET ELEMENT HELPER ******************

// const heading = document.querySelector('.heading');
// If reference wrong class it will return null


const getElement = (selector, isList) => {
    const elem = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector);
    if (!isList && elem) return elem;
    if (isList && !elem.length < 1) return elem;

    throw new Error(`Please double check selector : '${selector}'`)
}
console.log(getElement('.list-item', true));

const listItems = document.querySelectorAll('.list-item')
// If reference wrong classes it will return empty NodeList (array) []


console.log(listItems)

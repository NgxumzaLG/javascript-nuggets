// ECMASCRIPT 2022 ******************
// at{} - takes interger and returns the item at that index - string, array

// Top level Await - Basic Example
import fetchTabs from "./fetch_tabs";
const tabs = fetchTabs();
console.log(tabs);

const scores = [99, 90, 100];

const oldLast = scores[scores.length -1];
console.log(oldLast);

const newLast = scores.at(-1);
console.log(newLast);

const channel = 'Code Addict';
// console.log(channel.at(0));

const fetchData = async () => {
    const resp = await fetch('https://www.course-api.com/react-tabs-project');
    const data =  await resp.json()
    console.log(data);
}

fetchData();
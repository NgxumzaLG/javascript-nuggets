// WIDTH & HEIGHT ******************
// Window, any element
// innerWidth - window
// innerHeight - window
// getBoundingClientRect() - any element

console.log('width', window.innerWidth);
console.log('height', window.innerHeight);

const dimBtn = document.querySelector('.dim-btn');
const dimBox1 = document.querySelector('.box1');
const dimBox2 = document.querySelector('.box2');

dimBtn.addEventListener('click', () => {
    const firstDimensions = dimBox1.getBoundingClientRect();
    const secondDimensions = dimBox2.getBoundingClientRect();

    console.log(firstDimensions);
    console.log(secondDimensions);
})


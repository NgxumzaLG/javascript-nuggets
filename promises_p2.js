// PROMISES PART 2 ******************
// .p-first - after 1s first red;
// .p-second - after 3s second blue;
// .p-third - after 2s third green;

const proBtn = document.querySelector('.pro-btn');

proBtn.addEventListener('click', () => {
    addColor(1000, '.p-first', 'red')
        .then(() => addColor(3000, '.p-second', 'blue')
        .then(() => addColor(2000, '.p-third', 'green')))
        .catch((err) => console.log(err)); 
});

function addColor(time, selector, color) {
    const element = document.querySelector(selector);
    // console.log(element);
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time);

        } else (
            reject(`There is no such element : "${selector}"`)
        )

    });
}


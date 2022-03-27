// CALLBACK FUNCTION HELL ******************
// After 1s first red;
// After 3s second blue;
// After 2s third green;

const cbFirst = document.querySelector('.first');
const cbSecond = document.querySelector('.second');
const cbThird = document.querySelector('.third');
const cbBtn1 = document.querySelector('.cb-btn');

cbBtn1.addEventListener('click', () => {
    // NOT IN SEQUENCE !!!
    // setTimeout(() => {
    //     cbFirst.style.color = 'red';
    // }, 1000);
    // setTimeout(() => {
    //     cbSecond.style.color = 'blue';
    // }, 3000);
    // setTimeout(() => {
    //     cbThird.style.color = 'green';
    // }, 2000);

    // IN SEQUENCE !!!
    setTimeout(() => {
        cbFirst.style.color = 'red';
        setTimeout(() => {
            cbSecond.style.color = 'blue';
            setTimeout(() => {
                cbThird.style.color = 'green';
            }, 2000);
        }, 3000);
    }, 1000);

});






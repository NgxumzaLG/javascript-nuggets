// FETCH ERRORS ******************
// Only throws an error if cannot resolve
// ErrorResponse still a response (400-500)

const errUrl = 'https://www.course-api.com/react-tours-projects';

const getToursErrors = async () => {
    try {
        const resp = await fetch(errUrl)

        if (!resp.ok) {
            const msg = `There was an error "${resp.status}: ${resp.statusText}"`;
            throw new Error(msg);
        }
        
        const tours = await resp.json();
        console.log(tours);

    } catch (error) {
        console.log(error);
    }
}

const fetchBtn = document.querySelector('.fetch-btn');
fetchBtn.addEventListener('click', getToursErrors)
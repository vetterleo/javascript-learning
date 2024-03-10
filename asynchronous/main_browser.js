// setTimeout
setTimeout(() => {

    console.log('waited 1s');
}, 1000);

// nested Timeouts aka callback hell
setTimeout(() => {

    console.log('waited 1s');

    setTimeout(() => {

        console.log('waited 2s');

        setTimeout(() => {

            console.log('waited 3s');
        }, 1000);
    }, 1000);
}, 1000);

// button event handler in javascript
const myButton = document.querySelector('#myButton');
myButton.addEventListener('click', () => console.log('click on button'));

// fetch with promises
fetch('https://bible-api.com/john%203:16')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// fetch bible with async / await without error handling
const fetchBible = async (id) => {

    try {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
    } catch (error) {

        console.log(`an error occured : ${error}`);
    }
    
};
fetchBible();
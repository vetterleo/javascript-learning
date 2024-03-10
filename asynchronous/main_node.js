const fs = require('fs');

// error first callback
fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {

    if (err) {

        console.log('ERROR');
        console.log(err);
    } else if (data) {

        console.log('GOT DATA');
        console.log(data);
    }
});

// Create a promise 
const myPromise = new Promise((resolve, reject) => {

    const rand = Math.floor(Math.random() *2);

    if (rand === 0) {

        resolve();
    } else {


        reject();
    }
});

myPromise
    .then(() => console.log('SUCCESS'))
    .catch(() => console.log('SOMETHING WENT WRONG'));


// fs readFile with Promises
fs.promises
    .readFile('./test.txt', { encoding: 'utf-8' })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// load file with async / await
const loadFile = async () => {

    try {

        const data = await fs.promises.readFile('test2.txt', { encoding: 'utf-8' });
        console.log(data);
    } catch(error) {

        console.log('an error occured');
    }
    
}
loadFile();
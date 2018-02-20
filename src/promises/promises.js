const random = Math.random();

let promise = new Promise( (resolve, reject) => {
    console.log('how are you?');
    if(0.6 < random) {
        resolve('I\'m well');
    }
    else {
        reject(Error('it\'s gone wrong'));
    }
});

// .then(callback for success case, callback for failure case)

promise.then( (result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});

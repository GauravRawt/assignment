function racePromises(promises) {
    return Promise.race(promises);
}
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'First promise resolved');  
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Second promise resolved');  
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 200, 'Third promise rejected');  
});

racePromises([promise1, promise2, promise3])
    .then(result => {
        console.log('Resolved:', result);  
    })
    .catch(error => {
        console.error('Rejected:', error); 
    });

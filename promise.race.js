// Promise.race([new Promise(), new Promise(), new Promise()]);

const promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve('promise1');
  }, 500);
});

const promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('promise2');
  }, 2000);
});
const promise3 = new Promise(resolve => {
  setTimeout(() => {
    resolve('promise3');
  }, 1000);
});

const a = Promise.race([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.log(error));

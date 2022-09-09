'use strict';

// //1
// const developer = {
//   userName: 'Maksim',
//   isJSDev: true,
// };

// const { isJSDev, userName } = developer;

// //3 Статуса Promise
// //pending
// //resolve
// //reject

// const promise = new Promise((resolve, reject) => {
//   if (isJSDev) {
//     setTimeout(() => resolve(`${userName} является JS разработчиком`), 1000);
//   } else {
//     reject(`${userName} НЕ является JS разработчиком`);
//   }
// });

// // promise в pending и чтобы его запустить нужны обработчики promise а именно:

// //then
// //catch
// //finnally

// promise
//   .then(success => console.log(success))
//   .catch(error => console.log(error))
//   .finally(() =>
//     console.log(
//       'finnaly будет вызываться в независимоти от того был это resolve или reject'
//     )
//   );

//2 сделаем из promise функцию, которая будет возвращать new Promise
// это позволит передавать аргументы

// const promise2 = data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (data > 10) {
//         resolve(data);
//       } else {
//         reject('it looks like the error');
//       }
//     }, 2000);
//   });
// };

// promise2(20)
//   .then(data => console.log(data + 10))
//   .catch(error => console.log(error))
//   .finally(() =>
//     console.log('finnaly is going to work whatever it is resolve or reject')
//   );

// 3 Promise внутри Promise

// const promise = num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num > 10) {
//         resolve(num);
//       } else {
//         reject('it looks like the error');
//       }
//     }, 2000);
//   });
// };

// promise(20)
//   .then(data => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(data + 10);
//       }, 100);
//     });
//   })
//   .then(newData => console.log(newData))
//   .catch(error => console.log(error));

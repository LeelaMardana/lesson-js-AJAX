// Promise.all([new Promise(), new Promise(), new Promise()]);

//1
// const promise = num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num > 10) {
//         resolve(num);
//       } else {
//         reject(num);
//       }
//     }, 2000);
//   });
// };

// const one = promise(15);
// const two = promise(25);
// const three = promise(35);

// Promise.all([one, two, three])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));

//2

const dataContainer = document.querySelector('#data-container');
const URL = 'https://jsonplaceholder.typicode.com/todos';
const todosIds = [43, 10, 5, 100, 200];

const toggleLoader = () => {
  const loader = document.querySelector('#loader');
  const isHidden = loader.hasAttribute('hidden');
  isHidden
    ? loader.removeAttribute('hidden')
    : loader.setAttribute('hidden', '');
};
const createDataElement = text => {
  const todoElement = document.createElement('li');
  const todoElementAnchor = document.createElement('a');
  todoElementAnchor.href = '#';
  todoElementAnchor.textContent = text;
  todoElement.append(todoElementAnchor);

  return todoElement;
};

const getAll = ids => {
  toggleLoader();
  const results = ids.map(id => fetch(`${URL}/${id}`), {
    method: 'GET',
  });

  Promise.all(results)
    .then(responses =>
      Promise.all(
        responses.map(response => {
          if (!response.ok) {
            throw new Error('Ошибка запроса (Мяу)');
          }
          return response.json();
        })
      )
    )
    .then(data =>
      data.forEach(item => {
        const todoHTML = createDataElement(item.title);
        dataContainer.append(todoHTML);
      })
    )
    .catch(error => console.log(error))
    .finally(() => toggleLoader());
};

getAll(todosIds);

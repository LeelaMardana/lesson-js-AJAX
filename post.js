//1 отправка имеющихся данных

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'iphone 12',
//     about: 'iphone 12 256GB red',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

//2 отправка формы

// const userName = document.querySelector('[name=email]');
// const userLastName = document.querySelector('[name=password]');
// const form = document.querySelector('#stripe-login');
// const dataContainer = document.querySelector('#data-container');

// const createDataElement = text => {
//   const todoElement = document.createElement('li');
//   const todoElementAnchor = document.createElement('a');
//   todoElementAnchor.href = '#';
//   todoElementAnchor.textContent = text;
//   todoElement.append(todoElementAnchor);

//   return todoElement;
// };

// const toggleLoader = () => {
//   const loader = document.querySelector('#loader');
//   const isHidden = loader.hasAttribute('hidden');
//   isHidden
//     ? loader.removeAttribute('hidden')
//     : loader.setAttribute('hidden', '');
// };

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   toggleLoader();
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       name: userName.value,
//       lastName: userLastName.value,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       const dataHTML = createDataElement(
//         `${data.name} ${data.lastName} id: ${data.id}`
//       );
//       dataContainer.append(dataHTML);
//     })
//     .catch(error => console.log(error))
//     .finally(() => toggleLoader());
// });

//3 вынесем Fetch в отдельную функцию, на случай использования в нескольких местах

const userName = document.querySelector('[name=email]');
const userLastName = document.querySelector('[name=password]');
const form = document.querySelector('#stripe-login');
const dataContainer = document.querySelector('#data-container');

const render = text => {
  const todoElement = document.createElement('li');
  const todoElementAnchor = document.createElement('a');
  todoElementAnchor.href = '#';
  todoElementAnchor.textContent = text;
  todoElement.append(todoElementAnchor);

  return todoElement;
};

const toggleLoader = () => {
  const loader = document.querySelector('#loader');
  const isHidden = loader.hasAttribute('hidden');
  isHidden
    ? loader.removeAttribute('hidden')
    : loader.setAttribute('hidden', '');
};

const postData = ({ url, data }) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка запроса (Мяу)');
      }
      return response.json();
    })
    .catch(error => console.log(error))
    .finally(() => toggleLoader());
};

form.addEventListener('submit', e => {
  e.preventDefault();
  toggleLoader();

  const user = {
    name: userName.value,
    lastName: userLastName.value,
  };

  postData({
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: user,
  }).then(data =>
    dataContainer.append(render(`${data.name} ${data.lastName} id: ${data.id}`))
  );
});

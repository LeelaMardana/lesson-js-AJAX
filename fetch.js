//1 Получение данных с нашего файла
// fetch('db.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log('Something went wrong (мяу)', error));

//2 Получение данных с сервера
const dataContainer = document.querySelector('#data-container');

const URL = 'https://jsonplaceholder.typicode.com/todos';

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

const get = () => {
  toggleLoader();
  const result = fetch(URL, {
    method: 'GET',
  });

  result
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка запроса (Мяу)');
      }
      return response.json();
    })
    .then(data =>
      data.forEach(item => {
        const dataHTML = createDataElement(item.title);
        dataContainer.append(dataHTML);
      })
    )
    .catch(error => console.log(error))
    .finally(() => toggleLoader());
};

get();

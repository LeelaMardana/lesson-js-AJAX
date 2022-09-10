// Promise.race([new Promise(), new Promise(), new Promise()]);

// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('promise1');
//   }, 5000);
// });

// const promise2 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('promise2');
//   }, 2000);
// });
// const promise3 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('promise3');
//   }, 1000);
// });

// const a = Promise.race([promise1, promise2, promise3])
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

//2
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const dataContainer = document.querySelector('#data-container');

const render = (url, title) => {
  const photoItem = document.createElement('li');
  photoItem.className = 'photo-item';

  const photoImage = document.createElement('img');
  photoImage.src = url;
  photoImage.className = 'photo-item__image';

  const photoTitle = document.createElement('h3');
  photoTitle.className = 'photo-item__title';
  photoTitle.innerText = title;

  photoItem.append(photoImage, photoTitle);

  return photoItem;
};

const toggleLoader = () => {
  const loaderHTML = document.querySelector('#loader');
  const isHidden = loaderHTML.getAttribute('hidden') !== null;
  if (isHidden) {
    loaderHTML.removeAttribute('hidden');
  } else {
    loaderHTML.setAttribute('hidden', '');
  }
};

const getFastestLoadedPhoto = ids => {
  toggleLoader();
  Promise.race(ids.map(id => fetch(`${PHOTOS_URL}/${id}`)))
    .then(response => response.json())
    .then(data => {
      dataContainer.append(render(data.thumbnailUrl, data.title));
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      toggleLoader();
    });
};

getFastestLoadedPhoto([60, 12, 55]);

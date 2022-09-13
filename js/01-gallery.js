import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const boxRef = document.querySelector('.gallery');

const listItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`;
  })
  .join('');

boxRef.innerHTML = listItems;

boxRef.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src = ${event.target.dataset.source} width="800" height="600">`
  );
  instance.show();
  boxRef.addEventListener('keydown', event => {
    if (event.code !== 'Escape') {
      return;
    }
    instance.close();
  });
});

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const boxRef = document.querySelector('.gallery');
const listItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join('');
boxRef.innerHTML = listItems;

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionData: 'alt',
});

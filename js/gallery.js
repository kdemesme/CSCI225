/*Kadin D.*/
const galleryItems = document.querySelectorAll('.gallery-item');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

function showGalleryItem(index) {
  if (index < 0) index = galleryItems.length - 1;
  if (index >= galleryItems.length) index = 0;

  document.querySelector('.gallery-content').style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  currentIndex = index;
}

function nextImage() {
  showGalleryItem(currentIndex + 1);
}

function prevImage() {
  showGalleryItem(currentIndex - 1);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showGalleryItem(index);
  });
});

leftArrow.addEventListener('click', prevImage);
rightArrow.addEventListener('click', nextImage);

showGalleryItem(currentIndex);


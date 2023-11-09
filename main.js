const zoomImage = document.getElementById('zoomImage');

zoomImage.addEventListener('click', function() {
  if (zoomImage.style.transform === 'scale(1.5)') {
    zoomImage.style.transform = 'scale(1)';
    zoomImage.style.cursor = 'zoom-in';
  } else {
    zoomImage.style.transform = 'scale(1.5)';
    zoomImage.style.cursor = 'zoom-out';
  }
})

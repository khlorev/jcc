// Flip card on click with sound
const card = document.querySelector('.id-card');
const flipSound = document.getElementById('flipSound');

card.addEventListener('click', () => {
  card.classList.toggle('flipped');
  flipSound.currentTime = 0;
  flipSound.play();
});
document.addEventListener('DOMContentLoaded', (e) => {
  function playSound(e) {
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (audio !== null) {
      audio.currentTime = 0; // rewind sound to start before playing
      audio.play();
      key.classList.add('playing');
    }
  }

  function removeTransition(e) {
    if (e.propertyName === 'transform') {
      this.classList.remove('playing');
    }
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  document.addEventListener('keydown', playSound);
});

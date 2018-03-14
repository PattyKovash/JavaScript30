document.addEventListener('DOMContentLoaded', (e) => {
  const hourHand = document.querySelector('.hour');
  const minHand = document.querySelector('.min');
  const secHand = document.querySelector('.sec');

  function setHour(h) {
    const now = new Date();
    const hour = now.getHours();
    const hourDeg = 90 + (30 * (hour % 12));
    h.style.transform = `rotate(${hourDeg}deg)`;
  }

  function setMin(m) {
    const now = new Date();
    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360) + 90;
    m.style.transform = `rotate(${minDeg}deg)`;
  }

  function setSec(s) {
    s.style.transition = '';
    const now = new Date();
    const sec = now.getSeconds();
    const secDeg = ((sec / 60) * 360) + 90;

    if (sec === 0) {
      s.style.transition = `all 0.00s`;
    }
    s.style.transform = `rotate(${secDeg}deg)`;
  }

  setHour(hourHand);
  setMin(minHand);
  setSec(secHand);

  setInterval(() => {
    setHour(hourHand);
  }, 1000 * 60 * 60);

  setInterval(() => {
    setMin(minHand);
  }, 1000 * 60);

  setInterval(() => {
    setSec(secHand);
  }, 1000);

});



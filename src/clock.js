const TIME_DOM = document.querySelector('.js-time');

function getTime() {
  const now = new Date();
  let hour = now.getHours(),
    min = now.getMinutes(),
    second = now.getSeconds();
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  second = second < 10 ? `0${second}` : second;
  TIME_DOM.innerHTML = `${hour}:${min}:${second}`;
}

function init() {
  setInterval(getTime, 1000);
}
init();

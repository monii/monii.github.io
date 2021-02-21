const BODY = document.querySelector('.js-background');

function callBackGround(num) {
  const fileName = `${num + 1}.jpg`;
  const image = new Image();
  image.src = `img/${fileName}`;
  image.classList.add('bgImage');
  BODY.appendChild(image);
}

function makeRandom() {
  return Math.floor(Math.random() * 10);
}

function init() {
  const num = makeRandom();
  callBackGround(num);
}
init();

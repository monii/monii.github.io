const TIME_DOM = document.querySelector('.js-time');
const DAY_DOM = document.querySelector('.js-day');
const DAYS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const NOWDATE = new Date();

function getTime() {
  let hour = NOWDATE.getHours(),
    min = NOWDATE.getMinutes(),
    second = NOWDATE.getSeconds();
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  second = second < 10 ? `0${second}` : second;
  TIME_DOM.innerHTML = `${hour}:${min}:${second}`;
}

function getDay() {
  const year = NOWDATE.getFullYear();
  const month = NOWDATE.getMonth();
  const date = NOWDATE.getDate();
  const dayLabel = NOWDATE.getDay();
  DAY_DOM.innerHTML = `${year}년 ${month+1}월 ${date}일 ${DAYS[dayLabel]}`
}

function init() {
  setInterval(getTime, 1000);
  getDay();
}
init();

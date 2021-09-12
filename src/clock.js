const TIME_DOM = document.querySelector('.js-time');
const DAY_DOM = document.querySelector('.js-day');
const DAYS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

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

function getDay() {
  const nowDay = new Date();
  const year = nowDay.getFullYear();
  const month = nowDay.getMonth();
  const date = nowDay.getDate();
  const dayLabel = nowDay.getDay();
  DAY_DOM.innerHTML = `${year}년 ${month+1}월 ${date}일 ${DAYS[dayLabel]}`
}

function init() {
  setInterval(getTime, 1000);
  getDay();
}
init();

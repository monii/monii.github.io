const COORDS = document.querySelector('.js-city');
const WEATHER = document.querySelector('.js-temperatures');
const HEADER = document.querySelector('header');
const API_KEY = '711aab91dc475287f78c916e62cd45f8';
const KEY_COORDS = 'coords';
const KEY_CITY = 'city';

function saveCoordsLs(obj) {
  localStorage.setItem(KEY_COORDS, JSON.stringify(obj));
}

function saveCityLs(city) {
  localStorage.setItem(KEY_CITY, city);
}

function handleSuccessGeo(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coordsObj = { latitude, longitude };
  saveCoordsLs(coordsObj);
  getWeather(latitude, longitude);
}

function handleFailGeo() {
  alert("Can't access current position");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(handleSuccessGeo, handleFailGeo);
}

function getWeatherIcon(weather, weatherId) {
  const i = document.createElement('i');
  const parseWeatherId = weatherId.toString();
  if (parseWeatherId.startsWith('2')) {
    i.className = 'fas fa-bolt js-weather';
    HEADER.appendChild(i);
  } else if (parseWeatherId.startsWith('3')) {
    i.className = 'fas fa-water js-weather';
    HEADER.appendChild(i);
  } else if (parseWeatherId.startsWith('5')) {
    i.className = 'fas fa-cloud-rain js-weather';
    HEADER.appendChild(i);
  } else if (parseWeatherId.startsWith('6')) {
    i.className = 'fas fa-snowflake js-weather';
    HEADER.appendChild(i);
  } else if (parseWeatherId.startsWith('7')) {
    i.className = 'fas fa-smog js-weather';
    HEADER.appendChild(i);
  } else if (weatherId > 800) {
    i.className = 'fas fa-cloud js-weather';
    HEADER.appendChild(i);
  } else {
    i.className = 'fas fa-sun js-weather';
    HEADER.appendChild(i);
  }
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      saveCityLs(json.name);
      getWeatherIcon(json.weather[0].main, json.weather[0].id);
      COORDS.innerHTML = json.name;
      WEATHER.innerHTML = `${json.main.temp}℃`;
    });
}

function infoLoad() {
  const getcoords = localStorage.getItem(KEY_COORDS);
  if (getcoords !== null) {
    const parseCoords = JSON.parse(getcoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  } else {
    askCoords();
  }
}

function init() {
  infoLoad();
}
init();

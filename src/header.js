const COORDS = document.querySelector('.js-city');
const WEATHER = document.querySelector('.js-weather');
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

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json.name);
      console.log(json.main.temp);
      saveCityLs(json.name);
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

# :seedling: 바닐라JS 챌린지 

- 기간 : 2021.02.08 ~ 2021.02.20
- 챌린지 참여 사이트 : 노마드 코더-바닐라 JS로 크롬 앱 만들기 (https://nomadcoders.co/)

### :date: 2주동안 스케쥴
:heavy_check_mark:1일차 : javaScript대한 기본 지식(:book: #1.1 ~ #1.5) <br/>
:heavy_check_mark:2일차 : 변수 및 Array(:book:#1.6 ~ #1.10) <br/>
:heavy_check_mark:3일차 : javaScript Function (:book:#2.1 ~ #2.4) <br/>
:heavy_check_mark:4일차 : javaScript if/else(:book:#2.5 ~ #2.7) <br/>
:heavy_check_mark:5일차 : local storage에 값 저장(:book:#3.1 ~ #3.2) <br/>
:heavy_check_mark:6일차 : 지금까지 배운 것을 활용 해서 todo list 만들기(:book:#3.3 ~ #3.4) <br/>
:heavy_check_mark:7일차 : 휴일 :partying_face:<br/>
:heavy_check_mark:8,9일차 : 변수 및 Array(:book:#3.5 ~ #3.7) <br/>
:heavy_check_mark:10일차 : 복습 <br/>
:heavy_check_mark:11,12일차 : 복습 <br/>
:heavy_check_mark:13,14일차 : 복습(마지막 과제 momentum클론) <br/>

:red_circle: 자세한 스케쥴 및 강의 내용은 노마드 코더 사이트에서 보실 수 있습니다! <br/>
:red_circle: [과제 codeSandeBox](https://codesandbox.io/dashboard/drafts?workspace=6cc00266-fd13-495b-a7fb-310abec1080e)

-----------------
### :clap: 결과

:point_right: https://monii.github.io/

-----------------

### :computer: 개발환경/기능
- 개발언어: javaScript,HTML5,CSS <br/>
- IDE: VScode <br/>
- API: https://openweathermap.org/current#format <br/>
```
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      saveCityLs(json.name);
      COORDS.innerHTML = json.name;
      WEATHER.innerHTML = `${json.main.temp}℃`;
    });
}
```
- 기능 <br/>
1. 이름, 오늘 할일, 완료한 일을 저장! <br/>
2. 위치 기반으로 날씨와 기온 표시<br/>

--------------------------
  
### :pushpin: ToDo Update
1. ~~전체적인 CSS수정하기~~









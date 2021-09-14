const CALENDAR = document.querySelector('#js-calendar');
const THIS_MONTH = document.querySelector('#js-title-month');
const THIS_DAYS = document.querySelector('#js-days');

function showCalendar() {
    const currenetYear = NOWDATE.getFullYear();
    const currentMonth = NOWDATE.getMonth();
  
    //이번 달
    THIS_MONTH.innerHTML = currentMonth +1 < 10 ? `0${currentMonth+1} 월` : `${currentMonth+1}월`;
  
    //이번달 시작일/마지막일
    const startDateObj = new Date(currenetYear, currentMonth,1);
    const endDateOdjb = new Date(currenetYear, currentMonth + 1, 0);
    console.log(startDateObj);
    console.log(endDateOdjb);
  
    //시작일
     const startDay = startDateObj.getDay();
     //마지막일/요일
     const endDate = endDateOdjb.getDate();
     const endDay = endDateOdjb.getDay();

     const prevDays = Array(startDay);
     const currenetDates = [...Array(endDate + 1).keys()].slice(1);
     const endDays = Array(endDay);
    
     //시작날 전 공백칸
     for(let i = 0; i < prevDays.length; i++) {
         const div = document.createElement('div');
         div.className = "date";
         THIS_DAYS.appendChild(div);
     }
     for(let i = 0; i < currenetDates.length; i++) {
         const div = document.createElement('div');
         div.className = "date";
         div.innerText = currenetDates[i];
         THIS_DAYS.appendChild(div);
     }
     //마지막날 이후 공백
     for(let i = 0; i < endDays.length; i++) {
        const div = document.createElement('div');
        div.className = "date";
        THIS_DAYS.appendChild(div);
     }
}

function init() {
    const savedName = localStorage.getItem(KEY_NAME);
    if(saveName !== null) {
        showCalendar();
    }
}

init();
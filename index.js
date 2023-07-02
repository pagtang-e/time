const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const MicroModal = require('micromodal');
const MicroModalSubmit1= document.getElementById('submit-Modal-1')
let coordinates;
let timer = document.querySelector('H1');
let timezoneLocal =document.querySelector('p');
let Date = document.querySelector('h2');
let city;
let newTimezone;
const startTimeLocalInterval = setInterval(startTimeLocal, 1000);

dayjs.extend(utc)
dayjs.extend(timezone)
MicroModal.init();


getLocalTime();

function getLocalTime(){
timezoneLocal.innerText = dayjs.tz.guess();
startTimeLocal()
}

function startTimeLocal(){

  timer.innerText= dayjs().format('HH:mm');
  Date.innerText = dayjs().format("dddd, DD of MMMM YYYY")



}

MicroModalSubmit1.addEventListener('click',() =>{

  city = document.getElementById('city').value;

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city} &key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE`)
  .then(res=> res.json())
  .then(data =>  GetCoordinates(data))
  
  function GetCoordinates(data){
    coordinates = data.results[0].geometry.location.lat+","+data.results[0].geometry.location.lng ;
   
    getTimezone()
  }

  function getTimezone(){
      fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates}&timestamp=${dayjs().unix()}&key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE`)
      .then(res => res.json())
      .then(data=> setNewTimezone(data))

      function setNewTimezone(data){
        newTimezone=data.timeZoneId
        
        getChosenTime()
      }

  }





})


function getChosenTime(){
  clearInterval(startTimeLocalInterval);
 
  timezoneLocal.innerText = newTimezone;
  startTimeChosen()
  function startTimeChosen(){
      timer.innerText= dayjs().tz(newTimezone).format('HH:mm:ss');
      Date.innerText = dayjs().tz(newTimezone).format("dddd, DD of MMMM YYYY")
  setTimeout(startTimeChosen, 1000);
  
  
  }}
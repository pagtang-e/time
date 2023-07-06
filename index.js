const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const ordinal = require('ordinal');
const MicroModal = require('micromodal');
const indicator = require('ordinal/indicator');
const MicroModalSubmit1= document.getElementById('submit-Modal-1')
dayjs.extend(utc)
dayjs.extend(timezone)
MicroModal.init();

let coordinates;
let timer = document.querySelector('H1');
let timezoneLocal =document.querySelector('.TimeZone');
let Date = document.querySelector('h2');
let city;
let Timezone = dayjs.tz.guess();
let startTimeLocalInterval;
let secondRotation;
let minuteRotation;
let HourRotation;
let minuteHand = document.querySelector('.hand.minute')
let secondHand = document.querySelector('.hand.second')
let hourHand = document.querySelector('.hand.hour')



getLocalTime();
getLocalTimeAnalog()


function getLocalTime(){
  startTimeLocalInterval = setInterval(startTimeLocal, 1000);
timezoneLocal.innerText = Timezone;
startTimeLocal()

}
function getLocalTimeAnalog(){
  startTimeLocalAnalog()
  startTimeLocalInterval = setInterval(startTimeLocalAnalog, 1000);
timezoneLocal.innerText = dayjs.tz.guess();


}

function startTimeLocalAnalog(){
secondRotation = 360/60*dayjs().second();
minuteRotation = 360/60*dayjs().minute()
HourRotation = 360/12*(dayjs().hour()%12)+(30 * dayjs().minute()/60);
HourRotation = (Math.round(HourRotation * 10) / 10);
hourHand.style.rotate = HourRotation+"deg"  
minuteHand.style.rotate = minuteRotation+'deg'  
secondHand.style.rotate = secondRotation+'deg'




}

function startTimeLocal(){

  timer.innerText= dayjs().tz(Timezone).format('HH:mm');
  console.log(Timezone);
  Date.innerText = dayjs().tz(Timezone).format('dddd, D') + indicator(dayjs().tz(Timezone).date()) + dayjs().tz(Timezone).format(' of MMMM YYYY')



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
        Timezone=data.timeZoneId
        
        clearInterval(startTimeLocalInterval);
        getLocalTime()
      }

  }
})




  let clockType = document.getElementById('clockType')
  clockType.addEventListener('click', ()=>{
    if(clockType.checked == true){
      console.log('fjdshkjf');
    }
  })
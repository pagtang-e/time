const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const advancedFormat = require('dayjs/plugin/advancedFormat');

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)


import { Timezone} from './timezone.mjs'

let timer = document.querySelector('H1');
let timezoneLocal =document.querySelector('.TimeZone');
let Date = document.querySelector('h2');
let city;
export let startTimeLocalInterval;

let secondRotation;
let minuteRotation;
let HourRotation;
let minuteHand = document.querySelector('.hand.minute')
let secondHand = document.querySelector('.hand.second')
let hourHand = document.querySelector('.hand.hour')
const formatCheck = document.getElementById('hr12Format')

export function getLocalTimeDigital(){
    startTimeLocalInterval = setInterval(startTimeLocalDigital, 1000);
  timezoneLocal.innerText = Timezone;
  startTimeLocalDigital()
  
  }

  function startTimeLocalDigital(){
    if(formatCheck.checked){
      timer.innerText= dayjs().tz(Timezone).format('hh:mm a');
    }
    else{
      timer.innerText= dayjs().tz(Timezone).format('HH:mm');
    }
    
    formatCheck.addEventListener("change", ()=>{

      if(formatCheck.checked){
        timer.innerText= dayjs().tz(Timezone).format('hh:mm a');
      }
      else{
        timer.innerText= dayjs().tz(Timezone).format('HH:mm');
      }

    })
   

    Date.innerText = dayjs().tz(Timezone).format('dddd, Do of MMMM YYYY')
  
  }

 export function getLocalTimeAnalog(){
    startTimeLocalAnalog()
    startTimeLocalInterval = setInterval(startTimeLocalAnalog, 1000);
  timezoneLocal.innerText = Timezone;
  
  
  }
  
  function startTimeLocalAnalog(){
  secondRotation = 360/60*dayjs().tz(Timezone).second();
  minuteRotation = 360/60*dayjs().tz(Timezone).minute()
  HourRotation = 360/12*(dayjs().tz(Timezone).hour()%12)+(30 * dayjs().tz(Timezone).minute()/60);
  HourRotation = (Math.round(HourRotation * 10) / 10);
  hourHand.style.rotate = HourRotation+"deg"  
  minuteHand.style.rotate = minuteRotation+'deg'  
  secondHand.style.rotate = secondRotation+'deg'
  
  
  
  
  }
  
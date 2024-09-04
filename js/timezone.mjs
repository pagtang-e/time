const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');


dayjs.extend(utc)
dayjs.extend(timezone)

import { clockType } from './index.mjs';
import{ getLocalTimeDigital, startTimeLocalInterval, getLocalTimeAnalog } from './digitalClock.mjs';
export let Timezone = dayjs.tz.guess();


let Longitude;
let Latitude;
let sunriseTime;
let sunsetTime;
const sunriseTimeElement = document.getElementById('sunriseTime')
const sunsetTimeElement = document.getElementById('sunsetTime')
const city = document.getElementById('city')
const formatCheck = document.getElementById('hr12Format')


  navigator.geolocation.getCurrentPosition(
    
    (position) => {
      
       Latitude = position.coords.latitude;
      Longitude = position.coords.longitude;
      

      getSunsetAndSunrise()
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${Latitude},${Longitude}&key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE&result_type=political|country`)
      .then(res => res.json())
      .then(data => console.log(data))
    })
  

 function getSunsetAndSunrise(){
  fetch(`https://api.sunrise-sunset.org/json?lat=${Latitude}&lng=${Longitude}&formatted=0`)
  .then(res => res.json())
  .then(data => getTimes(data))
  
  function getTimes(data){

   
    formatCheck.addEventListener("change", ()=>{

      if(formatCheck.checked){
        sunriseTime = dayjs(data.results.sunrise).tz(Timezone).format('hh:mm a');
        sunsetTime = dayjs(data.results.sunset).tz(Timezone).format('hh:mm a');
      }
      else{
        sunriseTime = dayjs(data.results.sunrise).tz(Timezone).format('HH:mm');
        sunsetTime = dayjs(data.results.sunset).tz(Timezone).format('HH:mm');
      }

      sunriseTimeElement.innerText = sunriseTime;
      sunsetTimeElement.innerText = sunsetTime;
    })

    if(formatCheck.checked){
      sunriseTime = dayjs(data.results.sunrise).tz(Timezone).format('hh:mm a');
      sunsetTime = dayjs(data.results.sunset).tz(Timezone).format('hh:mm a');
    }
    else{
      sunriseTime = dayjs(data.results.sunrise).tz(Timezone).format('HH:mm');
      sunsetTime = dayjs(data.results.sunset).tz(Timezone).format('HH:mm');
    }
    
   sunriseTimeElement.innerText = sunriseTime;
   sunsetTimeElement.innerText = sunsetTime;
  }
 

 }


export function getTimezone(){
 

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city.value} &key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE`)
  .then(res=> res.json())
  .then(data =>  GetCoordinates(data))
  
  function GetCoordinates(data){
    
    Longitude = data.results[0].geometry.location.lng ;
    Latitude = data.results[0].geometry.location.lat ;
   
    getTimezone()
   
  }

  function getTimezone(){
      fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${Latitude +','+Longitude}&timestamp=${dayjs().unix()}&key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE`)
      .then(res => res.json())
      .then(data => setNewTimezone(data))

      function setNewTimezone(data){
        Timezone=data.timeZoneId
        
        clearInterval(startTimeLocalInterval);
        if(clockType.checked == true){
      
          getLocalTimeAnalog()
          
    
        }
        else{
          getLocalTimeDigital()
        }

        
        getSunsetAndSunrise()

      }


      }

     

  }

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



export function getTimezone(city , callback){
 

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city} &key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE`)
  .then(res=> res.json())
  .then(data =>  GetCoordinates(data))
  
  function GetCoordinates(data){
    Longitude = data.results[0].geometry.location.lat+","+data.results[0].geometry.location.lng ;
    Latitude = data.results[0].geometry.location.lat+","+data.results[0].geometry.location.lat ;
   
    getTimezone()
  }

  function getTimezone(){
      fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${Longitude}&timestamp=${dayjs().unix()}&key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE`)
      .then(res => res.json())
      .then(data=> setNewTimezone(data))

      function setNewTimezone(data){
        Timezone=data.timeZoneId
        
        clearInterval(startTimeLocalInterval);
        if(clockType.checked == true){
      
          getLocalTimeAnalog()
          
    
        }
        else{
          getLocalTimeDigital()
        }
      }
      }

  }

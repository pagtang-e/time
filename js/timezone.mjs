const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc)
dayjs.extend(timezone)

export let Timezone = dayjs.tz.guess();

export function getTimezone(){
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
}
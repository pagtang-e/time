const dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc)
dayjs.extend(timezone)

let timer = document.querySelector('H1');
let timezoneLocal =document.querySelector('p');
let Date = document.querySelector('h2');


timezoneLocal.innerText = dayjs.tz.guess();
startTime()
function startTime(){
    timer.innerText= dayjs().format('HH/mm/ss');
    Date.innerText = dayjs().format("dddd, DD of MMMM YYYY")
setTimeout(startTime, 1000);


}
let coordinates;
fetch('https://maps.googleapis.com/maps/api/geocode/json?address=tychy &key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE')
.then(res=> res.json())
.then(data => GetCoordinates(data) )

function GetCoordinates(data){
  coordinates = data.results[0].geometry.location.lat+","+data.results[0].geometry.location.lng ;
  console.log(coordinates);
  getTimezone()
}
function getTimezone(){
    fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates}&timestamp=${dayjs().unix()}&key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE`)
    .then(res => res.json())
    .then(data=> console.log(data.timeZoneId))
}
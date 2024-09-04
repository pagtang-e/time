const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const MicroModal = require('micromodal');
let secondHandCheck = document.querySelector('#seconds')
let secondHand = document.querySelector('.hand.second')
const MicroModalSubmit1= document.getElementById('submit-Modal-1')
const hr12FormatToggle = document.getElementById('hr12Format');
const sunriseTime = document.querySelector('#sunriseTime');
dayjs.extend(utc)
dayjs.extend(timezone)
MicroModal.init();
import {getTimezone} from './timezone.mjs'
import{getLocalTimeDigital, getLocalTimeAnalog} from './digitalClock.mjs'

export  let clockType = document.getElementById('clockType')



secondHandCheck.addEventListener("change", ()=>{
   if(secondHandCheck.checked){
    secondHand.style.opacity = "100%"
   }
   else{
    secondHand.style.opacity = "0"
   }
})



getLocalTimeDigital();







MicroModalSubmit1.addEventListener('click',getTimezone)




 
  clockType.addEventListener('click', ()=>{
    if(clockType.checked == true){
      
      getLocalTimeAnalog()
      document.querySelector('.digital').style.display='none'
      document.querySelector('.analog').style.display='block'
      sunriseTime.classList.add('analogSunTime')
      document.querySelector('#sunsetTime').classList.add('analogSunTime')
    }
    else{
      document.querySelector('.digital').style.display='block'
      document.querySelector('.analog').style.display='none'
      sunriseTime.classList.remove('analogSunTime')
      document.querySelector('#sunsetTime').classList.remove('analogSunTime')
    }
  })
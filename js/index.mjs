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
import {getTimezone} from './timezone.mjs'
import{getLocalTimeDigital, getLocalTimeAnalog} from './digitalClock.mjs'

export  let clockType = document.getElementById('clockType')







getLocalTimeDigital();







MicroModalSubmit1.addEventListener('click',getTimezone)




 
  clockType.addEventListener('click', ()=>{
    if(clockType.checked == true){
      
      getLocalTimeAnalog()
      document.querySelector('.digital').style.display='none'
      document.querySelector('.analog').style.display='block'

    }
    else{
      document.querySelector('.digital').style.display='block'
      document.querySelector('.analog').style.display='none'
    }
  })
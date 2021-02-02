var stopHoursss = 0
var stopMinsss = 0
var stopSecsss = 0
var stopMilisecsss = 0
var stopHour = document.getElementById('stopHours')
var stopMins = document.getElementById('stopMins')
var stopSec = document.getElementById('stopSec')
var stopMilisec = document.getElementById('stopMili')
var interval;

function stopTimer(){
    stopMilisecsss++
    stopMilisec.innerHTML = stopMilisecsss
    if (stopMilisecsss == 100){
        stopSecsss++
        stopSec.innerHTML = stopSecsss
        stopMilisecsss = 0
        if(stopSecsss == 60){
            stopMinsss++
            stopMins.innerHTML = stopMinsss
            stopSecsss = 0
        }
        
    }
}

function stopStart (){
    document.getElementById('start').style.display = 'none'
    interval = setInterval(stopTimer,10)
}

function StopPause(){
    document.getElementById('start').style.display = 'inline-block'

    clearInterval(interval)
}
function stopRest(){
    stopHoursss="00"
    stopMinsss="00"
    stopSecsss="00"
    stopMilisecsss="00"

    stopHour.innerHTML = stopHoursss
    stopMins.innerHTML=stopMinsss
    stopSec.innerHTML=stopSecsss
    stopMilisec.innerHTML=stopMilisecsss


}

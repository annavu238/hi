 var countDownDate = new Date('Jan 1,2025')
 setInterval("runClock()",1000)

 function runClock(){
    // console.log('abc')
    var now =new Date()
    var timeDistance = countDownDate - now
    console.log(now-countDownDate)
    var days =Math.floor(timeDistance/1000/60/60/24) 
    var hours = Math.floor((timeDistance%(1000*60*60*24))/1000/60/60)
    var minutes = Math.floor((timeDistance%(1000*60*60))/1000/60)
    var seconds = Math.floor((timeDistance%(1000*60))/1000)

    console.log('days:',days)
    console.log('hours:',hours)
    console.log('minutes:',minutes)

    document.getElementById('days').innerHTML =days;
    document.getElementById('hrs').innerHTML =hours;
    document.getElementById('mins').innerHTML =minutes;
    document.getElementById('secs').innerHTML =seconds;

    if(timeDistance<0){
        document.getElementById('countdown').innerHTML='expired'
    }
 }
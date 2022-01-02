const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop');
breakDuration=5
workDuration=25
seconds=60
breakcount=0
workMinutes=workDuration-1
breakMinutes=breakDuration-1
let timer
let minutetimer
let RemainingTime=()=>{
  seconds=seconds-1
  if(seconds===0){
    workMinutes=workMinutes-1
    if(workMinutes===-1){
      if(breakcount%2===0){
        workMinutes=breakMinutes
        breakcount++
      }
      else{
      workMinutes=breakMinutes
      breakcount++
      }
    }
    seconds=60

  }
}

  

 
// const clickbtn=function (){
startButton.addEventListener('click',()=>{
  timer=setInterval(function(){
    seconds--
     RemainingTime
     document.querySelector('.seconds').innerHTML=`${seconds}`
    if(seconds<=0)seconds=60}, 1000);
    document.querySelector('.minutes').innerHTML=`${workMinutes}`
    
    minutetimer=setInterval(function(){
      workMinutes--
       RemainingTime
       document.querySelector('.minutes').innerHTML=`${workMinutes}`
      if(seconds<=0)seconds=60}, 60*1000);
    
      

  console.log(workMinutes)
  console.log(seconds)
console.log('clicked')
console.log(timer)
// document.querySelector('.minutes').innerHTML=`${workMinutes}`
// document.querySelector('.seconds').innerText=seconds

})
// clickbtn()
stopButton.addEventListener('click',()=>{
  clearInterval(timer)
    document.querySelector('.seconds').innerHTML=`00`
  document.querySelector('.minutes').innerHTML=`25 `
  

  })

const pomodoroTimer = document.querySelector('#clockdiv');
const minutesbtn=document.querySelector('minutes')
const secondsbtn=document.querySelector('seconds')
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');

// START
startButton.addEventListener('click', () => {
  toggleClock();
})

// PAUSE
pauseButton.addEventListener('click', () => {
  toggleClock();
})

// STOP
stopButton.addEventListener('click', () => {
  toggleClock(true);
})
let isClockRunning = false;
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;
let breakSessionDuration = 300;
const toggleClock = (reset) => {
    if (reset) {
      // STOP THE TIMER
    } else {
      if (isClockRunning === true) {
        clearInterval(clockTimer);
        // PAUSE THE TIMER
        isClockRunning = false;
      } else {
        // START THE TIMER
        isClockRunning = true;
        clockTimer = setInterval(() => {
            // decrease time left / increase time spent
            currentTimeLeftInSession--;
            displayCurrentTimeLeftInSession();
        }, 1000)
      }
    }
  }
  const displayCurrentTimeLeftInSession = () => {
    const secondsLeft = currentTimeLeftInSession;
    let result = '';
    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600);
    // add leading zeroes if it's less than 10
    function addLeadingZeroes(time) {
      return time < 10 ? `0${time}` : time
    }
    if (hours > 0)
    //  result += `${hours}:`
    // result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
    // // pomodoroTimer.innerText = result.toString();
  
pomodoroTimer.innerHTML=` <div class="clock-wrapper" style="background: rgb(47, 52, 56)">
<span class="minutes">${addLeadingZeroes(minutes)}</span>
<div class="smalltext">
  <p>Minutes</p>
</div>
</div>
<div class="clock-wrapper" style="background: rgb(47, 52, 56)">
<span class="seconds"> ${addLeadingZeroes(seconds)}</span>
<div class="smalltext">
  <p>Seconds</p>
</div>`}
const timer = document.querySelector('.timer');
const btnPlay = document.querySelector('.btn-play');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');

const time = timer.innerText.split(':');
let seconds = time[2];
let minutes = time[1];
let hours = time[0];

let timerInterval = null;

function stopWatch(){
    seconds++;

    if (+seconds < 10)
        seconds = "0" + seconds;
    if (minutes < 10 && typeof minutes == 'number')
        minutes = "0" + minutes;
    if (hours < 10 && typeof hours == 'number')
        hours = "0" + hours;
    

    if (seconds === 60){
        seconds = 0;
        minutes++;
        if (minutes === 60){                
            minutes = 0;
            hours++;
        }
    }    

    timer.innerText = `${hours}:${minutes}:${seconds}`;
}

btnPlay.addEventListener('click', ()=>{
    btnPause.style.display = "block";
    btnPlay.style.display = "none";

    timerInterval = window.setInterval(stopWatch, 1000);
});

btnPause.addEventListener('click', ()=>{
    btnPause.style.display = "none";
    btnPlay.style.display = "block";

    window.clearInterval(timerInterval);
});

btnStop.addEventListener('click', ()=>{
    seconds = "00";
    minutes = "00";
    hours = "00";

    btnPause.style.display = "none";
    btnPlay.style.display = "block";

    window.clearInterval(timerInterval);
    timer.innerText = `${hours}:${minutes}:${seconds}`;
})
// Setting the timer
let secondsElapsed = 0;
function runTimer(){
    let timerInterval = setInterval(()=>{
        if(isPaused){
            return
        } else if(endGame && secondsElapsed >= endGame){
            clearInterval(timerInterval);
            alert(`You ended your game of ${endGame} seconds with a score of ${totalScore}`)
            setTimeout(()=>{
                window.location.href = '/packageHandling/index.html';
       }, 1000)
        }
        else {
            secondsElapsed += 1;
            document.querySelector('.span-timer').innerText = secondsElapsed;
        }
    },1000)
}
runTimer();


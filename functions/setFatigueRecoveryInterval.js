function setFatigueRecoveryInterval(fatigueRecoveryRate){
    fatigueRecoveryRate = fatigue.fatigueRecoveryRate;
    let interval = setInterval(()=>{
        if(fatigue.fatigue <= 0){ 
            return;
        } else {
            fatigue.fatigue -= 1;
            document.querySelector('.span-fatigue').innerText = fatigue.fatigue;
        }
    }, fatigueRecoveryRate)
    setTimeout(()=>{
clearInterval(interval);
setFatigueRecoveryInterval(fatigueRecoveryRate);
    },1000);
}
function collectCurrentGameStatisticsAndDisplay(score, misloads, boxesSorted, upgradeCounter, timePlayed, maxStamina, fatigueRecoveryRate){
    
    document.querySelector('.span-max-stamina').innerText = maxStamina;
    document.querySelector('.span-fatigue-recovery-rate').innerText = `1 fatigue per ${fatigueRecoveryRate/1000} seconds.`;
    document.querySelector('.span-total-score').innerText = score;
    document.querySelector('.span-misloads').innerText = misloads;
    document.querySelector('.span-packages-scanned').innerText = boxesSorted;
    document.querySelector('.span-upgrades').innerText = upgradeCounter;
    document.querySelector('.span-time-played').innerText = timePlayed;
    }
    
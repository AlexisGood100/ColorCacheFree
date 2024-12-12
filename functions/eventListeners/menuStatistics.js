document.querySelector('.h2-game-statistics').addEventListener('click', ()=>{
    if(document.querySelector('.div-game-statistics').classList.contains('hide')){
        collectCurrentGameStatisticsAndDisplay(totalScore, misloads, boxesSorted, upgradeCounter, secondsElapsed, stamina.maxStamina, fatigueRecovery);
        document.querySelector('.div-game-statistics').classList.remove('hide');
        document.querySelector('.div-container-upgrade-store').classList.add('hide');
        document.querySelector('.div-container-misload-log').classList.add('hide');
    } else {
        document.querySelector('.div-game-statistics').classList.add('hide')
    }
})


document.querySelector('.h2-color-matches').addEventListener('click', ()=>{
    if(document.querySelector('.div-color-matches').classList.contains('hide')){
        collectCurrentGameStatisticsAndDisplay(totalScore, misloads, boxesSorted, upgradeCounter, secondsElapsed, stamina.maxStamina, fatigueRecovery);
        document.querySelector('.div-game-statistics').classList.add('hide');
        document.querySelector('.div-container-upgrade-store').classList.add('hide');
        document.querySelector('.div-container-misload-log').classList.add('hide');
        document.querySelector('.div-color-matches').classList.remove('hide');
        
    } else {
        document.querySelector('.div-color-matches').classList.add('hide')
    }
})

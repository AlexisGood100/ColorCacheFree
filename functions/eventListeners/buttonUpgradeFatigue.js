function upgradeFatigueRecovery(amount){
    fatigue.fatigueRecoveryRate-= amount;
}
document.querySelector('.btn-upgrade-fatigue').addEventListener('click', ()=>{
    if(credits >= 30){
    upgradeCounter += 1;
    upgradeFatigueRecovery(10);
    credits -= 20;
    document.querySelector('.span-current-credits').innerText = credits;
} else {
    alert('Insufficient funds')
}
})

// This function uses the upgradeFatigueRecovery variable in the main script
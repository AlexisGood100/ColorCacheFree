function upgradeWaterStaminaRecovery(amount){
    waterRecoveryAmount += amount;
}
document.querySelector('.btn-upgrade-stamina-recovery').addEventListener('click', ()=>{
    if(credits >= 30){
        upgradeCounter += 1;
        upgradeWaterStaminaRecovery(5);
        credits -= 30;
        document.querySelector('.span-current-credits').innerText = credits;
    } else {
        alert('Insufficient funds')
    }
})

// This function uses the waterRecoveryAmount variable in the main script
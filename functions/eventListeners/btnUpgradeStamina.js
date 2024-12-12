function upgradeMaxStamina(stamina, amount){
    stamina.maxStamina += amount;
 }
 document.querySelector('.btn-upgrade-stamina').addEventListener('click', ()=>{
    if(credits >= 10){
        upgradeCounter += 1;
        upgradeMaxStamina(stamina, 10);
        credits -= 10;
        document.querySelector('.span-current-credits').innerText = credits;
    }
 })
 
 document.querySelector('.btn-drink-water').addEventListener('click', ()=>{
        if(stamina.stamina >= stamina.maxStamina){
            return;
        } else {
            
            document.querySelector('.span-current-credits').innerText = credits;
            handleStamina(stamina, 'increase', waterRecoveryAmount);
            document.querySelector('.span-stamina').innerText = stamina.stamina;
        }
 })

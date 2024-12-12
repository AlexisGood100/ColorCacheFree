function handleStamina(stamina, decreaseOrIncrease, amountToIncreaseOrDecrease){
    if(decreaseOrIncrease === 'decrease'){
        if(stamina.stamina <= 0){
            return
        } else {
            stamina.stamina -= amountToIncreaseOrDecrease
        }
        
    } else if(decreaseOrIncrease === 'increase'){
        stamina.stamina += amountToIncreaseOrDecrease
    }
    }


 
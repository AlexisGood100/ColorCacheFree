function handleFatigue(fatigue, decreaseOrIncrease, amountToIncreaseOrDecrease){
    if(decreaseOrIncrease === 'decrease'){
        fatigue.fatigue -= amountToIncreaseOrDecrease
        console.log(fatigue)
    } else if(decreaseOrIncrease === 'increase'){
        fatigue.fatigue += amountToIncreaseOrDecrease
    }
    }
    
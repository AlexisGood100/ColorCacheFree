function createArrayOfOddOrEvenNumbersWithinARange(oddOrEven, range){
    let arrayOfNumbers = [];
    
    if(oddOrEven === 'odd'){
        for(let i = 0; i < range ;i++){
            if(i % 2 === 1){
                arrayOfNumbers.push(i);
            }
        }
    }
    if(oddOrEven === 'even'){
        for(let i = 0; i < range ;i++){
            if(i % 2 === 0){
                arrayOfNumbers.push(i);
            }
        }
    }

        return arrayOfNumbers
    }
function insertMisloadElementIntoMisloadContainer(packageRouteNumber, misloadedRouteNumber){

    let mistakeInfo = document.createElement('li')
    
    let pTime = Date.now().toString()
    
    mistakeInfo.innerText = `${packageRouteNumber} was misloaded to ${misloadedRouteNumber} at ${pTime}.`
    
    document.querySelector('.ul-misload-container').appendChild(mistakeInfo);
    
    
    }
    
function createDisplayForPackage(package, topOrBottom) {

    let div = document.createElement('div');
    div.draggable = true
    // condition for the medieval fantasy color styles
    if(startingColors[0].CssStringValue === medievalFantasyColorsArray[0].CssStringValue){ 
        div.classList.add('sword-container');
        let blade = document.createElement('div');
        blade.classList.add('blade');
        let guard = document.createElement('div');
        guard.classList.add('guard')
        let handle = document.createElement('div');
        handle.classList.add('handle');
    div.appendChild(blade);
    div.appendChild(guard);
    div.appendChild(handle)
    }
// condition for under the sea colors style
    if(startingColors[0].CssStringValue === underWaterSeaColors[0].CssStringValue){ 
        div.classList.add('fish');
        let fin = document.createElement('div');
        fin.classList.add('fin');
        let eye = document.createElement('div');
        eye.classList.add('eye')
        let tail = document.createElement('div');
        tail.classList.add('tail');
    div.appendChild(fin);
    div.appendChild(eye);
    div.appendChild(tail);
    }
   //condition for thanksgiving package style
    if(startingColors[0].CssStringValue === thanksgivingColorsArray[0].CssStringValue){ 
        div.classList.add('turkey');
        let wing = document.createElement('div');
        wing.classList.add('wing');
        let wingRight = document.createElement('div');
        wingRight.classList.add('wing-right')
      div.appendChild(wing);
      div.appendChild(wingRight);
    div.appendChild(wing);
    div.appendChild(wingRight);
 
    }

   
   
    


  
    
    
    if(levelTwo === true){
        div.classList.add('div-package-level-two');
    } else if(levelOne === true){
        div.classList.add('div-package');
        if(startingColors[0].CssStringValue === medievalFantasyColorsArray[0].CssStringValue){ 
            div.classList.remove('div-package');
        }
      
       
    } else if(levelThree === true){
       
        div.style = `--i: ${Math.floor(Math.random() * 30)};`
      
        if(topOrBottom === 'ring-2'){
div.classList.add('ring-2-element');

        }
        if(topOrBottom === 'ring-3'){
            div.classList.add('ring-3-element');
          
        }
        if(topOrBottom === 'ring-4'){
            div.classList.add('ring-4-element');
          
        }
        if(topOrBottom === 'ring-5'){
            div.classList.add('ring-5-element');
          
        }
    }
    if(bossLevel = true){
        div.classList.add('div-package');
    }
    checkForSpecificStyleAndApplyToPackage(div, startingColors) //This function has all the code for the conditions for unique themes to be added to each theme.
 
    let pRouteNum = document.createElement('p')
    let pRouteWeight = document.createElement('p')
    pRouteNum.classList.add('p-route-num')
    if(hardMode === true){
        pRouteNum.classList.add('hide');
    } 
    pRouteNum.innerText = package.routeNumber;
    pRouteWeight.classList.add('hide');
    pRouteNum.classList.add('hide');
    pRouteWeight.innerText = package.weight
    if (package.routeNumber === evenRoute1) {
                currentColor = startingColors[0].color;
                div.style.background = startingColors[0].CssStringValue
       
}

if (package.routeNumber === evenRoute2) {
    
            div.style.background = startingColors[1].CssStringValue
   currentColor = startingColors[1].color;
}
if (package.routeNumber === evenRoute3) {
   
            div.style.background = startingColors[2].CssStringValue
    currentColor = startingColors[2].color;
}
if (package.routeNumber === evenRoute4) {
    
            div.style.background = startingColors[3].CssStringValue
            currentColor = startingColors[3].color;
}

if (package.routeNumber === evenRoute5) {
    
            div.style.background = startingColors[4].CssStringValue
     currentColor = startingColors[4].color;
}
if (package.routeNumber === evenRoute6) {
   
            div.style.background = startingColors[5].CssStringValue
     currentColor = startingColors[5].color;
}
if (package.routeNumber === evenRoute7) {
   
            div.style.background = startingColors[6].CssStringValue
            currentColor = startingColors[6].color;
}
if (package.routeNumber === evenRoute8) {
   
            div.style.background = startingColors[7].CssStringValue
    currentColor = startingColors[7].color;
}
if (package.routeNumber === evenRoute9) {
    
            div.style.background = startingColors[8].CssStringValue
     currentColor = startingColors[8].color;
}
if (package.routeNumber ===  evenRoute10) {
    
            div.style.background = startingColors[9].CssStringValue
            currentColor = startingColors[9].color;
}
if (package.routeNumber ===  evenRoute11) {
   
            div.style.background = startingColors[10].CssStringValue
    currentColor = startingColors[10].color;
}
if (package.routeNumber ===  evenRoute12) {
  
            div.style.background = startingColors[11].CssStringValue
    currentColor = startingColors[11].color;
}
if (package.routeNumber ===  oddRoute1) {
 
            div.style.background = startingColors[12].CssStringValue
            currentColor = startingColors[12].color;
}

if (package.routeNumber ===  oddRoute2) {
    
            div.style.background = startingColors[13].CssStringValue
    currentColor = startingColors[13].color;
}

if (package.routeNumber ===  oddRoute3) {
    
            div.style.background = startingColors[14].CssStringValue
            currentColor = startingColors[14].color;
}
if (package.routeNumber ===  oddRoute4) {
   
            div.style.background = startingColors[15].CssStringValue
    currentColor = startingColors[15].color;
}
if(package.routeNumber ===  oddRoute5) {
   
            div.style.background = startingColors[16].CssStringValue
   currentColor = startingColors[16].color;
}
if(package.routeNumber ===  oddRoute6) {
    
            div.style.background = startingColors[17].CssStringValue
            currentColor = startingColors[17].color;
}
if(package.routeNumber ===  oddRoute7) {
    
            div.style.background = startingColors[18].CssStringValue
    currentColor = startingColors[18].color;
}
if(package.routeNumber ===  oddRoute8) {
   
            div.style.background = startingColors[19].CssStringValue
    currentColor = startingColors[19].color;
}
if(package.routeNumber ===  oddRoute9) {
 
            div.style.background = startingColors[20].CssStringValue
   currentColor = startingColors[20].color;
}
if(package.routeNumber ===  oddRoute10) {

            div.style.background = startingColors[21].CssStringValue
  currentColor = startingColors[21].color;
}
if(package.routeNumber ===  oddRoute11) {
   
            div.style.background = startingColors[22].CssStringValue
   currentColor = startingColors[22].color;
}
if(package.routeNumber ===  oddRoute12) {
  
            div.style.background = startingColors[23].CssStringValue
    currentColor = startingColors[23].color;
}

checkRouteNumberMapToColor(div, package.routeNumber, evenRoute1, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, evenRoute2, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, evenRoute3, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, evenRoute4, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, evenRoute5, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, evenRoute6, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber,  evenRoute7, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, evenRoute8, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, evenRoute9, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber,  evenRoute10, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber,  evenRoute11, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber,  evenRoute12, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, oddRoute1, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber,  oddRoute2, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber,  oddRoute3, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber,  oddRoute4, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber,  oddRoute5, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, oddRoute6, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, oddRoute7, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, oddRoute8, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, oddRoute9, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, oddRoute10, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, oddRoute11, randomGradientsArray)
checkRouteNumberMapToColor(div, package.routeNumber, oddRoute12, randomGradientsArray)

//     div.appendChild(pRouteNum);
    div.appendChild(pRouteWeight);

    if (topOrBottom === 'top') {

        let topTrack = document.querySelector('.div-track-top');
        topTrack.appendChild(div);

    } else if (topOrBottom === 'bot') {

        let botTrack = document.querySelector('.div-track-bottom');
        botTrack.appendChild(div);
    } 
    //end of first level
    else if (topOrBottom === 'div-track-bottom-l2') {

        let botTrack = document.querySelector('.div-track-bottom-l2');
        botTrack.appendChild(div);
    }
    else if (topOrBottom === 'div-track-bottom-2nd-l2') {

        let botTrack = document.querySelector('.div-track-bottom-2nd-l2');
        botTrack.appendChild(div);
    }
    else if (topOrBottom === 'div-track-top-l2') {

        let botTrack = document.querySelector('.div-track-top-l2');
        botTrack.appendChild(div);
    }
    else if (topOrBottom === 'div-track-top-2nd-l2') {

        let botTrack = document.querySelector('.div-track-top-2nd-l2');
        botTrack.appendChild(div);
    }
    else if (topOrBottom === 'div-track-right-side-l2') {

        let botTrack = document.querySelector('.div-track-right-side-l2');
        botTrack.appendChild(div);
    }
    else if (topOrBottom === 'div-track-right-side-2nd-l2') {

        let botTrack = document.querySelector('.div-track-right-side-2nd-l2');
        botTrack.appendChild(div);
    }
    else if (topOrBottom === 'div-track-left-side-l2') {

        let botTrack = document.querySelector('.div-track-left-side-l2');
        botTrack.appendChild(div);
    }
    else if (topOrBottom === 'div-track-left-side-2nd-l2') {

        let botTrack = document.querySelector('.div-track-left-side-2nd-l2');
        botTrack.appendChild(div);
    }
    //end of second track conditions
// start of third level track conditions
else if (topOrBottom === 'ring-2') {

    let botTrack = document.querySelector('.ring-2');
    botTrack.appendChild(div);
}
else if (topOrBottom === 'ring-3') {

    let botTrack = document.querySelector('.ring-3');
    botTrack.appendChild(div);
}
else if (topOrBottom === 'ring-4') {

    let botTrack = document.querySelector('.ring-4');
    botTrack.appendChild(div);
}
else if (topOrBottom === 'ring-5') {

    let botTrack = document.querySelector('.ring-5');
    botTrack.appendChild(div);
}
// End of third level track conditions
// Start of the boss level
else if (topOrBottom === 'boss-track-1') {

    let botTrack = document.querySelector('.boss-track-1');
    botTrack.appendChild(div);
}
else if (topOrBottom === 'boss-track-2') {

    let botTrack = document.querySelector('.boss-track-2');
    botTrack.appendChild(div);
}
else if (topOrBottom === 'boss-track-3') {

    let botTrack = document.querySelector('.boss-track-3');
    botTrack.appendChild(div);
}
else if (topOrBottom === 'boss-track-4') {

    let botTrack = document.querySelector('.boss-track-4');
    botTrack.appendChild(div);
}
else if (topOrBottom === 'boss-track-5') {

    let botTrack = document.querySelector('.boss-track-5');
    botTrack.appendChild(div);
}
// End of the boss level



    


    // packagesTop = document.querySelectorAll('.div-track-top')

    div.addEventListener('click', () => {
        if(stamina.stamina <= 0){
                alert('Drink water to regain stamina. You cannot lift boxes with zero stamina.')
        }
        if (isPaused || stamina.stamina <= 0) {
            return;
        } else {
               document.querySelector('.span-score').classList.add('clicked');
               setTimeout(()=>{
                document.querySelector('.span-score').classList.remove('clicked')
               },2000)
               
                let displayPackageRouteNumber = document.querySelector('.span-current-package-route-number');
                let displayPackageWeight = document.querySelector('.span-current-package-weight');

            if (!packageHeld) {
                pickUpPackage.play();
                stackCount.stackCount += 1;
                stackCount.stackWeight += package.weight;
        

                div.remove();
                
               
                currentPackage = package;

                displayPackageRouteNumber.innerText = package.routeNumber;
                displayPackageWeight.innerText = package.weight;
                if (package.routeNumber % 2 === 0) {
                    evenPackages.splice(package.id, 1);
                    assignIDsToPackages(evenPackages); // if you don't reassign the id's here it will mess up the total box on track count
                    assignIDsToPackages(oddPackages);
                    
                }
                if (package.routeNumber % 2 === 1) {
                    oddPackages.splice(package.id, 1);
                    assignIDsToPackages(oddPackages); // if you don't reassign the id's here it will mess up the total box on track count
                    assignIDsToPackages(evenPackages)
                   
                }
                packageHeld = true;
                handleStamina(stamina, 'decrease', 5);
                handleFatigue(fatigue, 'increase', 5);
               

            } else if (packageHeld && package.routeNumber === parseFloat(document.querySelector('.span-current-package-route-number').innerText)) {
                pickUpPackage.play();
              
                stackCount.stackCount += 1;
                addToStackWeight(parseFloat(document.querySelector('.span-current-package-weight').innerText))

                currentPackage = package;
                
                div.remove()
            
                displayPackageWeight.innerText = package.weight;
                if (package.routeNumber % 2 === 0) {
                    evenPackages.splice(package.id, 1);
                    assignIDsToPackages(evenPackages); // if you don't reassign the id's here it will mess up the total box on track count
                }
                if (package.routeNumber % 2 === 1) {
                    oddPackages.splice(package.id, 1);
                    assignIDsToPackages(oddPackages); // if you don't reassign the id's here it will mess up the total box on track count
                }
                packageHeld = true;
                handleStamina(stamina, 'decrease', 5);
                handleFatigue(fatigue, 'increase', 5);
            }
          
        }
        document.querySelector('.span-stamina').innerText = stamina.stamina;
        document.querySelector('.span-fatigue').innerText = fatigue.fatigue;
        document.querySelector('.span-stack-weight').innerText = stackCount.stackWeight;
        document.querySelector('.span-stack-size').innerText = stackCount.stackCount;
    })

};
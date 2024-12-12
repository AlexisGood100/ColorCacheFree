function createPalletDisplay(pallet, topOrBottom){
    let divPallet = document.createElement('div');
    divPallet.classList.add('div-pallet');
    divPallet.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    
    divPallet.addEventListener('drop', (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        const draggedElement = document.getElementById(data);
        event.target.appendChild(draggedElement);
    });
  
    if(startingColors === halloweenColorsArray){
                divPallet.classList.add('halloween-color-scheme');
    }
    if(startingColors === underWaterSeaColors){
        divPallet.classList.add('underthesea-color-scheme');
    }
    if(startingColors === thanksgivingColorsArray){
        divPallet.classList.add('thanksgiving-color-scheme');
    }
    if(startingColors === alienInvasionColors){
        divPallet.classList.add('cosmic-alien-color-scheme');
    }
    if(startingColors === medievalFantasyColorsArray){
        divPallet.classList.add('medieval-theme');
    }
    
    if(startingColors === cremeColorSchema){
        divPallet.classList.add('cream-theme');
    }
    if(startingColors === cosmicThemedColors){
        divPallet.classList.add('cosmic-alien-color-scheme');
    }
    if(startingColors === christmasColorsArray){
        divPallet.classList.add('christmas-theme');
    }
    if(startingColors === randomGradientsArray){
        divPallet.classList.add('gradient-theme');
    }
    if(startingColors === blackWhiteGrayColorsArray){
        divPallet.classList.add('grayscale-div');
    }
    if(startingColors === goldSilverColorsArray){
        divPallet.classList.add('gold-silver-box');
    }
    
    


    divPallet.classList.add('div-pallet')
    if(topOrBottom === 'top'){
        divPallet.classList.add('div-pallet-top')
        document.querySelector('.div-top').appendChild(divPallet);
    } else if(topOrBottom === 'bot'){
        divPallet.classList.add('div-pallet-bot')
        document.querySelector('.div-bottom').appendChild(divPallet);
    
    } else if(topOrBottom === 'top2nd'){
        divPallet.classList.add('div-pallet-top')
        document.querySelector('.div-top-2nd').appendChild(divPallet);
    } else if(topOrBottom === 'bot2nd'){
        divPallet.classList.add('div-pallet-bot')
        document.querySelector('.div-bottom-2nd').appendChild(divPallet);
    }

    //2nd level
    else if (topOrBottom === 'div-pallet-mid-1') {

        let botTrack = document.querySelector('.div-pallet-mid-1-l2');
        console.log(botTrack);
        divPallet.classList.add('.div-pallet-level-2')
         botTrack.appendChild(divPallet);
    }
    else if (topOrBottom === 'div-pallet-mid-2') {

        let botTrack = document.querySelector('.div-pallet-mid-2-l2');
        divPallet.classList.add('.div-pallet-level-2')
        botTrack.appendChild(divPallet);
    }
    else if (topOrBottom === 'div-pallet-mid-3') {

        let botTrack = document.querySelector('.div-pallet-mid-3-l2');
         botTrack.appendChild(divPallet);
         divPallet.classList.add('.div-pallet-level-2')
    }
    else if (topOrBottom === 'div-pallet-mid-4') {

        let botTrack = document.querySelector('.div-pallet-mid-4-l2');
         botTrack.appendChild(divPallet);
         divPallet.classList.add('.div-pallet-level-2')
    }
    
    // Start of level three pallets
    else if (topOrBottom === 'div-pallet-level-three-1') {

        let botTrack = document.querySelector('.div-color-palette-container');
         botTrack.appendChild(divPallet);
         divPallet.classList.add('.div-pallet-level-3')
    }
    else if (topOrBottom === 'div-pallet-level-three-2') {

        let botTrack = document.querySelector('.div-color-palette-container');
         botTrack.appendChild(divPallet);
         divPallet.classList.add('.div-pallet-level-3')
    }
//    End of level three

// Start of pallets for boss level
else if (topOrBottom === 'div-boss-stage-pallets-left') {

    let botTrack = document.querySelector('.div-boss-stage-pallets-left');
     botTrack.appendChild(divPallet);
     divPallet.classList.add('boss-color-pallete')
}
else if (topOrBottom === 'div-boss-stage-pallets-right') {

    let botTrack = document.querySelector('.div-boss-stage-pallets-right');
     botTrack.appendChild(divPallet);
     divPallet.classList.add('boss-color-pallete')
}
else if (topOrBottom === 'div-boss-stage-pallets-left-2') {

    let botTrack = document.querySelector('.div-boss-stage-pallets-left-2');
     botTrack.appendChild(divPallet);
     divPallet.classList.add('boss-color-pallete')
}
else if (topOrBottom === 'div-boss-stage-pallets-right-2') {

    let botTrack = document.querySelector('.div-boss-stage-pallets-right-2');
     botTrack.appendChild(divPallet);
     divPallet.classList.add('boss-color-pallete')
}

// end of pallets for boss level
let palletRouteNumberp = document.createElement('p');
palletRouteNumberp.classList.add('pallet-route-number')
if(hardMode === true){
    palletRouteNumberp.classList.add('hide');
} 
    palletRouteNumberp.innerText = pallet.routeNum;
    divPallet.appendChild(palletRouteNumberp);
    let currentColorIndex = 0;
    if (pallet.routeNum === evenRoute1) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[0].CssStringValue
             
           currentColorIndex =0;
    } else {
            divPallet.style.backgroundColor = startingColors[0].CssStringValue
            currentColorIndex =0;
    }
    }
    if (pallet.routeNum === evenRoute2) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[1].CssStringValue
               currentColorIndex =1;
           
    } else {
            divPallet.style.backgroundColor = startingColors[1].CssStringValue
               currentColorIndex =1;
    }
    }
    if (pallet.routeNum === evenRoute3) {
        if(startingColors === randomGradientsArray){
               currentColorIndex =2;
            divPallet.style.background = startingColors[2].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[2].CssStringValue
               currentColorIndex =2;
    }
    }
    if (pallet.routeNum === evenRoute4) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[3].CssStringValue
               currentColorIndex =3;
           
    } else {
            divPallet.style.backgroundColor = startingColors[3].CssStringValue
               currentColorIndex =3;
    }
    }
    if (pallet.routeNum === evenRoute5) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[4].CssStringValue
           
            currentColorIndex =4
    } else {
            divPallet.style.backgroundColor = startingColors[4].CssStringValue
            currentColorIndex =4
    }
    }
    if (pallet.routeNum === evenRoute6) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[5].CssStringValue
           
            currentColorIndex =5
    } else {
            divPallet.style.backgroundColor = startingColors[5].CssStringValue
            currentColorIndex =5
    }
    }
     if (pallet.routeNum === evenRoute7) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[6].CssStringValue
           
            currentColorIndex =6
    } else {
            divPallet.style.backgroundColor = startingColors[6].CssStringValue
            currentColorIndex =6
    }
    }
    if (pallet.routeNum === evenRoute8) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[7].CssStringValue
            currentColorIndex =7
           
    } else {
            divPallet.style.backgroundColor = startingColors[7].CssStringValue
            currentColorIndex =7
    }
    }
    if (pallet.routeNum === evenRoute9) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[8].CssStringValue
            currentColorIndex =8
           
    } else {
            divPallet.style.backgroundColor = startingColors[8].CssStringValue
            currentColorIndex =8
    }
    }
    if (pallet.routeNum === evenRoute10) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[9].CssStringValue
            currentColorIndex =9
           
    } else {
            divPallet.style.backgroundColor = startingColors[9].CssStringValue
            currentColorIndex =9
    }
    }
    if (pallet.routeNum === evenRoute11) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[10].CssStringValue
            currentColorIndex =10;
           
    } else {
            divPallet.style.backgroundColor = startingColors[10].CssStringValue
            currentColorIndex =10;
    }
    }
    if (pallet.routeNum === evenRoute12) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[11].CssStringValue
            currentColorIndex =11
           
    } else {
            divPallet.style.backgroundColor = startingColors[11].CssStringValue
            currentColorIndex =11
    }
    }
    if (pallet.routeNum === oddRoute1) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[12].CssStringValue
            // currentColorIndex =
           
    } else {
            divPallet.style.backgroundColor = startingColors[12].CssStringValue
            // currentColorIndex =
    }
    }

    if (pallet.routeNum === oddRoute2) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[13].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[13].CssStringValue
    }
    }

    if (pallet.routeNum === oddRoute3) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[14].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[14].CssStringValue
    }
    }

    if (pallet.routeNum === oddRoute4) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[15].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[15].CssStringValue
    }
    }
    if(pallet.routeNum === oddRoute5) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[16].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[16].CssStringValue
    }
    }
    if(pallet.routeNum === oddRoute6) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[17].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[17].CssStringValue
    }
    }
    if(pallet.routeNum === oddRoute7) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[18].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[18].CssStringValue
    }
    }
    if(pallet.routeNum === oddRoute8) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[19].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[19].CssStringValue
    }
    }
    if(pallet.routeNum === oddRoute9) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[20].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[20].CssStringValue
    }
    }
    if(pallet.routeNum === oddRoute10) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[21].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[21].CssStringValue
    }
    }
    if(pallet.routeNum === oddRoute11) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[22].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[22].CssStringValue
    }
    }
    if(pallet.routeNum === oddRoute12) {
        if(startingColors === randomGradientsArray){
            divPallet.style.background = startingColors[23].CssStringValue
           
    } else {
            divPallet.style.backgroundColor = startingColors[23].CssStringValue
    }
    }
    


    
    divPallet.addEventListener('click', ()=>{
        if(isPaused){
            return;
        } else {
           
        let currentPackageNumber = document.querySelector('.span-current-package-route-number');
        
        if(!packageHeld){
            console.log('You are not currently holding a package');
            return;
        } else {
        

   
            if(currentPackageNumber.innerText === String(pallet.routeNum) && stackCount.stackCount <= 1){
                document.querySelector('.span-score').classList.add('clicked');
                setTimeout(()=>{
                 document.querySelector('.span-score').classList.remove('clicked')
                },1000)
                rightLoad.play();
                console.log('Match')
                   if(pallet.routeNum === evenRoute1){
                    updateColorWhenMatched(0)
                    currentColorIndex =0
                }
                if(pallet.routeNum === evenRoute2){
                    updateColorWhenMatched(1)
                    currentColorIndex =1
                }

                if(pallet.routeNum === evenRoute3){
                    updateColorWhenMatched(2)
                    currentColorIndex =2
                }
                if(pallet.routeNum === evenRoute4){
                    updateColorWhenMatched(3)
                    currentColorIndex =3
                }
                if(pallet.routeNum === evenRoute5){
                    updateColorWhenMatched(4)
                    currentColorIndex =4
                }
                if(pallet.routeNum === evenRoute6){
                    updateColorWhenMatched(5)
                    currentColorIndex =5
                }
                if(pallet.routeNum === evenRoute7){
                    updateColorWhenMatched(6)
                    currentColorIndex =6
                }
                if(pallet.routeNum === evenRoute8){
                    updateColorWhenMatched(7)
                    currentColorIndex =7
                }
                if(pallet.routeNum === evenRoute9){
                    updateColorWhenMatched(8)
                    currentColorIndex =8
                }
                if(pallet.routeNum === evenRoute10){
                    updateColorWhenMatched(9)
                    currentColorIndex =9
                }
                if(pallet.routeNum === evenRoute11){
                    updateColorWhenMatched(10)
                    currentColorIndex =10
                }
                if(pallet.routeNum === evenRoute12){
                    updateColorWhenMatched(11)
                    currentColorIndex =11
                }
                if(pallet.routeNum === oddRoute1){
                    updateColorWhenMatched(12)
                }
                if(pallet.routeNum === oddRoute2){
                    updateColorWhenMatched(13)
                }
                if(pallet.routeNum === oddRoute3){
                    updateColorWhenMatched(14)
                }
                if(pallet.routeNum === oddRoute4){
                    updateColorWhenMatched(15)
                }
                if(pallet.routeNum === oddRoute5){
                    updateColorWhenMatched(16)
                }
                if(pallet.routeNum === oddRoute6){
                    updateColorWhenMatched(17)
                }
                if(pallet.routeNum === oddRoute7){
                    updateColorWhenMatched(18)
                }
                if(pallet.routeNum === oddRoute8){
                    updateColorWhenMatched(19)
                }
                if(pallet.routeNum === oddRoute9){
                    updateColorWhenMatched(20)
                }
                if(pallet.routeNum === oddRoute10){
                    updateColorWhenMatched(21)
                }
                if(pallet.routeNum === oddRoute11){
                    updateColorWhenMatched(22)
                }
                if(pallet.routeNum === oddRoute12){
                    updateColorWhenMatched(23)
                }
                
                packageHeld = false;
                totalScore += 10;
                credits += 10;
                boxesSorted +=1;
                document.querySelector('.span-current-package-route-number').innerText = 'N/A';
                document.querySelector('.span-current-package-weight').innerText = 'N/A';
                document.querySelector('.span-score').innerText = totalScore;
                document.querySelector('.span-boxes-sorted').innerText = boxesSorted;
                stackCount.stackCount = 0;
                stackCount.stackWeight = 0;
                document.querySelector('.span-stack-weight').innerText = stackCount.stackWeight;
                document.querySelector('.span-stack-size').innerText = stackCount.stackCount;

            } else if(packageHeld && stackCount.stackCount > 1 && stackCount.stackWeight <= 150){
                
                document.querySelector('.span-score').classList.add('clicked');
                setTimeout(()=>{
                 document.querySelector('.span-score').classList.remove('clicked')
                },1000)
                            
                
            if(currentPackageNumber.innerText === String(pallet.routeNum)){
                console.log('Match')
                rightLoad.play();
                if(pallet.routeNum === evenRoute1){
                    updateColorWhenMatched(0)
                }
                if(pallet.routeNum === evenRoute2){
                    updateColorWhenMatched(1)
                }
                if(pallet.routeNum === evenRoute3){
                    updateColorWhenMatched(2)
                }
                if(pallet.routeNum === evenRoute4){
                    updateColorWhenMatched(3)
                }
                if(pallet.routeNum === evenRoute5){
                    updateColorWhenMatched(4)
                }
                if(pallet.routeNum === evenRoute6){
                    updateColorWhenMatched(5)
                }
                if(pallet.routeNum === evenRoute7){
                    updateColorWhenMatched(6)
                }
                if(pallet.routeNum === evenRoute8){
                    updateColorWhenMatched(7)
                }
                if(pallet.routeNum === evenRoute9){
                    updateColorWhenMatched(8)
                }
                if(pallet.routeNum === evenRoute10){
                    updateColorWhenMatched(9)
                }
                if(pallet.routeNum === evenRoute11){
                    updateColorWhenMatched(10)
                }
                if(pallet.routeNum === evenRoute12){
                    updateColorWhenMatched(11)
                }
                if(pallet.routeNum === oddRoute1){
                    updateColorWhenMatched(12)
                }
                if(pallet.routeNum === oddRoute2){
                    updateColorWhenMatched(13)
                }
                if(pallet.routeNum === oddRoute3){
                    updateColorWhenMatched(14)
                }
                if(pallet.routeNum === oddRoute4){
                    updateColorWhenMatched(15)
                }
                if(pallet.routeNum === oddRoute5){
                    updateColorWhenMatched(16)
                }
                if(pallet.routeNum === oddRoute6){
                    updateColorWhenMatched(17)
                }
                if(pallet.routeNum === oddRoute7){
                    updateColorWhenMatched(18)
                }
                if(pallet.routeNum === oddRoute8){
                    updateColorWhenMatched(19)
                }
                if(pallet.routeNum === oddRoute9){
                    updateColorWhenMatched(20)
                }
                if(pallet.routeNum === oddRoute10){
                    updateColorWhenMatched(21)
                }
                if(pallet.routeNum === oddRoute11){
                    updateColorWhenMatched(22)
                }
                if(pallet.routeNum === oddRoute12){
                    updateColorWhenMatched(23)
                }
                packageHeld = false;
                totalScore += (10 * stackCount.stackCount);
                credits += (10 * stackCount.stackCount);
                boxesSorted += (1 * stackCount.stackCount);
                document.querySelector('.span-current-package-route-number').innerText = 'N/A';
                document.querySelector('.span-current-package-weight').innerText = 'N/A';
                document.querySelector('.span-score').innerText = totalScore;
                document.querySelector('.span-boxes-sorted').innerText = boxesSorted;
                stackCount.stackCount = 0;
                stackCount.stackWeight = 0;
                document.querySelector('.span-stack-weight').innerText = stackCount.stackWeight;
                document.querySelector('.span-stack-size').innerText = stackCount.stackCount;

            } else if(currentPackageNumber.innerText != String(pallet.routeNum)){
                console.log('Misload');
              
                            
                clicked-misload
                packageHeld = false;
                totalScore -= 50 * stackCount.stackCount;
                misloads += 1 * stackCount.stackCount;
                // 
                addMisloadToLog(misloads_log, currentColor,  stackCount,startingColors[currentColorIndex].color);
                insertMisloadElementIntoMisloadContainer(currentColor, startingColors[currentColorIndex].color)
              misloadSound.play();
                stackCount.stackCount = 0;
                stackCount.stackWeight = 0;
                document.querySelector('.span-stack-weight').innerText = stackCount.stackWeight;
                document.querySelector('.span-stack-size').innerText = stackCount.stackCount;
                document.querySelector('.span-current-package-route-number').innerText = 'N/A';
                document.querySelector('.span-current-package-weight').innerText = 'N/A';
                document.querySelector('.span-score').innerText = totalScore;
                document.querySelector('.span-misloads').innerText = misloads;
            }
            
        } else {
            console.log('Misload');
            document.querySelector('.span-score').classList.add('clicked-misload');
                setTimeout(()=>{
                 document.querySelector('.span-score').classList.remove('clicked-misload')
                },1000)
            packageHeld = false;
            totalScore -= 50 * stackCount.stackCount;
            misloads += 1 * stackCount.stackCount;
            addMisloadToLog(misloads_log, currentColor,  stackCount,startingColors[currentColorIndex].color);
            insertMisloadElementIntoMisloadContainer(currentColor, startingColors[currentColorIndex].color)
            misloadSound.play();
            stackCount.stackCount = 0;
            stackCount.stackWeight = 0;
            document.querySelector('.span-stack-weight').innerText = stackCount.stackWeight;
            document.querySelector('.span-stack-size').innerText = stackCount.stackCount;
            document.querySelector('.span-current-package-route-number').innerText = 'N/A';
            document.querySelector('.span-current-package-weight').innerText = 'N/A';
            document.querySelector('.span-score').innerText = totalScore;
            document.querySelector('.span-misloads').innerText = misloads;
        }
    }
}    
    
    })
    
    
    }
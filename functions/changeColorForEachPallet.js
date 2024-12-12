// this function is not where the unique custom theme styles are applied, it is where they are removed. they must be reapplied here.
function changeColorForEachPallet(elementContainer, elementContainer2, elementContainer3, elementContainer4){
    stripPalletsOfAllThemes();
    
    
    
    let firstSetTopPallets = document.querySelectorAll(`.${elementContainer}`);
    firstSetTopPallets.forEach((pallet,i)=>{
        let palletRouteNumber = document.querySelectorAll(`.${elementContainer} .pallet-route-number`);

        pallet.style.background = '';

        
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute1) {
        pallet.style.backgroundColor = startingColors[0].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute2) {
        pallet.style.backgroundColor = startingColors[1].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute3) {
        pallet.style.backgroundColor = startingColors[2].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute4) {
        pallet.style.backgroundColor = startingColors[3].CssStringValue
    }

    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute5) {
        pallet.style.backgroundColor = startingColors[4].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute6) {
        pallet.style.backgroundColor = startingColors[5].CssStringValue
    }
    })

    let secondSetTopPallets = document.querySelectorAll(`.${elementContainer2}`);
    
    console.log(elementContainer2);
    secondSetTopPallets.forEach((pallet,i)=>{
        let palletRouteNumber = document.querySelectorAll(`.${elementContainer2} .pallet-route-number`);
       
        pallet.style.background = '';
        if(startingColors === alienInvasionColors){
            pallet.classList.add('cosmic-alien-color-scheme')
        }
        if(startingColors === halloweenColorsArray){
            pallet.classList.add('halloween-color-scheme')
        }
        if(startingColors === uniquePalette){
            pallet.classList.add('unique-color-scheme'); //does not work for pallets
        }
        if(startingColors === underWaterSeaColors){
            pallet.classList.add('underthesea-color-scheme');
        }
        if(startingColors === thanksgivingColorsArray){
            pallet.classList.add('thanksgiving-color-scheme');
        }
   
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute7) {
        pallet.style.backgroundColor = startingColors[6].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute8) {
        pallet.style.backgroundColor = startingColors[7].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute9) {
        pallet.style.backgroundColor = startingColors[8].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute10) {
        pallet.style.backgroundColor = startingColors[9].CssStringValue
    }

    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute11) {
        pallet.style.backgroundColor = startingColors[10].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === evenRoute12) {
        pallet.style.backgroundColor = startingColors[11].CssStringValue
    }
    })
    
    let firstSetBottomPallets = document.querySelectorAll(`.${elementContainer3}`);
    console.log(elementContainer3);
    firstSetBottomPallets.forEach((pallet,i)=>{
        let palletRouteNumber = document.querySelectorAll(`.${elementContainer3} .pallet-route-number`);
      
        pallet.style.background = '';
    
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute1) {
        pallet.style.backgroundColor = startingColors[12].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute2) {
        pallet.style.backgroundColor = startingColors[13].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute3) {
        pallet.style.backgroundColor = startingColors[14].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute4) {
        pallet.style.backgroundColor = startingColors[15].CssStringValue
    }

    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute5) {
        pallet.style.backgroundColor = startingColors[16].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute6) {
        pallet.style.backgroundColor = startingColors[17].CssStringValue
    }
    })
    
    let secondSetBottomPallets = document.querySelectorAll(`.${elementContainer4}`);
    console.log(elementContainer4);
    secondSetBottomPallets.forEach((pallet,i)=>{
        let palletRouteNumber = document.querySelectorAll(`.${elementContainer4} .pallet-route-number`);
        
      
       
        pallet.style.background = '';
        if(startingColors === halloweenColorsArray){
            pallet.classList.add('halloween-color-scheme')
        document.querySelector('.div-game-body').classList.add('halloweenBackground')
        document.querySelector('.div-game-body').classList.remove('uniqueBackground')
        }
        if(startingColors === alienInvasionColors){
            pallet.classList.add('cosmic-alien-color-scheme')
            document.querySelector('.div-game-body').classList.remove('halloweenBackground')
            document.querySelector('.div-game-body').classList.remove('uniqueBackground')
        }
        if(startingColors === uniquePalette){
            pallet.classList.add('unique-color-scheme');
            document.querySelector('.div-game-body').classList.remove('halloweenBackground');
            document.querySelector('.div-game-body').classList.add('uniqueBackground')
        }
        if(startingColors === underWaterSeaColors){
            pallet.classList.add('underthesea-color-scheme');
            document.querySelector('.div-game-body').classList.remove('halloweenBackground')
               document.querySelector('.div-game-body').classList.remove('uniqueBackground')
        }
        if(startingColors === thanksgivingColorsArray){
            pallet.classList.add('thanksgiving-color-scheme');
            document.querySelector('.div-game-body').classList.remove('halloweenBackground')
               document.querySelector('.div-game-body').classList.remove('uniqueBackground')
        }
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute7) {
        pallet.style.backgroundColor = startingColors[18].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute8) {
        pallet.style.backgroundColor = startingColors[19].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute9) {
        pallet.style.backgroundColor = startingColors[20].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute10) {
        pallet.style.backgroundColor = startingColors[21].CssStringValue
    }

    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute11) {
        pallet.style.backgroundColor = startingColors[22].CssStringValue
    }
    if (parseFloat(palletRouteNumber[i].innerText) === oddRoute12) {
        pallet.style.backgroundColor = startingColors[23].CssStringValue
    }
    })
    oddPackages = [];
    evenPackages = [];
    applyStyleToPalletDependingOnTheme()

};



 function deductCreditsForColorChange(oddPackages, evenPackages){
    let numOfBoxesOnTrack = findTotalBoxesOnTrack(oddPackages, evenPackages);
    let creditReduction = numOfBoxesOnTrack * 5;
    return creditReduction;
}
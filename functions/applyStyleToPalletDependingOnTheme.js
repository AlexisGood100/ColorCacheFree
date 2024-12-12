
function applyStyleToPalletDependingOnTheme(){
    document.querySelectorAll('.div-pallet').forEach((div)=>{
        if(startingColors === alienInvasionColors){
            div.classList.add('cosmic-alien-color-scheme')
        }
        if(startingColors === halloweenColorsArray){
            div.classList.add('halloween-color-scheme')
        }
        if(startingColors === uniquePalette){
            div.classList.add('unique-color-scheme');
        }
        if(startingColors === underWaterSeaColors){
            div.classList.add('underthesea-color-scheme');
        }
        if(startingColors === thanksgivingColorsArray){
            div.classList.add('thanksgiving-color-scheme');
        }
        if(startingColors === medievalFantasyColorsArray){
            div.classList.add('medieval-theme')
        }
        if(startingColors === cremeColorSchema){
            div.classList.add('cream-theme')
        }
        if(startingColors === cosmicThemedColors){
            
            div.classList.add('alien-ship')
            div.classList.add('cosmic-alien-color-scheme')
        }
        if(startingColors === christmasColorsArray){
            div.classList.add('christmas-theme')
        }
        if(startingColors === christmasColorsArray){
            div.classList.add('gradient-theme');
        }
        if(startingColors === blackWhiteGrayColorsArray){
            div.classList.add('grayscale-package');
        }
    })
 
}
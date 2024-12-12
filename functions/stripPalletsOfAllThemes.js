function stripPalletsOfAllThemes(){ // used inside of changeColorForEachPallet.js to strip the pallets of custom themes
    document.querySelectorAll('.div-pallet').forEach((div)=>{
        div.classList.remove('unique-color-scheme')
        div.classList.remove('halloween-color-scheme')
        div.classList.remove('underthesea-color-scheme')
        div.classList.remove('thanksgiving-color-scheme')
        div.classList.remove('cosmic-alien-color-scheme')
        div.classList.remove('medieval-theme')
        div.classList.remove('gradient-theme')
     div.classList.remove('cream-theme')
     div.classList.remove('grayscale-div')
     div.classList.remove('christmas-theme')
     div.classList.remove('gradient-theme')
     div.classList.remove('alien-ship')
    })
}

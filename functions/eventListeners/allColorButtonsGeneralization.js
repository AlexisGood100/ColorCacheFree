

function produceSampleSetOfPalette(sampleArray){
    document.querySelectorAll('.div-sample-pallet-container div').forEach((div)=>{
            div.remove();
    })
    sampleArray.forEach((sample)=>{
    let sampleDiv = document.createElement('div');
    sampleDiv.classList.add('div-sample')
    if(sampleArray === randomGradientsArray){
            sampleDiv.style.background = sample.CssStringValue;
    } else {
            sampleDiv.style.backgroundColor = sample.CssStringValue;
    }
    document.querySelector('.div-sample-pallet-container').appendChild(sampleDiv)
    })
    }

document.querySelectorAll('.btn-show-difficulty-selection').forEach((button)=>{
    button.addEventListener('click', ()=>{
            document.querySelector('.span-current-theme').innerText = starterColorForDisplayTheme;
            document.querySelector('.div-difficulty-btn-container').classList.remove('hide');
            produceSampleSetOfPalette(startingColors);
            document.querySelector('.div-sample-pallet-container').classList.remove('hide');
            choiceForColor = true;
            creatingColorMatchLi(startingColors)
        })
    });
   
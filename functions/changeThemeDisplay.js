// changing the display of the theme
function changeThemeDisplay(){
    if(startingColors[0].color === blueColorsArray[0].color){
        document.querySelector('.span-current-theme').innerText = 'Blue';
        document.querySelector('.div-game-body').classList.add('blueBackground');
        document.querySelector('.ring-circle-container').classList.add('blueBackground');
    }
    if(startingColors[0].color === pinkRetroSteamPink[0].color){
        document.querySelector('.span-current-theme').innerText = 'Pink';
        document.querySelector('.ring-circle-container').classList.add('pinkBackground');
    document.querySelector('.div-game-body').classList.add('pinkBackground');

    }
    if(startingColors[0].color === purpleColorsArray[0].color){
        document.querySelector('.span-current-theme').innerText ='Purple'; 
        document.querySelector('.div-game-body').classList.add('purpleBackground');
        document.querySelector('.ring-circle-container').classList.add('purpleBackground');
    }
    if(startingColors[0].color === goldSilverColorsArray[0].color){
       document.querySelector('.span-current-theme').innerText ='Silver and Gold';
       document.querySelector('.ring-circle-container').classList.add('goldBackground');
       document.querySelector('.div-game-body').classList.add('goldBackground');
    }
    if(startingColors[0].color === cremeColorSchema[0].color){
        document.querySelector('.span-current-theme').innerText = 'Cream';
        document.querySelector('.div-game-body').classList.add('cremeBackground');
    document.querySelector('.ring-circle-container').classList.add('cremeBackground');
    }
    if(startingColors[0].color === redColorsArray[0].color){
       document.querySelector('.span-current-theme').innerText ='Red';
       document.querySelector('.ring-circle-container').classList.add('redBackground');
       document.querySelector('.div-game-body').classList.add('redBackground');
    }
    if(startingColors[0].color === halloweenColorsArray[0].color){
        document.querySelector('.span-current-theme').innerText = 'Halloween';
        document.querySelector('.ring-circle-container').classList.add('halloweenBackground');
        document.querySelector('.div-game-body').classList.add('halloweenBackground');
    }
    if(startingColors[0].color === thanksgivingColorsArray[0].color){
        document.querySelector('.span-current-theme').innerText = 'Thanksgiving';
        document.querySelector('.div-game-body').classList.add('thanksgivingBackground');
        document.querySelector('.ring-circle-container').classList.add('thanksgivingBackground');
    }
    if(startingColors[0].color === medievalFantasyColorsArray[0].color){
        document.querySelector('.span-current-theme').innerText =  'Medievil';
        document.querySelector('.ring-circle-container').classList.add('medevilBackground');
        document.querySelector('.div-game-body').classList.add('medevilBackground');
    }
    if(startingColors[0].color === underWaterSeaColors[0].color){
        document.querySelector('.span-current-theme').innerText =  'Under the Sea';
        document.querySelector('.div-game-body').classList.add('undertheseaBackground');
        document.querySelector('.ring-circle-container').classList.add('undertheseaBackground');
    }
    if(startingColors[0].color === cosmicThemedColors[0].color){
        document.querySelector('.span-current-theme').innerText = 'Cosmic';
        document.querySelector('.div-game-body').classList.add('cosmicBackground');
        document.querySelector('.ring-circle-container').classList.add('cosmicBackground');
    }
    if(startingColors[0].color === alienInvasionColors[0].color){
        document.querySelector('.span-current-theme').innerText == 'Alien Invasion';
        document.querySelector('.div-game-body').classList.add('alienInvasionBackground');
        document.querySelector('.ring-circle-container').classList.add('cosmicBackground');
    }
    if(startingColors[0].color === uniquePalette[0].color){
        document.querySelector('.span-current-theme').innerText = 'Unique';
        document.querySelector('.div-game-body').classList.add('uniqueBackground');
        document.querySelector('.ring-circle-container').classList.add('uniqueBackground');
    }
    for(let i=0; i<=26; i++){ // the display won't work if this doesn't happen because the random is only populated on click on the color.
        fullRandomColorsScheme.push(createRandomRGBValueObject(256,256,256));
    }
    if(startingColors[0].color === fullRandomColorsScheme[0].color){
        document.querySelector('.span-current-theme').innerText = 'Random';
    }
    if(startingColors[0].color === blackWhiteGrayColorsArray[0].color){
        document.querySelector('.span-current-theme').innerText = 'Clouds';
        document.querySelector('.div-game-body').classList.add('cloudBackground');
        document.querySelector('.ring-circle-container').classList.add('cloudBackground');
    }
    }
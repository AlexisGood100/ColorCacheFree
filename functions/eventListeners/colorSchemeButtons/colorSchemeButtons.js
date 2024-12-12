
document.querySelector('.btn-blue-scheme').addEventListener('click', ()=>{
    removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = blueColorsArray;
    document.querySelector('.div-game-body').classList.add('blueBackground');
    document.querySelector('.ring-circle-container').classList.add('blueBackground');
    starterColorForDisplayTheme = 'Blue';
    pauseAllSongs();
    backgroundBlueMusic.play();
})




document.querySelector('.btn-pink-scheme').addEventListener('click', ()=>{
    removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = pinkRetroSteamPink;
    starterColorForDisplayTheme = 'Pink';
    document.querySelector('.ring-circle-container').classList.add('pinkBackground');
    document.querySelector('.div-game-body').classList.add('pinkBackground');
    pauseAllSongs();
    backgroundPinkMusic.play();
})





document.querySelector('.btn-purple-scheme').addEventListener('click', ()=>{
    removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = purpleColorsArray;
    document.querySelector('.div-game-body').classList.add('purpleBackground');
    document.querySelector('.ring-circle-container').classList.add('purpleBackground');
    starterColorForDisplayTheme = 'Purple';
    pauseAllSongs();
    BackgroundPurpleMusic.play()
})




document.querySelector('.btn-silver-scheme').addEventListener('click', ()=>{
    removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = goldSilverColorsArray;
    document.querySelector('.ring-circle-container').classList.add('goldBackground');
    document.querySelector('.div-game-body').classList.add('goldBackground');
    starterColorForDisplayTheme = 'Silver and Gold';
    pauseAllSongs();
    backgroundSilverMusic.play();
});





document.querySelector('.btn-red-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = redColorsArray;
    document.querySelector('.ring-circle-container').classList.add('redBackground');
    document.querySelector('.div-game-body').classList.add('redBackground');
    starterColorForDisplayTheme = 'Red';
   
    pauseAllSongs();
    BackgroundRedMusic.play();   
   
})

document.querySelector('.btn-creme-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = cremeColorSchema;
    starterColorForDisplayTheme = 'Cream';
    document.querySelector('.div-game-body').classList.add('cremeBackground');
    document.querySelector('.ring-circle-container').classList.add('cremeBackground');
    pauseAllSongs();
    backgroundMusicCreme.play();
})

document.querySelector('.btn-halloween-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = halloweenColorsArray;
    starterColorForDisplayTheme = 'Halloween';
    document.querySelector('.ring-circle-container').classList.add('halloweenBackground');
    document.querySelector('.div-game-body').classList.add('halloweenBackground');

    pauseAllSongs();
   BackgroundHalloweenMusic.play();
})




document.querySelector('.btn-christmas-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = christmasColorsArray;
    starterColorForDisplayTheme = 'Christmas';
    document.querySelector('.div-game-body').classList.add('christmasBackground');
      document.querySelector('.ring-circle-container').classList.add('christmasBackground');
      pauseAllSongs();
      BackgroundChristmasMusic.play();
})


document.querySelector('.btn-thanksgiving-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = thanksgivingColorsArray;
    document.querySelector('.div-game-body').classList.add('thanksgivingBackground');
      document.querySelector('.ring-circle-container').classList.add('thanksgivingBackground');
     starterColorForDisplayTheme = 'Thanksgiving';
       pauseAllSongs();
       BackgroundThanksgivingMusic.play();
})



document.querySelector('.btn-medieval-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = medievalFantasyColorsArray;
    document.querySelector('.ring-circle-container').classList.add('medevilBackground');
    document.querySelector('.div-game-body').classList.add('medevilBackground');
     starterColorForDisplayTheme = 'Medieval';
       pauseAllSongs();
    
     BackgroundMedievalMusic.play()
})

document.querySelector('.btn-underwater-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = underWaterSeaColors;
    document.querySelector('.div-game-body').classList.add('undertheseaBackground');
    document.querySelector('.ring-circle-container').classList.add('undertheseaBackground');
     starterColorForDisplayTheme = 'Under the Sea';
     pauseAllSongs();
     backgroundUnderTheSeaMusic.play();
})




document.querySelector('.btn-cosmic-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = cosmicThemedColors;
    document.querySelector('.div-game-body').classList.add('cosmicBackground');
    document.querySelector('.ring-circle-container').classList.add('cosmicBackground');
    pauseAllSongs();
    BackgroundCosmicMusic.play();
  
     starterColorForDisplayTheme = 'Cosmic';
})


document.querySelector('.btn-alien-invasion-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = alienInvasionColors;
    document.querySelector('.div-game-body').classList.add('alienInvasionBackground');
    document.querySelector('.ring-circle-container').classList.add('cosmicBackground');
    starterColorForDisplayTheme = 'Alien Invasion';
     pauseAllSongs();
     backgroundAlienInvasionMusic.play();
})

document.querySelector('.btn-unique-color-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = uniquePalette;
    document.querySelector('.div-game-body').classList.add('uniqueBackground');
    document.querySelector('.ring-circle-container').classList.add('uniqueBackground');
     starterColorForDisplayTheme = 'Unique';
     pauseAllSongs();
    BackgroundUniqueMusic.play();
    
})


document.querySelector('.btn-fullrandom-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    fullRandomColorsScheme = [];
    document.querySelectorAll('.div-sample-pallet-container div').forEach((div)=>{
        div.remove();
})
    for(let i=0; i<=26; i++){
        fullRandomColorsScheme.push(createRandomRGBValueObject(256,256,256));
    }
    startingColors = fullRandomColorsScheme;
    
     starterColorForDisplayTheme = 'Random';
     pauseAllSongs();
     backgroundRandomMusic.play();
   
})


document.querySelector('.btn-clouds-theme').addEventListener('click', ()=>{
    startingColors = blackWhiteGrayColorsArray;
    choiceForColor = true;
     starterColorForDisplayTheme = 'Clouds';
     document.querySelector('.div-game-body').classList.add('cloudBackground');
     document.querySelector('.ring-circle-container').classList.add('cloudBackground');
     pauseAllSongs();
     backgroundCloudMusic.play();
  
 });


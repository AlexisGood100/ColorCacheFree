document.querySelector('.btn-custom-theme').addEventListener('click', ()=>{
    customColorsBoolean = true;
    document.querySelector('.div-instructions').classList.add('hide');
    document.querySelector('.div-custom-color-selection-container').classList.remove('hide');
    customColorChoices = [];
    document.querySelectorAll('.div-selection').forEach((div)=>{
        div.remove();
    })
    indexForColor = 0;
    pauseAllSongs();
    backgroundCustomMusic.play();
    document.querySelector('.ring-circle-container').classList.add('customBackground');
    document.querySelector('.div-game-body').classList.add('customBackground');
})
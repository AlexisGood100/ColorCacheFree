document.querySelector('.btn-random-gradients-theme').addEventListener('click', ()=>{
    removeAllBackgroundFromLevelOne();
    removeAllBackgroundFromLevelThree();
    startingColors = randomGradientsArray;
    starterColorForDisplayTheme = 'Random Gradients';
    document.querySelector('.div-game-body').classList.add('gradientBackground');
    document.querySelector('.ring-circle-container').classList.add('gradientBackground');
    pauseAllSongs();
    backgroundGradientsMusic.play();
})
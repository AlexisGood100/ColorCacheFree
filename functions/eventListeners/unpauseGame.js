document.querySelector('.btn-unpause').addEventListener('click', ()=>{
    isPaused = false;
    document.querySelector('.div-container-pause-menu').classList.add('hide');
    document.querySelector('.div-game-body').classList.remove('hide');
    document.querySelector('.btn-unpause').classList.add('hide');
    document.querySelector('.div-container-misload-log').classList.add('hide');
    document.querySelector('.div-game-statistics').classList.add('hide');
    document.querySelector('.div-container-upgrade-store').classList.add('hide');
    document.querySelector('.div-menu-container').classList.add('hide');
    
   
})
// Broke the pause button into two buttons. Instead of the if statements, this is a more direct approach.
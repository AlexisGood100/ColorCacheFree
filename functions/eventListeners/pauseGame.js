document.querySelector('.btn-pause').addEventListener('click', ()=>{
        isPaused = true;
        document.querySelector('.div-container-pause-menu').classList.remove('hide');
        document.querySelector('.div-menu-container').classList.remove('hide');
        document.querySelector('.div-game-body').classList.add('hide');
        document.querySelector('.btn-unpause').classList.remove('hide');
        
})
// Broke the pause button into two buttons. Instead of the if statements, this is a more direct approach.

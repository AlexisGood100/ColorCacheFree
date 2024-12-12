document.querySelector(
    '.h2-misload-log').addEventListener('click', ()=>{
        if(document.querySelector('.div-container-misload-log').classList.contains('hide')){
            document.querySelector('.div-container-misload-log').classList.remove('hide');
            document.querySelector('.div-game-statistics').classList.add('hide');
            document.querySelector('.div-container-upgrade-store').classList.add('hide');
        } else {
            document.querySelector('.div-container-misload-log').classList.add('hide')
        }
})
document.querySelector('.h2-upgrade-store').addEventListener('click', ()=>{
    if( document.querySelector('.div-container-upgrade-store').classList.contains('hide')){
        document.querySelector('.div-container-upgrade-store').classList.remove('hide')
        document.querySelector('.div-container-misload-log').classList.add('hide');
        document.querySelector('.div-game-statistics').classList.add('hide');
        document.querySelector('.span-current-credits').innerText = credits;
        document.querySelector('.p-upgrade-price-number-of-boxes-on-track').innerText = deductCreditsForColorChange(oddPackages, evenPackages)

    } else {
        document.querySelector('.div-container-upgrade-store').classList.add('hide')
    }
})
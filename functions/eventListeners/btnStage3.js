document.querySelector('.btn-stage-3').addEventListener('click', ()=>{
    levelThree = true;
    levelOne = false;
    levelTwo = false;
    document.querySelector('.btn-alien-invasion-scheme').classList.add('hide');
    document.querySelector('.btn-cosmic-scheme').classList.add('hide');
    // document.querySelector('.color-scheme').classList.add('hide');
    document.querySelector('.btn-thanksgiving-scheme').classList.add('hide');
    document.querySelector('.div-color-difficulty-tiers-container').classList.remove('hide');
    document.querySelector('.div-button-start-container').classList.add('hide');

    document.querySelector('.btn-underwater-scheme').classList.add('hide');
    document.querySelector('.btn-medieval-scheme').classList.add('hide');
    document.querySelector('.p-stage-start').classList.remove('hide');
document.querySelector('.span-stage-start').innerText = '3'
    

})
document.querySelector('.btn-select-character').addEventListener('click',()=>{
    initialGameMusic.play().catch(error => console.error("Playback failed", error));
    document.querySelector('.div-character-selection-container').remove();
    document.querySelector('.div-instructions').classList.remove('hide');
   let currentName = currentCharacter
    document.querySelector('.span-character-name-statistics').innerText = currentCharacter.intro;
    console.log(currentName);
    document.querySelector('.img-character-portait').src = currentCharacter.image;
    document.querySelector('.span-character-strength').innerText = characterStrength;
});
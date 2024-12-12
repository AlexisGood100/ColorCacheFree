function assignIntroImageAndDescriptionForCharacter(characterObject, introEl, imageEl, descEl, prosEl, consEl){
    document.querySelector(`.${introEl}`).innerText = characterObject.intro;
    document.querySelector(`.${imageEl}`).src = characterObject.image;
    document.querySelector(`.${descEl}`).innerText = characterObject.description;
    document.querySelector(`.${prosEl}`).innerText = characterObject.pros;
    document.querySelector(`.${consEl}`).innerText = characterObject.cons;
    }
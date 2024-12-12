function assignIntroImageAndDescriptionForScene(sceneObject, introEl, imageEl, descEl){
    document.querySelector(`.${introEl}`).innerText = sceneObject.intro;
    document.querySelector(`.${imageEl}`).src = sceneObject.image;
    document.querySelector(`.${descEl}`).innerText = sceneObject.description;
    }
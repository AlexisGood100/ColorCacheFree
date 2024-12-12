document.querySelector('.btn-next-scene').addEventListener('click', ()=>{
    if(sceneCounter >= scenes.length - 1){
        document.querySelector('.div-container-intro-scene').classList.add('hide');
        document.querySelector('.div-character-selection-container').classList.remove('hide')
        
        return;
    } else {
        sceneCounter += 1;
        sceneIndex = scenes[sceneCounter]
        assignIntroImageAndDescriptionForScene(sceneIndex, 'h1-intro-title', 'img-intro-scene', 'p-intro-description')
    }
});
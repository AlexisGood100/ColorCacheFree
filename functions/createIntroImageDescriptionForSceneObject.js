function createIntroImageDescriptionForSceneObject(intro, image, description, scenesArray){
    let sceneObject = {
        intro: intro,
        image: image,
        description: description
    }
    scenesArray.push(sceneObject);
    return sceneObject;
}


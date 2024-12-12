function createIntroImageDescriptionForCharacterObject(intro, image, description, pros, cons, characterArray){
    let characterObject = {
        intro: intro,
        image: image,
        description: description,
        pros: pros,
        cons: cons,
    }
    characterArray.push(characterObject);
    return characterObject;
}
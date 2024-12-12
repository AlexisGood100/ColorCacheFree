document.querySelector('.btn-next-select-character').addEventListener('click', ()=>{
    if(characterSelectionCounter >= characterArray.length - 1){
        assignIntroImageAndDescriptionForCharacter(characterArray[0], 'h3-character-name-selection'
            ,'img-character-selection','p-desc-character-selection',
            'span-character-benefits-selection','span-character-cons-selection')
            characterSelectionCounter = 0;
            currentCharacter = characterArray[characterSelectionCounter]
            characterSelectorIndex = characterArray[characterSelectionCounter]
        return;
    } else {
        characterSelectionCounter += 1;
        currentCharacter = characterArray[characterSelectionCounter]
        characterSelectorIndex = characterArray[characterSelectionCounter]
        assignIntroImageAndDescriptionForCharacter(characterSelectorIndex, 'h3-character-name-selection'
            ,'img-character-selection','p-desc-character-selection',
            'span-character-benefits-selection','span-character-cons-selection')
    }
});
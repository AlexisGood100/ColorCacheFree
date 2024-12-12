// All functions use the code in this page. 
// The functions run in this script are essential to the program working as working correctly.

//Global Variables
let endGame = null;
let totalScore = 0;
let starterColorForDisplayTheme = 0;
let currentColor = null;
let stage1 = false;
let stage2 = false;
let misloads = 0;
let totalWeight = 0;
let totalPackagesSorted = 0;
let isPaused =true; //changed to true to work on intro page without running all the game stuff
let totalBoxesOnTrack = 0;
let level = 'Easy';
let intervalSpeedForBoxesOnTrack = 0;
let scoreTrackerForIntervalSpeedIncrease = 10
let intervalSpeed = 5000;
let easyMode = false;
let mediumMode = false;
let hardMode = false;
let boxesSorted = 0;
let credits = 0;
let waterRecoveryAmount = 5;
let numOfAllowedBoxes = 10;
let stackWeight = 0;
let packageHeld = false;
let currentPackage = null;
let fatigueRecovery = 1000;
let bossLevel = false;
let timePlayed = 0;
let upgradeCounter = 0;
// Sound code
let misloadSound = new Audio('./sounds/misloadSound.wav');
let rightLoad = new Audio('./sounds/rightLoad.wav');
let pickUpPackage = new Audio('./sounds/pickUpPackage.wav');
// End of sound code
// Music code
let initialGameMusic = new Audio('./sounds/initialGameMusic.mp3')
let BackgroundCosmicMusic = new Audio('./sounds/BackgroundCosmicMusic.mp3')
let BackgroundMedievalMusic = new Audio('./sounds/BackgroundMedievalMusic.mp3')
let BackgroundBossLevelMusic = new Audio('./sounds/BackgroundbossLevelMusic.mp3')
let BackgroundRedMusic = new Audio('./sounds/BackgroundRedMusic.mp3')
let BackgroundUniqueMusic = new Audio('./sounds/BackgroundUniqueBackground.wav')
let BackgroundPurpleMusic =  new Audio('./sounds/BackgroundPurpleMusic.mp3')
let BackgroundHalloweenMusic =  new Audio('./sounds/halloweenBackgroundMusic.mp3')
let BackgroundChristmasMusic =  new Audio('./sounds/BackgroundChristmasMusic.mp3')
let BackgroundThanksgivingMusic =  new Audio('./sounds/BackgroundThanksgivingMusic.mp3')
let backgroundMusicCreme =  new Audio('./sounds/backgroundMusicCreme.mp3')//
let backgroundBlueMusic =  new Audio('./sounds/backgroundBlueMusic.mp3')
let backgroundAlienInvasionMusic =  new Audio('./sounds/backgroundAlienInvasionMusic.mp3')
let backgroundSilverMusic =  new Audio('./sounds/backgroundSilverMusic.mp3')
let backgroundCloudMusic =  new Audio('./sounds/backgroundCloudMusic.mp3')
let backgroundRandomMusic =  new Audio('./sounds/backgroundRandomMusic.mp3')
let backgroundCustomMusic =  new Audio('./sounds/backgroundCustomMusic.mp3')
let backgroundUnderTheSeaMusic = new Audio('./sounds/backgroundUnderTheSeaMusic.mp3')
let backgroundPinkMusic = new Audio('./sounds/backgroundPinkMusic.mp3')
let backgroundGradientsMusic = new Audio('./sounds/backgroundGradientsMusic.mp3')

// all must be loop = true or else the song will stop when it is done playing.
BackgroundMedievalMusic.loop = true; 
BackgroundCosmicMusic.loop = true;
BackgroundBossLevelMusic.loop = true;
initialGameMusic.loop = true;
BackgroundRedMusic.loop = true;
BackgroundUniqueMusic.loop = true;
BackgroundPurpleMusic.loop = true;
BackgroundChristmasMusic.loop = true;
BackgroundThanksgivingMusic.loop = true;
backgroundUnderTheSeaMusic.loop = true;
backgroundCloudMusic.loop = true;
backgroundAlienInvasionMusic.loop = true;
backgroundRandomMusic.loop = true;
backgroundCustomMusic.loop = true;
backgroundBlueMusic.loop = true;
backgroundMusicCreme.loop = true;
backgroundGradientsMusic.loop = true;
backgroundPinkMusic.loop = true;

function pauseAllSongs(){
    BackgroundRedMusic.pause();  
    initialGameMusic.pause();
    BackgroundCosmicMusic.pause();
    BackgroundMedievalMusic.pause()
    BackgroundPurpleMusic.pause();
    BackgroundUniqueMusic.pause();
    BackgroundHalloweenMusic.pause();
    BackgroundChristmasMusic.pause();
    backgroundUnderTheSeaMusic.pause();
    backgroundCloudMusic.pause();
backgroundAlienInvasionMusic.pause();
backgroundRandomMusic.pause();
backgroundCustomMusic.pause();
backgroundBlueMusic.pause();
backgroundMusicCreme.pause();
BackgroundThanksgivingMusic.pause();
backgroundSilverMusic.pause();
backgroundCustomMusic.pause();
backgroundGradientsMusic.pause();
backgroundPinkMusic.pause();
}


// End of music
let startingColors = randomGradientsArray;
let choiceForColor = false;
let characterStrength = 150;
let hunger = 0;
let levelThree = false;

// Arrays
// Giving the inpackageidual routes their values from the arrays odd and even arrays
let oddPackages = [];
let evenPackages = [];
let topPallets = [];
let bottomPallets = [];
let topSecondPallets = [];
let bottomSecondPallets = [];
// End of first level
// Start of second level
let midFirstPallets = [];
let midSecondPallets = [];
let midThirdPallets = [];
let midFourthPallets = [];
let oddPackages2ndLevel1Top = [];
let evenPackages2ndLevel2Top = [];
let oddPackages2ndLevelBot1 = [];
let evenPackages2ndLevelBot2 = [];
let oddPackages2ndLevelLeft1 = [];
let evenPackages2ndLevelLeft2 = [];
let oddPackages2ndLevelRight1 = [];
let evenPackages2ndLevelRight2 = [];
// End of second level
// Start of third level
let evenPackagesRingOne  = [];
let oddPackagesRingTwo = [];
let evenPackagesRingThree = [];
let oddPackagesRingFour = [];
let evenPalletsLevelThree = [];
let oddPalletsLevelThree = [];
// End of third level
// Start of boss stage
let oddPalletsBossStageLeft = [];
let evenPalletsBossStageRight = [];
let oddPalletsBossStageLeft2 = [];
let evenPalletsBossStageRight2 = [];
let bossTrack1 = [];
let bossTrack2 = [];
let bossTrack3 = [];
let bossTrack4 = [];
let bossTrack5 = [];
// End of boss stage

// Global Elements
let levelDisplay = document.querySelector('.span-level').innerText = level;
let packagesTop = document.querySelectorAll('.package-track-top');
let packagesBot = document.querySelectorAll('.package-track-bottom');
// Global constant elements
const topTrack = document.querySelector('.package-track-top')
const botTrack = document.querySelector('.package-track-bottom')
// Objects
let stamina = {stamina:100, maxStamina:100};
let fatigue = {fatigue:0, fatigueRecoveryRate:1000};
let stackCount = {stackCount: 0, stackWeight: 0};
//Creating the array of odd and even numbers
let oddPackageNumbers = createArrayOfOddOrEvenNumbersWithinARange('odd', 1000)
let evenPackageNumbers = createArrayOfOddOrEvenNumbersWithinARange('even', 1000)
// Grabbing an odd or even number for each of the routes
let oddRoute1 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute2 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute3 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute4= grabRandomNumFromArray(oddPackageNumbers);
let oddRoute5= grabRandomNumFromArray(oddPackageNumbers);
let oddRoute6= grabRandomNumFromArray(oddPackageNumbers);
let oddRoute7 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute8 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute9 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute10= grabRandomNumFromArray(oddPackageNumbers);
let oddRoute11= grabRandomNumFromArray(oddPackageNumbers);
let oddRoute12= grabRandomNumFromArray(oddPackageNumbers);
let evenRoute1 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute2 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute3 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute4 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute5 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute6 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute7 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute8 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute9 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute10 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute11 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute12 = grabRandomNumFromArray(evenPackageNumbers);
// Putting the routes in a data structure
let evenNumberRoutes = [evenRoute1,evenRoute2,evenRoute3,evenRoute4,evenRoute5, evenRoute6, evenRoute7,evenRoute8,evenRoute9,evenRoute10, evenRoute11,evenRoute12];
let oddNumberRoutes = [oddRoute1,oddRoute2,oddRoute3,oddRoute4,oddRoute5, oddRoute6, oddRoute7,oddRoute8,oddRoute9,oddRoute10,oddRoute11,oddRoute12];

// Making an array of package weights
let packageWeights = [5,10,15,20,30,40,50,75,90,100,5,5,10,10,20,20,30,30,40,40,75,40,90,100, 150,125,125]
// Refer to fatigue recovery interval function
setFatigueRecoveryInterval(fatigue.fatigueRecoveryRate); // once this function starts running it never stops
// end of setFatigueRecoveryInterval //must be running
// Misloads Code
let misloads_log = [];
let fullRandomColorsScheme = [];
let scenes = []
let scene = createIntroImageDescriptionForSceneObject('The time of peace', './images/intro/intro1.jpg', 'The world had been at peace for 1000 years', scenes)
let scene2 = createIntroImageDescriptionForSceneObject('Chaos has erupted', './images/intro/intro2.jpg', 'In an instance the chaos had begun again.', scenes)
let scene3 = createIntroImageDescriptionForSceneObject('The time of change', './images/intro/intro3.jpg', '1000 years have passed and on a quiet day they came back to finish what they started.', scenes)
let scene4 = createIntroImageDescriptionForSceneObject('Restoring peace', './images/intro/intro4.jpg', 'In the legends a hero will arise when the chaos erupts to send it back into the depths of despair.', scenes)
let scene5 = createIntroImageDescriptionForSceneObject('The heroes', './images/intro/intro5.jpg', 'Traveling beyond this point means selecting a hero to drive back the calamity.', scenes)

let sceneCounter = 0;
let sceneIndex = scenes[sceneCounter];
assignIntroImageAndDescriptionForScene(scene, 'h1-intro-title', 'img-intro-scene', 'p-intro-description')
// End of character selection page
let characterArray = [];
let currentCharacter = null;
createIntroImageDescriptionForCharacterObject('Cosmic Hero', './images/characterSelectionPortraits/character6.png', 'A golem whos sworn duty is to project the world from the upcoming chaos.', 'maximum lifting increased', 'fatigue recovery increased', characterArray)
createIntroImageDescriptionForCharacterObject('Earth Hero', './images/characterSelectionPortraits/character1.png', 'A golem whos sworn duty is to project the world from the upcoming chaos.', 'increased fatigue recovery', 'decreased stamina recovery from drinking water', characterArray)
createIntroImageDescriptionForCharacterObject('Water Hero', './images/characterSelectionPortraits/character3.png', 'A golem whos sworn duty is to project the world from the upcoming chaos.', 'all starting stats decreased', 'does not like working', characterArray)
createIntroImageDescriptionForCharacterObject('Air Hero', './images/characterSelectionPortraits/character2.png', 'A golem whos sworn duty is to project the world from the upcoming chaos.', 'maximum lifting greatly increased', 'maximum fatigue recovery and max stamina', characterArray)
createIntroImageDescriptionForCharacterObject('Dark Hero', './images/characterSelectionPortraits/character5.png', 'A golem whos sworn duty is to project the world from the upcoming chaos.', 'all starting stats decreased', 'does not like working', characterArray)
createIntroImageDescriptionForCharacterObject('Light Hero', './images/characterSelectionPortraits/character7.png', 'A golem whos sworn duty is to project the world from the upcoming chaos.', 'all starting stats decreased', 'does not like working', characterArray)
createIntroImageDescriptionForCharacterObject('Fire Hero', './images/characterSelectionPortraits/character4.png', 'A golem whos sworn duty is to project the world from the upcoming chaos.', 'maximum lifting greatly increased', 'maximum fatigue recovery and max stamina', characterArray)
assignIntroImageAndDescriptionForCharacter(characterArray[characterArray.length-1], 'h3-character-name-selection'
        ,'img-character-selection','p-desc-character-selection',
        'span-character-benefits-selection','span-character-cons-selection')
        let characterSelectionCounter = -1;
        let characterSelectorIndex = characterArray[characterSelectionCounter];
        currentCharacter = characterArray[characterArray.length - 1];
// End of the character selection page
// Changing the color pallete during game
let allPackages = null;
// Random gradients theme

let allColorSchemes = [pinkRetroSteamPink, purpleColorsArray, 
    blueColorsArray,  goldSilverColorsArray, redColorsArray, cremeColorSchema, halloweenColorsArray , christmasColorsArray,
    thanksgivingColorsArray, medievalFantasyColorsArray, underWaterSeaColors, cosmicThemedColors, alienInvasionColors, uniquePalette
 ];



function creatingColorMatchLi(startingColors){
        document.querySelector('.div-color-matches-container').innerHTML = '';
        document.querySelector('.div-pallet-colors').innerHTML = '';
startingColors.forEach((startingColor, i)=>{
    //for the pallet numbers and their colors
    let divPalletNumberAndColor = document.createElement('div');
    let pPalletNumberAndColor = document.createElement('span');
    pPalletNumberAndColor.innerText = `Pallet: ${i} - ${startingColor.color}`;
    divPalletNumberAndColor.appendChild(pPalletNumberAndColor);
    document.querySelector('.div-pallet-colors').appendChild(divPalletNumberAndColor);

    //for the color matching
let divStartingColorName = document.createElement('div')
 divStartingColorName.innerText = `${startingColor.color}: `;
let spanForColorCount = document.createElement('span');
spanForColorCount.innerText = 0
divStartingColorName.appendChild(spanForColorCount);
let parent = document.querySelector('.div-color-matches-container')
parent.appendChild(divStartingColorName);

})
}



let colorMatchMap =
[
        0,0,0,0,0,0,
        0,0,0,0,0,0,
        0,0,0,0,0,0,
        0,0,0,0,0,0
]


function updateColorWhenMatched(numberToUpdate){
    let numberOfBoxes = stackCount.stackCount;
        colorMatchMap[numberToUpdate] += numberOfBoxes;
console.log(document.querySelectorAll('.div-color-matches-container div span'));
document.querySelectorAll('.div-color-matches-container div span')[numberToUpdate].innerText = colorMatchMap[numberToUpdate];
}

creatingColorMatchLi(startingColors);


function compactUpdateWhenColorMatched(pallet){
    if(pallet.routeNum === evenRoute1){
        updateColorWhenMatched(0)
    }
    if(pallet.routeNum === evenRoute2){
        updateColorWhenMatched(1)
    }
    if(pallet.routeNum === evenRoute3){
        updateColorWhenMatched(2)
    }
    if(pallet.routeNum === evenRoute4){
        updateColorWhenMatched(3)
    }
    if(pallet.routeNum === evenRoute5){
        updateColorWhenMatched(4)
    }
    if(pallet.routeNum === evenRoute6){
        updateColorWhenMatched(5)
    }
    if(pallet.routeNum === evenRoute7){
        updateColorWhenMatched(6)
    }
    if(pallet.routeNum === evenRoute8){
        updateColorWhenMatched(7)
    }
    if(pallet.routeNum === evenRoute9){
        updateColorWhenMatched(8)
    }
    if(pallet.routeNum === evenRoute10){
        updateColorWhenMatched(9)
    }
    if(pallet.routeNum === evenRoute11){
        updateColorWhenMatched(10)
    }
    if(pallet.routeNum === evenRoute12){
        updateColorWhenMatched(11)
    }
    if(pallet.routeNum === oddRoute1){
        updateColorWhenMatched(12)
    }
    if(pallet.routeNum === oddRoute2){
        updateColorWhenMatched(13)
    }
    if(pallet.routeNum === oddRoute3){
        updateColorWhenMatched(14)
    }
    if(pallet.routeNum === oddRoute4){
        updateColorWhenMatched(15)
    }
    if(pallet.routeNum === oddRoute5){
        updateColorWhenMatched(16)
    }
    if(pallet.routeNum === oddRoute6){
        updateColorWhenMatched(17)
    }
    if(pallet.routeNum === oddRoute7){
        updateColorWhenMatched(18)
    }
    if(pallet.routeNum === oddRoute8){
        updateColorWhenMatched(19)
    }
    if(pallet.routeNum === oddRoute9){
        updateColorWhenMatched(20)
    }
    if(pallet.routeNum === oddRoute10){
        updateColorWhenMatched(21)
    }
    if(pallet.routeNum === oddRoute11){
        updateColorWhenMatched(22)
    }
    if(pallet.routeNum === oddRoute12){
        updateColorWhenMatched(23)
    }
}

// Making the storyline functions that will bring the character to the outside world which will ->
// consist of the gym to gain strength, home to rest, and the cafeteria to fix hunger. Once the rest button is hit at home, ->
// the player will be be sent back to the game after a small cutscene
updatePackageCountOnTracker();
function raiseHunger(){
    let hungerInterval = setInterval(()=>{
        if(hunger >= 100){
            console.log('Hunger Limit has been reached.')
            clearInterval(hungerInterval);
            hunger = 0;
        } else {
            hunger+=1;
            console.log(hunger);
        }
    },100);
    
}
let storyMode = false;
if(storyMode === true){
    raiseHunger();
}





    // Custom color picking
    let allColors = [];

    function extractAllColorsIntoArray(allColors, colorsToBeExtracted){
        colorsToBeExtracted.forEach((color)=>{
            allColors.push(color);
        })
     
    }
  
extractAllColorsIntoArray(allColors, redColorsArray);
extractAllColorsIntoArray(allColors, blueColorsArray);
extractAllColorsIntoArray(allColors, purpleColorsArray);
extractAllColorsIntoArray(allColors, pinkRetroSteamPink);
extractAllColorsIntoArray(allColors, goldSilverColorsArray);
extractAllColorsIntoArray(allColors, pinkRetroSteamPink);
extractAllColorsIntoArray(allColors, cremeColorSchema)
extractAllColorsIntoArray(allColors, halloweenColorsArray)
extractAllColorsIntoArray(allColors, christmasColorsArray)
extractAllColorsIntoArray(allColors, thanksgivingColorsArray)
extractAllColorsIntoArray(allColors, medievalFantasyColorsArray)
extractAllColorsIntoArray(allColors, underWaterSeaColors)
extractAllColorsIntoArray(allColors, cosmicThemedColors)
extractAllColorsIntoArray(allColors, alienInvasionColors)
extractAllColorsIntoArray(allColors, fullRandomColorsScheme)
extractAllColorsIntoArray(allColors, retroSteamPunk)
// extractAllColorsIntoArray(allColors, blackWhiteGrayColorsArray)

function displayAllColors(allColors){
    allColors.forEach((color, i)=>{
        let divColor = document.createElement('div');
        divColor.classList.add('divColor');
        let divColor_ = document.createElement('div');
        divColor_.classList.add('div-custom-color')
        let pColorName = document.createElement('p');
        pColorName.classList.add('p-all-names-for-custom-selection')
        let code = document.createElement('div');
        code.classList.add('div-custom-color-code')
        code.classList.add('hide');
        code.innerText = i;

        pColorName.innerText = color.color;
        divColor_.style.backgroundColor = color.CssStringValue;
        divColor.appendChild(pColorName);
        divColor_.appendChild(code)
        divColor.appendChild(divColor_);
        document.querySelector('.div-custom-colors-selection').appendChild(divColor);
    })
    
}

displayAllColors(allColors);
let lastIndexBeforeColorRemoval = null;
let indexForColor = 0;
let customColorChoices = [];
// Left off at making it so when a color is picked it is added to the color selection at the top.
let divForCustomColors = document.querySelectorAll('.div-selection-color')
let pAllNamesForAllColors = document.querySelectorAll('.p-all-names-for-custom-selection')
let pAllNamesForCustomColors = document.querySelectorAll('.div-selection-custom-colors .p-custom-color-selection-name');
let answer = null;
let currentColorNames = [];
document.querySelectorAll('.divColor').forEach((colorDiv, i)=>{
    colorDiv.addEventListener('click', ()=>{
        if(indexForColor < 24){
            //Creating the html color representation color
        let divSelection = document.createElement(
            'div'
        )
        divSelection.classList.add('div-selection')
        
        let pCustomColorNameSelection = document.createElement(
            'p'
        )
        let divSelectionColor = document.createElement(
            'div'
        )
        divSelectionColor.classList.add('div-selection-color');
        divSelectionColor.style.backgroundColor = allColors[i].CssStringValue;
        pCustomColorNameSelection.innerText = allColors[i].color;
        divSelection.appendChild(pCustomColorNameSelection);
        divSelection.appendChild(divSelectionColor);
        document.querySelector('.div-player-selected-custom-colors').appendChild(divSelection);
        customColorChoices.push(allColors[i]);
        indexForColor += 1;
document.querySelector('.span-number-of-selected-custom-colors').innerText = indexForColor;
// end of html color represenation
divSelection.addEventListener('click', ()=>{
    // Get the parent NodeList (assuming divSelection is a child of its parent)
    let index = Array.prototype.indexOf.call(divSelection.parentNode.children, divSelection); // this is a god level line of code.

    // Remove the clicked element
    divSelection.remove();

    // Use the index to remove the correct item from the array
    let removedColor = customColorChoices.splice(index, 1);
   
    indexForColor -= 1;

    document.querySelector('.span-number-of-selected-custom-colors').innerText = indexForColor;
})


              
            }
            if(indexForColor === 24){ // had to nest this condition for the array to be full and for it to work
                document.querySelector('.div-custom-color-selection-container').classList.add('hide');
                document.querySelector('.div-instructions').classList.remove('hide');
                startingColors = customColorChoices;
                produceSampleSetOfPalette(startingColors);
                creatingColorMatchLi(startingColors)
            
        }
    })
   
})
let customColorsBoolean = false;



function boxLimitReturnForLevel2(arr, num){
if(arr.length >= num){
    return true;
}
}

let levelOne = false;
let levelTwo = false;











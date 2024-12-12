
// btn-stage-2


document.querySelector('.btn-easy-mode').addEventListener('click',()=>{
    easyMode = true;
    document.querySelector('.span-level').innerText = 'Easy'
    endGame = 300;
    if(choiceForColor != true){
        alert('Please choose a color theme.');
        return;
    } else if(levelTwo === true){
        document.querySelector('.div-container-all-l2').classList.remove('hide')
    easyMode = true;
    createPallet(evenRoute1,midFirstPallets)
createPallet(evenRoute2,midFirstPallets)
createPallet(evenRoute3,midFirstPallets)
createPallet(evenRoute4,midFirstPallets)
createPallet(evenRoute5,midFirstPallets)
createPallet(evenRoute6,midFirstPallets)

createPallet(oddRoute1, midSecondPallets)
createPallet(oddRoute2, midSecondPallets)
createPallet(oddRoute3, midSecondPallets)
createPallet(oddRoute4, midSecondPallets)
createPallet(oddRoute5, midSecondPallets)
createPallet(oddRoute6, midSecondPallets)

createPallet(evenRoute7, midThirdPallets)
createPallet(evenRoute8, midThirdPallets)
createPallet(evenRoute9, midThirdPallets)
createPallet(evenRoute10, midThirdPallets)
createPallet(evenRoute11, midThirdPallets)
createPallet(evenRoute12, midThirdPallets)



createPallet(oddRoute7,midFourthPallets)
createPallet(oddRoute8,midFourthPallets)
createPallet(oddRoute9,midFourthPallets)
createPallet(oddRoute10,midFourthPallets)
createPallet(oddRoute11,midFourthPallets)
createPallet(oddRoute12,midFourthPallets)

runPallet(midFirstPallets, 'div-pallet-mid-1');
runPallet(midSecondPallets, 'div-pallet-mid-2');
runPallet(midThirdPallets, 'div-pallet-mid-3');
runPallet(midFourthPallets, 'div-pallet-mid-4');
document.querySelector('.div-instructions').remove();
document.querySelector('.div-game-body').classList.remove('hide');
isPaused = false;
setInterval(()=>{
    if(!boxLimitReturnForLevel2(oddPackages2ndLevel1Top, 10)){
        insertPackageIntoTrack('div-track-top-l2')
    } else {
       return;
    }
    }, 5000)
    
    setInterval(()=>{
        if(!boxLimitReturnForLevel2(evenPackages2ndLevel2Top, 10)){
            insertPackageIntoTrack('div-track-top-2nd-l2')
        } else {
            return;
        }
        }, 4000)


            setInterval(()=>{
                if(!boxLimitReturnForLevel2(oddPackages2ndLevelLeft1, 5)){
                    insertPackageIntoTrack('div-track-left-side-l2')
                } else {
                    return;
                }
                }, 6000)

        setInterval(()=>{
            if(!boxLimitReturnForLevel2(evenPackages2ndLevelLeft2, 5)){
                insertPackageIntoTrack('div-track-left-side-2nd-l2')
            } else {
                return;
            }
            }, 9000)

        

        
            
            setInterval(()=>{
                if(!boxLimitReturnForLevel2(oddPackages2ndLevelRight1, 5)){
                    insertPackageIntoTrack('div-track-right-side-l2')
                } else {
                    return;
                }
                }, 8000)

                setInterval(()=>{
                    if(!boxLimitReturnForLevel2(evenPackages2ndLevelRight2, 5)){
                        insertPackageIntoTrack('div-track-right-side-2nd-l2')
                    } else {
                        return;
                    }
                    }, 7000)

    

            setInterval(()=>{
                if(!boxLimitReturnForLevel2(oddPackages2ndLevelBot1, 10)){
                    insertPackageIntoTrack('div-track-bottom-l2')
                } else {
                   return;
                }
                }, 6000)
                
                setInterval(()=>{
                    if(!boxLimitReturnForLevel2(evenPackages2ndLevelBot2, 10)){
                        insertPackageIntoTrack('div-track-bottom-2nd-l2')
                    } else {
                        return;
                    }
                    }, 5000)
        
} else if(levelOne===true) {
    easyMode = true;
    document.querySelector('.level-one').classList.remove('hide')
    removeFromGameDisplay(document.querySelector('.div-instructions'));
    document.querySelector('.div-game-body').classList.remove('hide');
    isPaused = false;
    let levelOne = setInterval(()=>{
        setBoxesOnTrack('top');
        setBoxesOnTrack('bot');
       
}, 4000);
//Refer to createPallet function
createPallet(evenRoute1,topPallets)
createPallet(evenRoute2,topPallets)
createPallet(evenRoute3,topPallets)
createPallet(evenRoute4,topPallets)
createPallet(evenRoute5,topPallets)
createPallet(evenRoute6,topPallets)

createPallet(evenRoute7,topSecondPallets)
createPallet(evenRoute8,topSecondPallets)
createPallet(evenRoute9,topSecondPallets)
createPallet(evenRoute10,topSecondPallets)
createPallet(evenRoute11,topSecondPallets)
createPallet(evenRoute12,topSecondPallets)



createPallet(oddRoute1,bottomPallets)
createPallet(oddRoute2,bottomPallets)
createPallet(oddRoute3,bottomPallets)
createPallet(oddRoute4,bottomPallets)
createPallet(oddRoute5,bottomPallets)
createPallet(oddRoute6,bottomPallets)

createPallet(oddRoute7,bottomSecondPallets)
createPallet(oddRoute8,bottomSecondPallets)
createPallet(oddRoute9,bottomSecondPallets)
createPallet(oddRoute10,bottomSecondPallets)
createPallet(oddRoute11,bottomSecondPallets)
createPallet(oddRoute12,bottomSecondPallets)


// Refer to update packageCountOnTracker function
updatePackageCountOnTracker();

// Refer to runPallet function
runPallet(topPallets, 'top');
runPallet(bottomPallets, 'bot')
runPallet(topSecondPallets, 'top2nd')
runPallet(bottomSecondPallets, 'bot2nd')
} else  if(levelThree ===  true){
    easyMode = true;
    document.querySelector('.ring-circle-container').classList.remove('hide')
    removeFromGameDisplay(document.querySelector('.div-instructions'));
    document.querySelector('.div-game-body').classList.remove('hide');
    isPaused = false;
    setInterval(()=>{
        if(!isPaused){

            insertPackageIntoTrack('ring-2')
        }
    },6000)
    setInterval(()=>{
        if(!isPaused){

            insertPackageIntoTrack('ring-3')
        }
    },6000)
    setInterval(()=>{
        if(!isPaused){

            
        }
  insertPackageIntoTrack('ring-4')
    },6000)
    setInterval(()=>{
        if(!isPaused){

            insertPackageIntoTrack('ring-5')
            
        }
    },6000)
   
createPallet(evenRoute1,oddPalletsLevelThree)
createPallet(evenRoute2,oddPalletsLevelThree)
createPallet(evenRoute3,oddPalletsLevelThree)
createPallet(evenRoute4,oddPalletsLevelThree)
createPallet(evenRoute5,oddPalletsLevelThree)
createPallet(evenRoute6,oddPalletsLevelThree)

createPallet(evenRoute7,oddPalletsLevelThree)
createPallet(evenRoute8,oddPalletsLevelThree)
createPallet(evenRoute9,oddPalletsLevelThree)
createPallet(evenRoute10,oddPalletsLevelThree)
createPallet(evenRoute11,oddPalletsLevelThree)
createPallet(evenRoute12,oddPalletsLevelThree)



createPallet(oddRoute1,evenPalletsLevelThree)
createPallet(oddRoute2,evenPalletsLevelThree)
createPallet(oddRoute3,evenPalletsLevelThree)
createPallet(oddRoute4,evenPalletsLevelThree)
createPallet(oddRoute5,evenPalletsLevelThree)
createPallet(oddRoute6,evenPalletsLevelThree)

createPallet(oddRoute7,evenPalletsLevelThree)
createPallet(oddRoute8,evenPalletsLevelThree)
createPallet(oddRoute9,evenPalletsLevelThree)
createPallet(oddRoute10,evenPalletsLevelThree)
createPallet(oddRoute11,evenPalletsLevelThree)
createPallet(oddRoute12,evenPalletsLevelThree)
    runPallet(topPallets, 'div-pallet-level-three-1');
runPallet(evenPalletsLevelThree, 'div-pallet-level-three-1');
runPallet(oddPalletsLevelThree, 'div-pallet-level-three-2')

}

});

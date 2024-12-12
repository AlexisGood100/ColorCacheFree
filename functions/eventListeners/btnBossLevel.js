
document.querySelector('.btn-stage-boss-level').addEventListener('click', ()=>{
  document.querySelector('.span-level').innerText = 'Boss'
    bossLevel = true;
    document.querySelector('.div-level-boss-fight-container').classList.remove('hide');
    startingColors = bossLevelColors;
 
    removeFromGameDisplay(document.querySelector('.div-instructions'));
    document.querySelector('.div-game-body').classList.remove('hide');
    isPaused = false;
    
    pauseAllSongs();
BackgroundBossLevelMusic.play();
//Refer to createPallet function
createPallet(oddRoute1,oddPalletsBossStageLeft)
createPallet(oddRoute2,oddPalletsBossStageLeft)
createPallet(oddRoute3,oddPalletsBossStageLeft)
createPallet(oddRoute4,oddPalletsBossStageLeft)
createPallet(oddRoute5,oddPalletsBossStageLeft)
createPallet(oddRoute6,oddPalletsBossStageLeft)
createPallet(oddRoute7,oddPalletsBossStageLeft2)
createPallet(oddRoute8,oddPalletsBossStageLeft2)
createPallet(oddRoute9,oddPalletsBossStageLeft2)
createPallet(oddRoute10,oddPalletsBossStageLeft2)
createPallet(oddRoute11,oddPalletsBossStageLeft2)
createPallet(oddRoute12,oddPalletsBossStageLeft2)



createPallet(evenRoute1,evenPalletsBossStageRight)
createPallet(evenRoute2,evenPalletsBossStageRight)
createPallet(evenRoute3,evenPalletsBossStageRight)
createPallet(evenRoute4,evenPalletsBossStageRight)
createPallet(evenRoute5,evenPalletsBossStageRight)
createPallet(evenRoute6,evenPalletsBossStageRight)
createPallet(evenRoute7,evenPalletsBossStageRight2)
createPallet(evenRoute8,evenPalletsBossStageRight2)
createPallet(evenRoute9,evenPalletsBossStageRight2)
createPallet(evenRoute10,evenPalletsBossStageRight2)
createPallet(evenRoute11,evenPalletsBossStageRight2)
createPallet(evenRoute12,evenPalletsBossStageRight2)



    let interval1 = setInterval(()=>{
        if(bossTrack1.length >= 8){
          alert('You have lost.')
          clearInterval(1)
          setTimeout(()=>{
                 window.location.href = '/packageHandling/index.html';
      
          }, 2000)
          return;
        }
        if(!isPaused){
          insertPackageIntoTrack('boss-track-1')
        }
    },6000)

    let interval2 = setInterval(()=>{
         if(bossTrack2.length >= 8){
          alert('You have lost.')
          clearInterval(interval2)
          setTimeout(()=>{
                     window.location.href = '/packageHandling/index.html';
          }, 2000)
    return;
  }
  if(!isPaused){
    insertPackageIntoTrack('boss-track-2')
  }
    },3000)

   let interval3 = setInterval(()=>{
         if(bossTrack3.length >= 8){
          clearInterval(interval3)
          alert('You have lost.')
          setTimeout(()=>{
                   window.location.href = '/packageHandling/index.html';
          }, 2000)
    return;
  }
  if(!isPaused){
    insertPackageIntoTrack('boss-track-3')
  }
          },4000)


     let interval4 = setInterval(()=>{
         if(bossTrack4.length >= 8){
          alert('You have lost.')
          clearInterval(interval4)
          setTimeout(()=>{
                   window.location.href = '/packageHandling/index.html';
          }, 2000)
    return;
  }  
  if(!isPaused){
    insertPackageIntoTrack('boss-track-4')
  }
              },5000)



         let interval5 = setInterval(()=>{
         if(bossTrack5.length >= 8){
          alert('You have lost.')
          clearInterval(interval5)
          setTimeout(()=>{
                   window.location.href = '/packageHandling/index.html';
          }, 2000)
    return;
  }
  if(!isPaused){
    insertPackageIntoTrack('boss-track-5')
  }
                  },6000)


// Refer to update packageCountOnTracker function
updatePackageCountOnTracker();

// Refer to runPallet function
runPallet(oddPalletsBossStageLeft, 'div-boss-stage-pallets-left')
runPallet(evenPalletsBossStageRight, 'div-boss-stage-pallets-right')
runPallet(oddPalletsBossStageLeft2, 'div-boss-stage-pallets-left-2')
runPallet(evenPalletsBossStageRight2, 'div-boss-stage-pallets-right-2')
document.querySelector('.span-current-theme').innerText = 'Boss Stage';
})
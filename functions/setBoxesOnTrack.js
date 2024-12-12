function setBoxesOnTrack(topOrBottom){
  
    if(topOrBottom === 'top'){
            if(isPaused || stopTrackIfTooManyBoxesOnIt(findTotalBoxesOnTrack(oddPackages, evenPackages), numOfAllowedBoxes)){
                
                return;
            } else {
                insertPackageIntoTrack('top')
if(false){

} else {

    if(isPaused || stopTrackIfTooManyBoxesOnIt(findTotalBoxesOnTrack(oddPackages, evenPackages), numOfAllowedBoxes)){

         return;
    } else {
        insertPackageIntoTrack('bot')
    }

}
    }
}
}
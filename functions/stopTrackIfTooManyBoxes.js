function stopTrackIfTooManyBoxesOnIt(numOfBoxesOntrack, limit){
    if(numOfBoxesOntrack >= limit){
        // console.log('There are too many boxes on the track. Production has been frozen.')
        return true;
    } else if(numOfBoxesOntrack <= limit){
        // console.log(`There are currently ${findTotalBoxesOnTrack(oddPackages, evenPackages)}`);
        return false;
    }
    }
    
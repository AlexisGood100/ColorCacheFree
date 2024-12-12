function updatePackageCountOnTracker(){
    setInterval(()=>{
        if(isPaused){
            return;
        } else if(levelOne === true){
            findTotalBoxesOnTrack(evenPackages, oddPackages);
            document.querySelector('.span-total-boxes-on-track').innerText = totalBoxesOnTrack;
        } else if(levelTwo === true){
          
        
            let totalLength = oddPackages2ndLevelBot1.length + oddPackages2ndLevel1Top.length
            + evenPackages2ndLevel2Top.length + oddPackages2ndLevelLeft1.length
            + evenPackages2ndLevelLeft2.length + evenPackages2ndLevelBot2.length 
            + evenPackages2ndLevelRight2.length + oddPackages2ndLevelRight1.length;

            document.querySelector('.span-total-boxes-on-track').innerText = totalLength;
        }else if(levelThree === true){
          
        let totalLength = evenPackagesRingThree.length + evenPalletsLevelThree.length
        + oddPackagesRingFour.length + oddPalletsLevelThree.length
        

        document.querySelector('.span-total-boxes-on-track').innerText = totalLength;
    }
    },500);
}
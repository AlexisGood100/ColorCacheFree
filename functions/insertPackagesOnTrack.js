// Inserting the boxes onto the track.
function insertPackageIntoTrack(topOrBot){

    let oddRouteNum = grabRandomNumFromArray(oddNumberRoutes);
    let evenRouteNum = grabRandomNumFromArray(evenNumberRoutes);
    let packageWeight = grabRandomNumFromArray(packageWeights)
    //start of the first track
        if(topOrBot === 'top'){
           let evenPackage = createPackage(evenRouteNum, packageWeight);
           evenPackages.push(evenPackage);
           createDisplayForPackage(evenPackage, topOrBot);
    
        } else if(topOrBot === 'bot'){
           let oddPackage = createPackage(oddRouteNum, packageWeight);
           oddPackages.push(oddPackage);
           createDisplayForPackage(oddPackage, topOrBot);
    //end of the first track
        }
 //start of the second track
     else if(topOrBot === 'div-track-top-l2'){
        let oddPackage = createPackage(oddRouteNum, packageWeight);
        oddPackages2ndLevel1Top.push(oddPackage);
        createDisplayForPackage(oddPackage, topOrBot);
 
     }
     else if(topOrBot === 'div-track-top-2nd-l2'){
        let evenPackage = createPackage(evenRouteNum, packageWeight);
        evenPackages2ndLevel2Top.push(evenPackage);
        createDisplayForPackage(evenPackage, topOrBot);
 
     }
     else if(topOrBot === 'div-track-left-side-l2'){
        let oddPackage = createPackage(oddRouteNum, packageWeight);
        oddPackages2ndLevelLeft1.push(oddPackage);
        createDisplayForPackage(oddPackage, topOrBot);
 
     }
     else if(topOrBot === 'div-track-left-side-2nd-l2'){
        let evenPackage = createPackage(evenRouteNum, packageWeight);
        evenPackages2ndLevelLeft2.push(evenPackage);
        createDisplayForPackage(evenPackage, topOrBot);
 
     }
     else if(topOrBot === 'div-track-right-side-l2'){
        let oddPackage = createPackage(oddRouteNum, packageWeight);
        oddPackages2ndLevelRight1.push(oddPackage);
        createDisplayForPackage(oddPackage, topOrBot);
 
     }
     else if(topOrBot === 'div-track-right-side-2nd-l2'){
        let evenPackage = createPackage(evenRouteNum, packageWeight);
        evenPackages2ndLevelRight2.push(evenPackage);
        createDisplayForPackage(evenPackage, topOrBot);
 
     }
     else if(topOrBot === 'div-track-bottom-l2'){
        let oddPackage = createPackage(oddRouteNum, packageWeight);
        oddPackages2ndLevelBot1.push(oddPackage);
        createDisplayForPackage(oddPackage, topOrBot);
     }
     else if(topOrBot === 'div-track-bottom-2nd-l2'){
      let evenPackage = createPackage(evenRouteNum, packageWeight);
      evenPackages2ndLevelBot2.push(evenPackage);
      createDisplayForPackage(evenPackage, topOrBot);
   }

   else if(topOrBot === 'ring-2'){
      let oddPackage = createPackage(oddRouteNum, packageWeight);
      oddPackagesRingTwo.push(oddPackage);
      createDisplayForPackage(oddPackage, topOrBot);
   }
   else if(topOrBot === 'ring-3'){
      let evenPackage = createPackage(evenRouteNum, packageWeight);
      evenPackagesRingThree.push(evenPackage);
      createDisplayForPackage(evenPackage, topOrBot);
   }
   else if(topOrBot === 'ring-4'){
      let oddPackage = createPackage(oddRouteNum, packageWeight);
      oddPackagesRingFour.push(oddPackage);
      createDisplayForPackage(oddPackage, topOrBot);
   } else if(topOrBot === 'ring-5'){
      let oddPackage = createPackage(oddRouteNum, packageWeight);
      oddPackagesRingFour.push(oddPackage);
      createDisplayForPackage(oddPackage, topOrBot);
   }
   // end of third level
   //start of last boss
   else if(topOrBot === 'boss-track-1'){
      let oddPackage = createPackage(oddRouteNum, packageWeight);
      bossTrack1.push(oddPackage);
      createDisplayForPackage(oddPackage, topOrBot);
   
} 
else if(topOrBot === 'boss-track-2'){
   let evenPackage = createPackage(evenRouteNum, packageWeight);
   bossTrack2.push(evenPackage);
   createDisplayForPackage(evenPackage, topOrBot);

} 
else if(topOrBot === 'boss-track-3'){
   let oddPackage = createPackage(oddRouteNum, packageWeight);
   bossTrack3.push(oddPackage);
   createDisplayForPackage(oddPackage, topOrBot);

}
else if(topOrBot === 'boss-track-4'){
   let evenPackage = createPackage(evenRouteNum, packageWeight);
   bossTrack4.push(evenPackage);
   createDisplayForPackage(evenPackage, topOrBot);

} 
else if(topOrBot === 'boss-track-5'){
   let oddPackage = createPackage(oddRouteNum, packageWeight);
   bossTrack5.push(oddPackage);
   createDisplayForPackage(oddPackage, topOrBot);

}  

//end of boss level
 
   
     //end of the second track
     else {
            console.log('error');
        }
        assignIDsToPackages(oddPackages);
        assignIDsToPackages(evenPackages);
        assignIDsToPackages(oddPackages2ndLevel1Top);
        assignIDsToPackages(evenPackages2ndLevel2Top);
        assignIDsToPackages(oddPackages2ndLevelRight1);
        assignIDsToPackages(evenPackages2ndLevel2Top);
        assignIDsToPackages(oddPackages2ndLevelLeft1);
        assignIDsToPackages(evenPackages2ndLevelLeft2);
        assignIDsToPackages(oddPackages2ndLevelBot1);
        assignIDsToPackages(evenPackages2ndLevelBot2);
        assignIDsToPackages(bossTrack1);
        assignIDsToPackages(bossTrack2);
        assignIDsToPackages(bossTrack3);
        assignIDsToPackages(bossTrack4);
        assignIDsToPackages(bossTrack5);
   

    }
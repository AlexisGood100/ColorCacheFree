function addMisloadToLog(misloads_log, packageRouteNumber, stackCount, misloadedPalletNumber){
    if(stackCount.stackCount > 1){
        for(let i = 1; i<stackCount.stackCount;i++){
        let misload = {
            routeNumber: packageRouteNumber,
            misloadedTo: misloadedPalletNumber,
            date: Date.now()
        }
        insertMisloadElementIntoMisloadContainer(packageRouteNumber, misloadedPalletNumber)
        misloads_log.push(misload);
    }
} else {
    let misload = {
        routeNumber: packageRouteNumber,
        date: Date.now()
    }
    insertMisloadElementIntoMisloadContainer(packageRouteNumber, misloadedPalletNumber)
    misloads_log.push(misload);
}
};
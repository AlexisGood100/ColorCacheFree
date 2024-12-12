function runPallet(palletArray, topOrBottom){
    palletArray.forEach((pallet)=>{
        createPalletDisplay(pallet, topOrBottom);
    });
}
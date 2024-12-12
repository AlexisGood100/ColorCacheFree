// document.querySelector('.btn-upgrade-random-color-change').addEventListener('click', ()=>{
//     let creditReduction = deductCreditsForColorChange(oddPackages, evenPackages);
//     if(credits >= creditReduction){
//         removeAllBackgroundFromLevelOne();
//         removeAllBackgroundFromLevelThree();
//         credits -= creditReduction;
//         document.querySelector('.span-current-credits').innerText = credits;
//         changeColorPalletePackages(allColorSchemes[Math.floor(Math.random() * allColorSchemes.length)]); //picking random color scheme from aall color scheme
//         document.querySelector('.p-upgrade-price-number-of-boxes-on-track').innerText = deductCreditsForColorChange(oddPackages, evenPackages)
//         colorMatchMap.forEach((value)=>{
//             value = 0;
//         })
//         changeThemeDisplay(startingColors);
//         creatingColorMatchLi(startingColors);
//     } else {
//         alert('You need more credits to complete this transaction.');
//     }


//     // I need to see if i can generalize the if conditions into a function forEach to remove all the stuff that doesn't get removed 
// })// when the color array is switched.
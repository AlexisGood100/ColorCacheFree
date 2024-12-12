function changeColorPalletePackages(colorPalleteArray){

    startingColors = colorPalleteArray;
    changeColorForEachPallet('div-top div', 'div-top-2nd div', 'div-bottom div', 'div-bottom-2nd div');
    
    document.querySelectorAll('.div-track-top div').forEach((div)=>{
     div.remove();
     })

    document.querySelectorAll('.div-track-bottom div').forEach((div)=>{
      div.remove();
    })

    

};

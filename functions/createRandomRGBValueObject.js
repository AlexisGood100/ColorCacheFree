function createRandomRGBValueObject(range1, range2, range3) {
    // Generate random values for r, g, b
    let r = Math.floor(Math.random() * range1);
    let g = Math.floor(Math.random() * range2);
    let b = Math.floor(Math.random() * range3);  

    // Create the RGB object
    let rgbObject = {
        color: `rgb(${r}, ${g}, ${b})`, // Correctly formatted RGB string
        CssStringValue: `rgb(${r}, ${g}, ${b})` // Correctly formatted CSS string
    };

    return rgbObject; // Return the RGB object
}
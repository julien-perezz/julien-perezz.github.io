// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
applyFilter(reddify) ;
applyFilterNoBackground(decreaseBlue); 
applyFilterNoBackground(increaseGreenByBlue);




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////





// TODO 1 & 2: Create the applyFilter function here
function applyFilter(filterFunction) {
for ( i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
        var rgbString = image[i][j];
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers); 
        rgbString = rgbArrayToString(rgbNumbers);
        image[i][j] = rgbString;
    }
}
}; 

// TODO 5: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
    for ( i = 0; i < image.length; i++) {
        for (j = 0; j < image[i].length; j++) {
            var rgbString = image[i][j];
            var rgbNumbers = rgbStringToArray(rgbString);
            if (rgbString !== rgbArrayToString(rgbStringToArray(image[0][0]))) {
                filterFunction(rgbNumbers); 
            }
              
             
            rgbString = rgbArrayToString(rgbNumbers);
            image[i][j] = rgbString; 
            
        }
    }
}

// TODO 3 & 4: Create filter functions
function reddify(array) {
    array[RED] = 255;
    
}
function decreaseBlue(array) {
    array[BLUE] = Math.max(0, array[BLUE] - 70); 
}
function increaseGreenByBlue(array) {
    array[GREEN] = Math.min(255, array[GREEN] + array[BLUE]); 
}

// CHALLENGE code goes below here

"use strict"

var i = 1

while (i < 65537) {
    i *= 2;
    console.log(i)
}


//function cones() {
    var allCones = Math.floor(Math.random() * 50) + 50;


    do {
        var coneSold = Math.floor(Math.random() * 5) + 1;
        if (coneSold <= allCones) {
            console.log(coneSold + ' cones sold...');
            allCones -= coneSold;
        } else {
            console.log('Cannot sell you ' + coneSold + ' I only have ' + allCones + "...");
        }
    } while (allCones > 0)
    console.log('Yay! I sold them all!');
//}
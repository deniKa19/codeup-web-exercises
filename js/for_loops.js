"use strict"

//function button() {
    //var num = parseFloat(prompt('Please choose a number'));
    //showMultiplicationTable(num);
//}
function showMultiplicationTable(input) {
    for (var i = 1; i < 11; i++) {
        console.log(input + " x " + i + ' = ' + input * i);
    }
}
showMultiplicationTable(7)

var allNumber;
for (var i = 0; i < 10; i++) {
    allNumber = Math.floor(Math.random() * 180) + 20;
    //console.log(allNumber)
    if (i % 2 === 0) {
        console.log(allNumber + ' is even');
    } else {
        console.log(allNumber + ' is odd');
    }
}


//this sets up a pyramid structure
var i,x,y;
for (i = 0; i < 10; i++) {
    for (x =0; x < i; x++) {
        y = y+(i);
    }
    console.log(y);
    y='';
}


var backwardsByFive = function () {
    for (var i = 100; i >= 5; i-=5) {
        console.log(i)
    }
}

backwardsByFive();

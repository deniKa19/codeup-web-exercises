//(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Pam", "Jim", "Stanly", "Angela"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
 console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(element) {
        console.log(element);
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */



function first(element) {
    return element[0];
}

console.log(first(names));

function second(element) {
    return element[1];
}
console.log(second(names));

function last(element) {
    return element[element.length -1]
}
console.log(last(names));

//})();




//extra practice exercises

/*Write a function named oneHundred() that returns an array with integers starting at 1 and ending at 100; */

function oneHundred() {
    var array = [];
    for (var i = 0; i <= 99; i++) {
        array[i] = i+1;
    }
    return array;
}

var array = oneHundred();


//Write a function named reverse() that takes in an array and returns a reversed copy of the provided array. This function should not alter the orignal array sent into it.

function reverse(input) {
    var output = [];
    for(var i = input.length -1; i >= 0; i--) {
        output.push(input[i]);
    }
    return output;
}
console.log(reverse(oneHundred()));


//Write a function named sumAll() that takes in an array of numbers and returns the sum of all the numbers. Use sumAll() on oneHundred() to get the sum of all numbers 1 + 2 + 3... + 100

function sumAll(numbers) {
    var sum = 0;
    numbers.forEach(function(number) {
        sum = sum + number;
    });
    return sum;
}

//Write a function named multiplyAll() that takes in an array of numbers and returns the product of all numbers. Use multiplyAll on oneOnehundred() to get the product of 1*2*3*...100

function multiplyAll(numbers) {
    var product = 1;
    numbers.forEach(function(number) {
        product *= number;
    });
    return product;
}

console.log(multiplyAll(oneHundred()));
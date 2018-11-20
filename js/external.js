"use strict"

console.log('Hello from external JavaScript');
alert("Welcome to my Website!");

var favoritecolor = prompt('What is your favorite color?');
alert('Great,' + favoritecolor + ' is my favorite color too!');

const priceperDay = prompt('What is the price for rental per day?');
var littleMermaidDays = prompt('How many days was Little Mermaid rented?');
var brotherBearDays = prompt('How many days was Brother Bear rented?');
var HerculesDays = prompt('What is the total price?');
var littleMermaidPrice = priceperDay * littleMermaidDays
var brotherBearPrice = priceperDay * brotherBearDays
var HerculesPrice = priceperDay * HerculesDays
var totalPrice = littleMermaidPrice + brotherBearPrice + HerculesPrice
console.log('your total for movie rental is $' + totalPrice)

alert('$' + totalPrice)


var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;
var total = googleRate * googleHours + amazonRate * amazonHours + facebookRate * facebookHours;
console.log(total);



var classHasRoom = true;
var classScheduleGood = true;
var canBeEnrolled = classHasRoom && classScheduleGood;

var PeopleBuy = 2
var offerIsStillValid = true
var PremiumMember = false
var discountCanBeApplied = offerIsStillValid && (PeopleBuy > 2 || PremiumMember);


var username = 'codeup';
var password = 'notastrongpassword';

var passwordIsLongEnough = password.length >= 5;
var passwordIncludesUsername = password.includes(username);
var userNameIsShortEnough = username.length <= 20;
var noWhiteSpace = (password === password.trim() && username === username.trim());

var credentialsAreGood = passwordIsLongEnough && !passwordIncludesUsername && userNameIsShortEnough && noWhiteSpace;

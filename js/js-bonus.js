"use strict"



var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n ===================================================\nEmployee Number, First Name, Last Name, Sales Units\n***************************************************\n\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";
var reportArray = reportContents.split('\n');
console.log(reportArray);
console.log(reportArray.indexOf("1, Jane, Janeway, 3"));
var reportData = reportArray.slice(7);
console.log(reportData);
console.log('Number of employees is ' + reportData.length);
var sales = 0;
var employeeArray = [];
for (var i = 0; i<reportData.length; i++){
    var pick = reportData.slice(i, i+1);
    pick = pick.toString().split(',');
    employeeArray.push(pick);
    pick = pick.slice(3).toString();
    pick = Number(pick);
    sales += pick;
}
console.log("Total number of units sold is " + sales);
console.log("Average number of sales is " + sales/reportData.length);
function sortArray (a, b){
    return b[3]-a[3];
}
employeeArray.sort(sortArray);
var employeeList = "";
var employeePick = [];
for (var k = 0; k<employeeArray.length; k++){
    employeePick = employeeArray.slice(k, k+1).toString();
    employeeList += employeePick+ '\n';
}
console.log('The list of employees, sorted by number of sales is:\n' + employeeList);
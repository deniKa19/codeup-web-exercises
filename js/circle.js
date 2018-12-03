(function() {
    "use strict";
    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () {
            var area=this.radius*this.radius*Math.PI;
            return area;

            // this is another option to return instead of using var
            //return Math.PI * Math.pow(this.radius, 2);
        },
        // TODO: complete this method
        // hint: area = pi * radius^2
        // TODO: return the proper value
        logInfo: function (doRounding) {
            if (doRounding === true){
                var rounded = Math.round(circle.getArea());
                console.log("Area of a circle with radius: " + this.radius + ", is: " + rounded);
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
            }
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

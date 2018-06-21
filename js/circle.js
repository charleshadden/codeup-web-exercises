(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method

            var area = Math.PI * this.radius * this.radius;

            return area;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var rounded;
            if(doRounding) {
                rounded = Math.round(this.getArea());
            } else {
                rounded = this.getArea();
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + rounded);
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




    // Create an application that will calculate the total volume of a building based on user input
    // Account for multiple rooms and a user specified unit of measurement

   // var rooms =  prompt('How many rooms?');
   //
   //  for(var i = 1; i < rooms; i++) {
   //      var length = prompt('Enter length of room');
   //      var width = prompt('Enter width of room');
   //      var height = prompt('Enter height of room');
   //  }

})();
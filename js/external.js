(function());{



'use strict';

// alert('Welcome to my Website!');

// var answer = prompt ('What is your favorite color?');
// alert('Great! ' + answer + ' is my favorite color too!');


//separate


// var littlemermaidRentalDays = prompt('How many days rented for The Little Mermaid?');
// var brotherbearRentalDays = prompt('How many days rented for Brother Bear?');
// var herculesRentalDays = prompt('How many days rented for Hercules?');
//
// var moviecostperDay = prompt('What is the daily rental rate?');
// var totalRentalCost;
// totalRentalCost =
//     (parseInt(littlemermaidRentalDays)
//         + (parseInt(brotherbearRentalDays))
//         + (parseInt(herculesRentalDays))
//     * parseInt(moviecostperDay));
//
// alert('Your total rental cost is $' + totalRentalCost.toFixed(2));


var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;

var googleHours = 6;
var amazonHours = 4;
var facebookHours = 10;

var totalPay = ((googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours));

alert('The total amount you will be paid this week is ' + totalPay + ' dollars.');
//
// //this is an exercise//
//
// var classIsNotFull;
// var classSchedulesCheck;
//
// var classIsNotFull = confirm('Are you not currently enrolled full time?');
//
// var classSchedulesCheck = confirm('Will this schedule not conflict with your current schedule?');
// var studentEnrolled = classIsNotFull && classSchedulesCheck;
//
// // (studentEnrolled) ? console.log("You may enroll.") : console.log("You are not eligible.");
//
// alert("Student enrolled: " + studentEnrolled);
//
// //this is another exercise//
//
// var twoorMore;
// var offernotExpired;
// var premiumMember;
//
//
// var productOffer = twoorMore && offernotExpired || premiumMember;
//
// if (productOffer){
//     alert('You are eligible for the discount')
// } else {
//     alert('you are not eligible for the discount')
// }
//
//
}();
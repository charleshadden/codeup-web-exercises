'use strict';

// alert('Welcome to my Website!');

// var answer = prompt ('What is your favorite color?');
// alert('Great! ' + answer + ' is my favorite color too!');
//
// var littlemermaidRentalDays = 3;
// var brotherbearRentalDays = 5;
// var herculesRentalDays = 1;
//
// var moviecostperDay = 3;
// var total = ((littlemermaidRentalDays + brotherbearRentalDays + herculesRentalDays) * moviecostperDay);
//
// console.log('The total amount is ' + total + ' dollars.');
//
//
// var googlePay = 400;
// var amazonPay = 380;
// var facebookPay = 350;
//
// var googleHours = 6;
// var amazonHours = 4;
// var facebookHours = 10;
//
// var totalPay = ((googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours))
//
// console.log('The total amount you will be paid this week is ' + totalPay + ' dollars.');

//this is an exercise//

// var classIsNotFull;
// var classSchedulesCheck;

var classIsNotFull = confirm('Are you not currently enrolled full time?');

var classSchedulesCheck = confirm('Will this schedule not conflict with your current schedule?');
var studentEnrolled = classIsNotFull && classSchedulesCheck;

// (studentEnrolled) ? console.log("You may enroll.") : console.log("You are not eligible.");

alert("Student enrolled: " + studentEnrolled);

//this is another exercise//

var twoorMore;
var offernotExpired;
var premiumMember;


var productOffer = twoorMore && offernotExpired || premiumMember;

if (productOffer){
    console.log('You are eligible for the discount')
} else {
    console.log('you are not eligible for the discount')
}



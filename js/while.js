"use strict";



// var x = 2;
//
// while (x < 70000) {
//     console.log(x);
//     x *= 2;
//
// }


var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);

do {
    console.log('Start of the day i have ' + allCones + ' left');
    var customCones = Math.floor(Math.random() * 5) + 1;

    if(customCones <= allCones) {
        console.log(customCones + ' cones sold');
        allCones = allCones - customCones;

    } else if (allCones === 0) {
            console.log('I can go Home!');
    } else {
            console.log('I do not have enough cones to sale');
    }

} while(allCones !== 0);


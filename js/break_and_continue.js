"use strict";


// var random_number = prompt('Pick an odd number between 1 and 50.');

do {
    var random_number = prompt('Enter an odd number between 1 and 50.');
}
while (random_number % 2 == 0 || random_number >= 50 || random_number < 1);


for (var i = 1; i < 50; i++) {

    if (random_number == i) {
        continue;
    }


    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}





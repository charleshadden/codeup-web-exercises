"use strict";




/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

            // function sayHello(name) {
            //     return 'Hello, '+ name + ' !';
            // }
            // var name = prompt('What\'s your name?');
            // console.log(sayHello(name));


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

            // var helloMessage = sayHello('charles');
            // console.log('helloMessage');

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
            //
            // var myName = 'charles';
            // console.log(sayHello(myName));





            // Don't modify the following line, it generates a random number between 1 and 3
            // and stores it in a variable named random

            //
            // var random = Math.floor((Math.random() * 3) + 1);
            //
            // function isTwo(random) {
            //     return random === 2;
            // }
            //
            // console.log(isTwo(random));


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */


            // var base = prompt('What is the bill total?');
            // var percentage = prompt('What percentage would you like to tip?');
            //
            // function calculateTip(base, percentage) {
            //     var tipInValue = percentage / 100;
            //
            //     return base * tipInValue;
            //
            // }
            // alert('You should leave ' + calculateTip(base, percentage) + ' dollar(s).');



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
            // var priceBefore = prompt('What is the total?');
            // var discountPercentage = prompt('What is the discount?');
            //
            // function applyDiscount(priceBefore, discountPercentage) {
            //     var discount = discountPercentage / 100;
            //     var discountVal = priceBefore * discount;
            //     return priceBefore - discountVal;
            // }
            //
            // alert('Your new price is ' + applyDiscount(priceBefore, discountPercentage) + '.');

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

            // function returnTwo() {
            //     return 2
            // }
            // console.log(returnTwo());

// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

            // function returnName() {
            //     return 'Charles';
            // }
            // console.log(returnName());

// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))

            // var number = prompt('Pick a number!');
            //
            // function addThree(number) {
            //     return parseInt(number) + parseInt(3);
            // }
            //
            // alert(addThree(number));


// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.


            // var a = prompt('pick a number');
            //
            // function square(a) {
            //     return a * a;
            // }
            //
            // alert(square(a));





// ================ CHALLENGE FUNCTION DRILLS
// Write a function called `identity(input)` that takes in an argument called input and returns that input.
//
//
//              function identity(input) {
//                 return(input);
//             }
//             console.log(identity('input'));



// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.


            // function getRandomNumber(min, max) {
            //     return(output);
            // }
            // console.log(getRandomNumber(min, max));
// Write a function called `first(input)` that returns the first character in the provided string.

            // function last(charles) {
            //     return charles.substr(charles.length-1);
            // }
            // console.log(last());
// Write a fuction called `last(input)` that returns the last character of a string
// Write a function called `rest(input)` that returns everything but the first character of a string.
// Write a function called `reverse(input)` that takes a string and returns it reversed.
// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
// Write a function called `count(input)` that takes in a string and returns the number of characters.
// Write a function called `add(a, b)` that returns the sum of a and b
// Write a function called `subtract(a, b)` that return the difference between the two inputs.
// Write `multiply(a, b)` function that returns the product
// Write a divide(numerator, denominator) function that returns a divided by b
// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.


// function add(x, y){
//     return x + y;
// }
//
// console.log(add(9, 7));
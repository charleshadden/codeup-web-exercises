"use strict";
(function(){



//2. Create a function called makeUsername() in an html file called function-warmup.html
// 3. This function should define two parameters: firstName and age
// 4. makeUsername() should return a username string consisting of the length of the firstName, combined with the first letter of the firstName in lowercase, combined with the age value
//   Example 1:
//     makeUsername("John", 20); // output = '4j20'
//   Example 2:
//     makeUsername("Sandy", 25); // output = '5s25'

    var createUser = prompt('What is your first name?');
    var Age = prompt('How old are you?');

    function makeUsername(createUser, Age) {
        return createUser.length + createUser.charAt(0) + Age;

    }
        alert ('Your username is ' + makeUsername(createUser, Age));


    // console.log('createUser is ' + createUser.length + ' code units long');
    // console.log('The character at index 0   is '  + createUser.charAt(0));
    // console.log('The users age is ' + Age);








})();

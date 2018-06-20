"use strict";

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split(',');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */



        var newString = planetsArray.join("<br>");
    console.log(newString);

        var planetsHTML = "<ul><li>";
        planetsHTML += planetsArray.join("</li></li>");
    planetsHTML  += "</li></ul>";

        console.log(planestHTML);

        document.body.innerHTML = planetsHTML;


    // BONUSES 1:
    // Write a program to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
    //     Example input: "aBc12#""
    // Example output: "AbC12#"




    // var str = 'SDFwer#$%123';
    // var str2 = '';
    //
    // for(var i = 0; i < str.length; i++) {
    //     if(str.charAt(i) === str.charAt(i).toLowerCase()) {
    //         str2 += str.charAt(i).toUpperCase()
    //     } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
    //         str2 += str.charAt(i).toLowerCase()
    //     } else {
    //         str2 += str.charAt(i);
    //     }
    // }
    // console.log(str2);




    // BONUS 2:
    // Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
    //     Example Input: "geek5"
    // Example Output: "Yes"
    // Example Input: "codingchallenge25"
    // Example Output: "No"
//
//     var string = 'yes4';
//
//     function numberEnd(string) {
//
//         for(var i = 0; i < string.length; i++) {
//
//             if (i === !isNaN(string)) {
//                 console.log('yes');
//             } else {
//
//             console.log('no');
//             }
//         }
//     }
//
//
// numberEnd(string);
// //
})();
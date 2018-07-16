"use strict";
(function () {
console.log('hello');




// const wait= num => {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//             resolve()
//
//        },num);
//
//     });
//     };
//     wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
//
//     let username = 'charleshadden';
//     fetch('https://api.github.com/users/' + username + '/repos', {headers: {'Authorization': 'f94f4a5f3976a8089f322ed8703f297164c7aefe'}}).then((response) => {
//
//         return response.json();
//     }).then(data => {
//         console.log('The last push was on ' + data[0].pushed_at + '.');
//     });

    // Aside from the following bonuses, try making alternative versions of AJAX exercises using fetch.
    // =================== BONUS exercise 1
    // In your data directory, create a profiles.json file with the following...
    // {
    //     "sandy123": "brown",
    //     "bob234": "green",
    //     "sally345": "blue"
    // }
    // Add an input field and submit button (you will need to prevent the default behaviour) that when clicked, runs the following function...
    // Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.

        $(document).ready(function() {
            $('#button').append('<button>Submit</button>');
            // $('#input-field').append()


        });

    fetch('/data/profiles.json').then((response) => {

        return response.json();
    }).then(data => {
        console.log(data);
    });





    // =================== BONUS exercise 2
    // Using the Star Wars API, log the first film a Star Wars character's homeworld appeared in
    // =================== BONUS exercise 3
    // Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.
    // =================== BONUS exercise 4
    // Create star-chars.json file in your data folder and paste in the following...
    // [
    //     {
    //         "name": "Rey",
    //         "coolness": 9
    //     },
    //     {
    //         "name": "Luke Skywalker",
    //         "coolness": 9
    //     },
    //     {
    //         "name": "Darth Vadar",
    //         "coolness": 10
    //     }
    // ]
    // Create a function that fetches this array and returns an array of homeworlds for the characters.
    //     It will look something like the following...
    // ['Jakku', 'Tatooine', 'Tatooine']




})();

// "a6ed1d4ac8949ca454dbbd5d1afaa11e1c18fe69"
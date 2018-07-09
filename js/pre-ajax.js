"use strict";

(function () {

    // Add and commit any work and push before starting this exercise.
    //     Create an html file called pre-ajax.html
    // - add a div with an id of 'names-list'
    // - add a button after the div with an id of 'add-names-btn'
    // Create a js file called pre-ajax.js
    // - add a use strict and a $(document).ready(function() {});
    // - add the following...
        var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

        // var list = [];
        //
        // function getString(people) {
        //     for (var i = 0; i < people.length; i++) {
        //        list[i] = "<li>" + people[i].name + "</li>"
        //     }
        //         return list;
        // }
        //
        // console.log(getString(people));
        //
        // $('li').each(function(index) {
        //     $(this).css('color', people[index].favColor)
        // });
        //
        // $('#add-names-btn').click(function() {
        //         $('#names-list').html(list);
        //         console.log(name);
        //     });

        function buildLists(arrObjs) {
            var output = "";
            output += "<ul>";
            arrObjs.forEach(function(person) {
                output += "<li style='color:" + person.favColor + "'>" + person.name + "</li>"
            });
            output += "</ul>";
                return output;
        }

        $('#add-names-btn').click(function(){
           $('#names-list').html(buildLists(people));
        })




    //
    // - add functionality to the button so that when it is clicked, an unordered list of names from the people array (included below) is added to the inner HTML of the div#names-list. For an extra bonus, make the font color of each list item map to that person's favColor value.
    // hints...
    // - You should iterate over every object in the person array
    // - For each object you should build an HTML string including the proper opening and closing tags to make the unordered list
    // - using functions will help better organize your code
    // - using jQuery will simplify the code needed
    // - don't forget to create a branch to add and commit your work, then merge with the master


})();
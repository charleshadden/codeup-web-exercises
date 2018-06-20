(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Charles",
    //     lastName: "Hadden",
    //     sayHello: function() {
    //         console.log('Hello from ' + this.firstName + this.lastName);
    //     }
    //     };
    //    console.log(person.sayHello());

        /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a forEach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    //
    // shoppers.forEach(function(shopper) {
    //     if(shopper.amount > 200) {
    //         console.log(shopper.name, 'Your amount before discount is ' + shopper.amount.toFixed(2) +  ' dollars .Your discount is ' + (shopper.amount * .12).toFixed(2) + ' dollars which brings your total to ' + (shopper.amount - (shopper.amount * .12)).toFixed(2) + ' dollars.');
    //     } else {
    //         console.log(shopper.name,  'Your total is ' + shopper.amount + ' No discount applied, which gives you a total of ' + shopper.amount);
    //     }
    // });




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var num = prompt('How many books would you like to create?');

    function createBook(num) {
        for(var i = 0; i < num; i++) {
            return {
                title:  prompt('What is the title?'),
                firstName:  prompt('What is the authors first name?'),
                lastName:('What is the authors last name?')
            }
        }
    }




    var books = [
        {title: 'Incognito', author: {firstName: 'David', lastName: 'Eagleman'}},
        {title: 'Talon of the Silver Hawk', author: {firstName: 'Raymond', lastName: 'Feist'}},
        {title: 'Homeland', author: {firstName: 'RA', lastName: 'Salvatore'}},
        {title: 'Harry Potter', author: {firstName: 'JK', lastName: 'Rowling'}},
        {title: 'The Jungle', author: {firstName: 'Upton', lastName: 'Sinclair'}}
    ];



    books.forEach(function(book,) {
        console.log('Book # '+ (books.indexOf(book)+1) + '\n' + 'Title: ' + book.title + '\n' + 'Author: ' +  book.author.firstName + ' ' + book.author.lastName + '\n' + '---')
    });

    // for (var i = 0; i < books.length; i++) {
    //     console.log("Book # " + (i+1));
    //     console.log("Title: " + books[i].title);
    //     console.log("Author: " + books[i].author.firstName + ' ' + books[i].author.lastName);
    // }




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    var num = prompt('How many books would you like to create?');

    function createBook(num) {
        for(var i = 0; i < num; i++) {
            return {
                title:  prompt('What is the title?'),
                firstName:  prompt('What is the authors first name?'),
                lastName:('What is the authors last name?')
            }


        }
    }

    createBook(num);




})();
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

    var person = {
        "firstName": "Karla",
        "lastName": "Nunez"
    };

    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return ("Hello from " + person.firstName + " " + person.lastName + "!");
    };
console.log(person.sayHello());

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
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];



    var discount
    var total


     shoppers.forEach(function(shopper) {
         console.log(shopper.name);
         console.log(shopper.amount);

         if (shopper.amount > 200) {
             discount = shopper.amount * .12
             total= shopper.amount - (discount)

         } else {
             console.log("Im sorry, You dont get a discount");
         }
         console.log("You are saving " + "$" + discount + "!");
         console.log("Your total price is " + "$" + total);

     });



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

    var books = [
        {

        "title": "The Alchemist",
        "author": {
            "firstName": "Paulo",
            "lastName": "Coelho"
            }

        },

        {

            "title": "The Girl on the Train",
            "author": {
                "firstName": "Paula",
                "lastName": "Hawkins"
                }
        },

        {
            "title": "Dear John",
            "author": {
                "firstName": "Nicholas",
                "lastName": "Sparks"
                }
        },

        {
            "title": "See Me",
            "author": {
                "firstName": "Nicholas",
                "lastName": "Sparks"
                }
        },

        {
            "title": "Love Body",
            "author": {
                "firstName": "Kelly",
                "lastName": "LeVeque"
        }
        }
]
    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)




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


    //other option right way
    /*books.forEach(function(book, index)) {
        console.log("Book # " + (index+1));
        console.log("Title: " + books[0].title)
        console.log("Author: " + books[0].author.firstName + " " + books[0].author.lastName)
    */



    console.log("Book # 1")
    console.log("Title: " + books[0].title)
    console.log("Author: " + books[0].author.firstName + " " + books[0].author.lastName)



    console.log("Book # 2")
    console.log("Title: " + books[1].title)
    console.log("Author: " + books[1].author.firstName + " " + books[1].author.lastName)


    console.log("Book # 3")
    console.log("Title: " + books[2].title)
    console.log("Author: " + books[2].author.firstName + " " + books[2].author.lastName)


    console.log("Book # 4")
    console.log("Title: " + books[3].title)
    console.log("Author: " + books[3].author.firstName + " " + books[3].author.lastName)


    console.log("Book # 5")
    console.log("Title: " + books[4].title)
    console.log("Author: " + books[4].author.firstName + " " + books[4].author.lastName)

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

    function createBook(title, author) {
        return {
            "title": "The Alchemist",
            "author": {
                "firstName": author.split(' ')[0],
                "lastName": auhtor.split(' ')[1]
            }
        }
    }



    //BONUS
    /* (create a dog object):
    The dog object should have properties for:
        breed (string),
        weightInPounds (number),
        age (number),
        color (string),
        sterilized (boolean),
        shotRecords (array of objects with properties for date and typeOfShot)
    The dog object should have methods to:
        bark() - will console.log "Woof!"
        getOlder() - will increase age by 1
        fix() - will set sterile to true if dog sterilized property is false
        vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array */

    var dog = {
        "breed": "Lab",
        "weightInPounds": 30,
        "age": 3,
        "color": "black"

    }


})();

(function () {
    "use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

console.log('hello');

//=============filter========\\

let filtered = users.filter(( user )  => {
    return user.languages.length > 2

    });
console.log('filtered', filtered);

//=============map=======\\

let mapped = users.map((user) => {
    return user.email;
});

    console.log('mapped', mapped);


//==============reduce===========\\

let reduced = users.reduce((accumulation, current) => {
    accumulation[current.id] = current;
    return accumulation;
}, {});

console.log('reduced', reduced);








})();
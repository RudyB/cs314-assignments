"use strict";

// 8. When your page loads, you will display all the users from the API with their name, email, and company.
$(document).ready(function(){
    // Code won't execute until the document is loaded
    loadUsers();
    todosFor("1");
    albumsFor("1");
});

/*
* Get Request to receive users and parse json for name, email, and company name
*/
function loadUsers() {
    $.getJSON( "https://jsonplaceholder.typicode.com/users")
        .done(function( data ) {
            $.each( data, function( i, item ) {
                console.log(item["id"], item["name"], item["email"], item["company"]["name"]);
            })
    });
}

function todosFor(userID) {
    $.getJSON( `https://jsonplaceholder.typicode.com/todos?userId=${userID}`)
        .done(function( data ) {
            $.each( data, function( i, item ) {
                console.log(item["title"], item["completed"]);
            })
        });
}

function albumsFor(userID) {
    $.getJSON( `https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
        .done(function( data ) {
            $.each( data, function( i, item ) {
                console.log(item["title"]);
            })
        });
}
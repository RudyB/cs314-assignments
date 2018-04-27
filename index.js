"use strict";

// 8. When your page loads, you will display all the users from the API with their name, email, and company.
$(document).ready(function(){
    // Code won't execute until the document is loaded
    loadUsers();
});

/*
* Get Request to receive users and parse json for name, email, and company name
*/
function loadUsers() {
    $.getJSON( "https://jsonplaceholder.typicode.com/users")
        .done(function( data ) {
            var table = $(document.getElementsByClassName("userTable"));
            $.each( data, function( i, item ) {
                let row = $('<tr>').addClass('row');
                let todosBtn = $('<button>').addClass("todoButton").text("View Todos");
                todosBtn.click(toggleTodos);
                let albumsBtn = $('<button>').addClass("albumButton").text("View Albums");
                albumsBtn.click(toggleAlbums);
                row.append($("<td>").text(item["name"]));
                row.append($("<td>").text(item["email"]));
                row.append($("<td>").text(item["company"]["name"]));
                row.attr("id", item["id"]);
                row.append(todosBtn);
                row.append(albumsBtn);
                table.append(row)
            })
    });
}


function toggleTodos(event) {
    let clickedElement = event.target;

    console.log($(clickedElement).parent().attr("id"));

}

function toggleAlbums(event) {
    let clickedElement = event.target;

    console.log($(clickedElement).parent().attr("id"));
}

function todosFor(userID) {
    userID = userID.toString();
    $.getJSON( `https://jsonplaceholder.typicode.com/todos?userId=${userID}`)
        .done(function( data ) {
            $.each( data, function( i, item ) {
                console.log(item["title"], item["completed"]);
            })
        });
}

function albumsFor(userID) {
    userID = userID.toString();
    $.getJSON( `https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
        .done(function( data ) {
            $.each( data, function( i, item ) {
                console.log(item["title"]);
            })
        });
}
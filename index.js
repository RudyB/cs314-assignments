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
    let visible = $(clickedElement).text() === "View Todos";

    let id = $(clickedElement).parent().attr("id");

    let table = $(document.getElementsByClassName("detailTable"));

    let tableSize = $('#detailTable tr').length;

    let buttons = $(document.getElementsByClassName("albumButton"));
    [].forEach.call(buttons, function (btn) {
        $(btn).text("View Albums")
    });

    // If the tabs on a button that is already showing "Hide Todos"
    if (!visible) {
        table.empty();
        let buttons = $(document.getElementsByClassName("todoButton"));
        [].forEach.call(buttons, function (btn) {
            $(btn).text("View Todos")
        });
        return
    }

    // If the user does not hide an old selection, and selects a new todo
    if (tableSize > 0) {
        table.empty();
        let buttons = $(document.getElementsByClassName("todoButton"));
        [].forEach.call(buttons, function (btn) {
            if (btn != clickedElement) {
                $(btn).text("View Todos");
            }
        });
    }
        $(clickedElement).text(visible ? "Hide Todos" : "View Todos");

        let row = $('<tr>').addClass('row');
        row.append($("<th>").text("Title"));
        row.append($("<th>").text("Completed"));
        table.append(row);
        todosFor(id);

    }

function toggleAlbums(event) {
    let clickedElement = event.target;

    let visible = $(clickedElement).text() === "View Albums";

    console.log($(clickedElement).parent().attr("id"));

    let buttons = $(document.getElementsByClassName("todoButton"));
    [].forEach.call(buttons, function (btn) {
        $(btn).text("View Todos")
    });

  ///////////////

    let id = $(clickedElement).parent().attr("id");

    let table = $(document.getElementsByClassName("detailTable"));

    let tableSize = $('#detailTable tr').length;

    // If the tabs on a button that is already showing "Hide Todos"
    if (!visible) {
        table.empty();
        let buttons = $(document.getElementsByClassName("albumButton"));
        [].forEach.call(buttons, function (btn) {
            $(btn).text("View Albums")
        });
        return
    }

    // If the user does not hide an old selection, and selects a new todo
    if (tableSize > 0) {
        table.empty();
        let buttons = $(document.getElementsByClassName("albumButton"));
        [].forEach.call(buttons, function (btn) {
            if (btn != clickedElement) {
                $(btn).text("View Albums");
            }
        });
    }
    $(clickedElement).text(visible ? "Hide Albums" : "View Albums");

    let row = $('<tr>').addClass('row');
    row.append($("<th>").text("Title"));
    table.append(row);
    albumsFor(id);
}

function todosFor(userID) {
    userID = userID.toString();
    $.getJSON( `https://jsonplaceholder.typicode.com/todos?userId=${userID}`)
        .done(function( data ) {
            $.each( data, function( i, item ) {
                let table = $(document.getElementsByClassName("detailTable"));
                let row = $('<tr>').addClass('row');
                row.append($("<td>").text(item["title"]));
                if (Boolean(item["completed"])) {
                    row.append($("<i class=\"fas fa-check\"></i>")).addClass("completed");
                } else {
                    row.addClass("completed").append($("<i class=\"fas fa-times\"></i>"));
                }

                table.append(row);
            })
        });
}

function albumsFor(userID) {
    userID = userID.toString();
    $.getJSON( `https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
        .done(function( data ) {
            $.each( data, function( i, item ) {
                let table = $(document.getElementsByClassName("detailTable"));
                let row = $('<tr>').addClass('row');
                row.append($("<td>").text(item["title"]));
                table.append(row);
            })
        });
}
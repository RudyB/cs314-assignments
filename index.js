"use strict"


$(document).ready(() => {

    if(window.location.pathname === '/weather')
        initApi()

});

let formHandler = () => {
    let form = document.forms[0];
    let fd = Object.values(form).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {});
    delete fd[""];

    if(!fd.name){
        let err = document.createElement('div');
        err.innerHTML = 'Invalid Name';
        err.style.color = 'red';
        return document.getElementsByClassName('contact-form')[0].appendChild(err);
    }

    if(!fd.email){
        let err = document.createElement('div');
        err.innerHTML = 'Invalid Email';
        err.style.color = 'red';
        return document.getElementsByClassName('contact-form')[0].appendChild(err);
    }

    if(!fd.userInputtedForm){
        let err = document.createElement('div');
        err.innerHTML = 'You have to give a recommendation';
        err.style.color = 'red';
        return document.getElementsByClassName('contact-form')[0].appendChild(err);
    }


    let div = document.createElement('div');
    for(let key in fd)
        div.innerHTML += key + ': ' +fd[key] + "<br/>";

    return document.getElementsByClassName('contact-form')[0].appendChild(div);
};

let initApi = () => {
    fetch('https://api.darksky.net/forecast/cf79775fc8706066d8edada44ca32ccc/47.6574516,-117.4282505')
        .then((response) => response.json())
        .then((res) => {
            let h3 = document.createElement('h3')
            $(h3).text(res["daily"]["summary"])
            $(document.getElementsByClassName("inner-main")).append(h3);
            let p = document.createElement("p");
            $(p).text("Look I really wanted to add daily weather here as a table, but I ran out of time. ")
            $(document.getElementsByClassName("inner-main")).append(p);

        })
};


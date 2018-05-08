"use strict"


let formHandler = () => {
    let form = document.forms[0]
    let fd = Object.values(form).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {})
    delete fd[""]

    if(!fd.name){
        let err = document.createElement('div')
        err.innerHTML = 'Invalid Name'
        err.style.color = 'red'
        return document.getElementsByClassName('contact-form')[0].appendChild(err)
    }

    if(!fd.email){
        let err = document.createElement('div')
        err.innerHTML = 'Invalid Email'
        err.style.color = 'red'
        return document.getElementsByClassName('contact-form')[0].appendChild(err)
    }

    if(!fd.userInputtedForm){
        let err = document.createElement('div')
        err.innerHTML = 'You have to give a recommendation'
        err.style.color = 'red'
        return document.getElementsByClassName('contact-form')[0].appendChild(err)
    }


    let div = document.createElement('div')
    for(let key in fd)
        div.innerHTML += key + ': ' +fd[key] + "<br/>"

    return document.getElementsByClassName('contact-form')[0].appendChild(div)
}
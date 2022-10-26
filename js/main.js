"use strict";



    const userNumber = Math.floor( Math.random() *6 ) + 1;
    const pcNumber = Math.floor( Math.random() *6 ) + 1;
    const emails = ["moccialorenzo98@gmail.com", "tiziocaio@gmail.com"];
    const userEmail = prompt("Inserisci la tua email");

    let auth = false;

    for(let i = 0; i < emails.length; i++){
        if(userEmail === emails[i]){
            auth = true;
            break;
        }
    }

    if(auth)
    {

    if(userNumber > pcNumber){
        console.log("Ha vinto l'utente");
    }
    else if(userNumber < pcNumber){
        console.log("Ha vinto il computer");
    }
    else{
        console.log("Pareggio");
    }

    }
    else{
        console.log("Utente non autenticato");
    }
    
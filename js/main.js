"use strict";



    const userNumber = Math.floor( Math.random() *6 ) + 1;
    const pcNumber = Math.floor( Math.random() *6 ) + 1;
    const emails = ["moccialorenzo98@gmail.com", "tiziocaio@gmail.com"];

    if(userNumber > pcNumber){
        console.log("Ha vinto l'utente");
    }
    else if(userNumber < pcNumber){
        console.log("Ha vinto il computer");
    }
    else{
        console.log("Pareggio");
    }
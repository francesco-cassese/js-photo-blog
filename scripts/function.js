//@ts-check
'use strict';

/*
================================================================
    FUNZIONE CHIAMATA API
================================================================
*/

const chiamataApi = () => {
    return fetch('https://lanciweb.github.io/demo/api/pictures/')  //faccio la richiesta al server
        .then(response => {                                        //appena risponde trasformo il dato grezzo in json
            console.log(response);
            return response.json();                                //restituisco i dati in json
        })
        .then(json => {                                            //una volta che ha trasformato i dati in json
            console.log(json);
            return json;                                           //restituisco il dato intero in json
        })
        .catch(errore => {                                         //se c'è un errore
            console.error(errore);                                 //momentaneamente lo stampo in console
        })
}
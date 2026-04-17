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

/*
================================================================
    FUNZIONE CREA CARD
================================================================
*/

/** 
 * @param {Object} datiCard
 * @param {number} datiCard.id 
 * @param {string} datiCard.title
 * @param {string} datiCard.date
 * @param {string} datiCard.url
 */

const creaCard = (datiCard) => {

    const cardVacanza = `
      <article class="card">
                <img src="./img/pin.svg" alt="l'immagine di un chiodino per foto" class="card-pin">
                <div class="container-img">
                    <img src="${datiCard.url}" alt="foto di ${datiCard.title}">
                </div>
                <div class="container-description">
                    <h3>${datiCard.title}</h3>
                    <time datetime="${datiCard.date}">${datiCard.date}</time>
                </div>
            </article>`;

    return cardVacanza;
}
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
 * @param {{id: number, title: string, date: string, url: string}} datiCard
 */

const creaCard = datiCard => {

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

// ===================================
//  FUNZIONE STAMPA CARD 
// ===================================

/**
 * @param {{id: number, title: string, date: string, url: string}[]} arrayFoto arrayFoto
 */

const stampaCard = arrayFoto => {
    const contenutoHtml = arrayFoto.map(fotoSingola => {
        return creaCard(fotoSingola);
    });
    const stringaFinale = contenutoHtml.join('');

    if (galleryHtml !== null) {
        galleryHtml.innerHTML = stringaFinale;
    }
}

// ===================================
//  FUNZIONE GENERA LISTA 
// ===================================

const stampaListaCompleta = () => {

    if (galleryHtml !== null) {
        galleryHtml.innerHTML = "";
    }

    chiamataApi().then(card => {
        stampaCard(card);
    })

}
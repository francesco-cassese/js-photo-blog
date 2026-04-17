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
                    <img src="${datiCard.url}" alt="foto di ${datiCard.title}" class = "img-card">
                </div>
                <div class="container-description">                    
                    <time datetime="${datiCard.date}" class="date-card">${datiCard.date}</time>
                    <h3>${datiCard.title}</h3>
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
    const contenutoHtml = arrayFoto.map(fotoSingola => {            //trasformo l'array di oggetti in un array di stringhe
        return creaCard(fotoSingola);                               //aggiungendo per ogni oggetto il pezzo di codice della card
    });
    const stringaFinale = contenutoHtml.join('');                   //trasformo tutto in un unica grande stringa

    if (galleryHtml !== null) {                                     //controllo per typescript
        galleryHtml.innerHTML = stringaFinale;                      //se lo trova ignetta
    }
}

// ===================================
//  FUNZIONE GENERA LISTA 
// ===================================

const stampaListaCompleta = () => {

    chiamataApi().then(arrayDatiApy => {                           // Chiamo la funzione che mi fa la richiesta al server
        stampaCard(arrayDatiApy);                                  //appena risponde stampo le card tramite la funzione 
    })
}
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
 * @param {{id: number, title: string, date: string, url: string}[]} arrayFoto 
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

// ===================================
//  GESTIONE APERTURA OVERLAY
// ===================================


/**
 * 
 * @param {Event} evento 
 */

const gestisciAperturaOverlay = evento => {
    const target = evento.target;                                                           // Prendo l'elemento preciso dove ho cliccato
    if (!(target instanceof Element)) return                                                // Se per caso non è un pezzo di HTML vero, fermo tutto qui

    const card = target.closest('.card');                                                   // Risalgo dal punto del click finché non trovo la card intera
    if (!card) return                                                                       // Se ho cliccato fuori dalle card, non devo fare nulla, quindi esco

    const fotoCard = card.querySelector('.img-card');                                       // Vado a pescare l'immagine piccola dentro la card cliccata

    // Controllo che l'immagine della card e quella dell'overlay siano dei tag <img> validi
    if (fotoCard instanceof HTMLImageElement && imgOverlay instanceof HTMLImageElement) {
        imgOverlay.src = fotoCard.src;                                                      // Copio l'indirizzo della foto piccola e lo "incollo" in quella grande

        containerOverlay?.classList.add('active');                                          // Tolgo la classe che nascondeva tutto così l'overlay appare
        document.body.classList.add('over-flow-hidden');                                    // Aggiungo al body la classe per bloccare lo scroll della pagina
    }
}

// ===================================
//  GESTIONE CHIUSURA OVERLAY
// ===================================

//Una volta che ho cliccato sul bottone aggiongo variabile display none e rimuovo quella dell'overflow hidden
const nascondiOverlay = () => {
    containerOverlay?.classList.remove('active');
    document.body.classList.remove('over-flow-hidden');
};

// ===================================
//  GESTIONE Controlla E STAMPA FILE
// ===================================

/**
 * 
 @param {HTMLInputElement} inputDaControllare
 */

const controllaEStampaFile = (inputDaControllare) => {
    const listaFile = inputDaControllare.files;          // Accedo alla proprietà .files dell'input per vedere cosa ha scelto l'utente

    if (listaFile && listaFile.length > 0) {             // Controllo se la lista esiste e se contiene effettivamente almeno un file
        const fileSingolo = listaFile[0];;               // Estraggo il primo file della lista
        return fileSingolo;                              // Restituisco l'oggetto file completo così posso usarlo altrove
    }

    return -1;                                           // Se la lista è vuota, restituisco -1 per segnalare che il controllo è fallito
}; 

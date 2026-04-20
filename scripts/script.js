//@ts-check
'use strict';

const galleryHtml = document.querySelector('#photo-gallery');
const containerOverlay = document.querySelector('.img-overlay-container');
const imgOverlay = document.querySelector('.img-overlay');
const bottoneCloseOverlay = document.querySelector('.btn-close-overlay');
const moduloInvio = document.querySelector('#form');
const selettoreFile = document.querySelector('#upload-img');

stampaListaCompleta();                                             //Faccio partire la generazione delle card dall'API

/* 
===========================================================
    GESTIONE OVERLAY
===========================================================
*/

galleryHtml?.addEventListener('click', gestisciAperturaOverlay);   //Ascolto i click sulla galleria per aprire l'immagine selezionata

bottoneCloseOverlay?.addEventListener('click', nascondiOverlay);   //Gestisco la chiusura dell'overlay al click sul tasto di chiusura

/*
===========================================================
    GESTIONE INVIO E CARICAMENTO FILE
===========================================================
*/

moduloInvio?.addEventListener('change', event => {
    event.preventDefault();                                        // Impedisco al browser di ricaricare la pagina o fare azioni di default
    if (selettoreFile instanceof HTMLInputElement) {               // Controllo se l'elemento esiste E se è un elemento input HTMLInputElement
        const risultato = controllaEStampaFile(selettoreFile);     // Lancio il controllo sulla validità del file selezionato

        if (risultato === -1) {                                    // Se la funzione mi restituisce -1, significa che non c'è alcun file
            alert("Attenzione: seleziona un'immagine!");           // Avviso l'utente che deve ancora scegliere una foto
        }
    }
});
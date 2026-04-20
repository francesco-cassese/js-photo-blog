//@ts-check
'use strict';

const galleryHtml = document.querySelector('#photo-gallery');
const containerOverlay = document.querySelector('.img-overlay-container');
const imgOverlay = document.querySelector('.img-overlay');
const bottoneCloseOverlay = document.querySelector('.btn-close-overlay');

stampaListaCompleta();                                             //Faccio partire la generazione delle card dall'API

galleryHtml?.addEventListener('click', (evento => {
    if (containerOverlay && imgOverlay) {
        gestisciAperturaOverlay(evento, containerOverlay, imgOverlay)  //Quando clicco su una card, chiamo la funzione per aprire
    }
}));

bottoneCloseOverlay?.addEventListener('click', () => {
    if (containerOverlay) {
        nascondiOverlay(containerOverlay)                              //Quando clicco sul bottone "Chiudi", chiamo la funzione per chiudere
    }
}); 
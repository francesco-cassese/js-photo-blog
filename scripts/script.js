//@ts-check
'use strict';

const galleryHtml = document.querySelector('#photo-gallery');
const containerOverlay = document.querySelector('.img-overlay-container');
const imgOverlay = document.querySelector('.img-overlay');
const bottoneCloseOverlay = document.querySelector('.btn-close-overlay');

stampaListaCompleta();                                             //Faccio partire la generazione delle card dall'API

galleryHtml?.addEventListener('click', gestisciAperturaOverlay)

bottoneCloseOverlay?.addEventListener('click', nascondiOverlay); 
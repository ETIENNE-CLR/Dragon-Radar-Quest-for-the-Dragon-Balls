// Constantes et variables globales
const page_Home = document.getElementById('homepage');
const page_Radar = document.getElementById('radarpage');
const page_Shenron = document.getElementById('invocationShenronpage');

// Au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    hideAllPages();
    displayHomePage();
});


// Au clic pour afficher la page avec le radar
document.getElementById('btn_toRadar').addEventListener('click', function () {
    // Changer la vue pour le radar
    hideAllPages();
    displayRadarPage();
});

// Au clic pour afficher la page d'accueil
document.getElementById('radarToHome').addEventListener('click', function () {
    // Changer la vue pour le radar
    hideAllPages();
    displayHomePage();
});
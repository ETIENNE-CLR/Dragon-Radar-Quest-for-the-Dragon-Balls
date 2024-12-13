// Constantes et variables globales
const page_Home = document.getElementById('homepage');
const page_Radar = document.getElementById('radarpage');
const page_Shenron = document.getElementById('invocationShenronpage');

// Initialiser les valeurs gobales de l'application
let data = get_json_data();
let playerObject = new Player(data);
let radarObject = new Radar();

// Affichage
hideAllPages();
displayHomePage();


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

// Au clic, lancer la recherche des dragons balls
document.getElementById('btnDBRadar').addEventListener('click', function () {
    if (radarObject.radarIsSearching) { return }

    // Lancer le son
    // Rechercher les dragons balls

});
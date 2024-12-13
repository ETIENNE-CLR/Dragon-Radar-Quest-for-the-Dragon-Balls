// Constantes et variables globales
const page_Home = document.getElementById('homepage');
const page_Radar = document.getElementById('radarpage');
const page_Shenron = document.getElementById('invocationShenronpage');

// Au chargement de la page...
document.addEventListener('DOMContentLoaded', async function () {
    // Demander au client si l'application peut accéder à la position de l'appareil

    // Initialisation du manager des données
    let myDataManager = new DataManager();
    await myDataManager.init();

    // Initialisation du joueur
    let myPlayer = new Player(
        myDataManager.Data.player.hand,
        myDataManager.Data.player["nb-voeux-realise"]
    );

    // Initialisation du manager
    let myAppManager = new AppManager(
        myPlayer,
        myDataManager.Data["dragon-ball"],
        myDataManager.Data.options.kmPerimeter
    );
    myAppManager.disperserDragonBall();

    // Afficher la page principale
    displayHomePage(myPlayer);
    document.querySelectorAll('.retourHome').forEach(btnRetour => {
        btnRetour.addEventListener('click', function () {
            displayHomePage(myPlayer);
        });
    });
});

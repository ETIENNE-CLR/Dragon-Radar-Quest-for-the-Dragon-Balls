// Constantes et variables globales
const page_Home = document.getElementById('homepage');
const page_Radar = document.getElementById('radarpage');
const page_Shenron = document.getElementById('invocationShenronpage');

// Au chargement de la page...
document.addEventListener('DOMContentLoaded', async function () {
    // Initialisation du manager des données
    let myDataManager = new DataManager();
    await myDataManager.init();

    // Initialisation du joueur
    let myAppManager = new AppManager(
        new Player(
            myDataManager.Data.player.hand,
            myDataManager.Data.player["nb-voeux-realise"]
        )
    );
});


// Afficher la page principale
// displayHomePage();

/**
 * Méthode qui retoure un nombre entien aléatoire dans une plage donnée
 * @param {Number} min Nombre minimal de la plage aléatoire (inclus)
 * @param {Number} max Nombre maximal de la plage aléatoire (inclus)
 * @returns {Number} Le nombre aléatoire
 */
function GetRandomInt(min = 1, max = 100) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

/**
 * Méthode qui permet de cacher toutes les pages de l'application
 */
function hideAllPages() {
    page_Home.style.display = "none";
    page_Radar.style.display = "none";
    page_Shenron.style.display = "none";
}
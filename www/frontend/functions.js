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
 * Méthode qui permet de retourner un élément aléatoire d'une liste
 * @param {Array} list La liste
 * @returns L'élement aléatoire de la liste
 */
function GetRandomValueFromList(list) {
    return list[GetRandomInt(0, list.length - 1)];
}
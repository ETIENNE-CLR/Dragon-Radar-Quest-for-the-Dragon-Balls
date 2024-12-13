const DATA_KEY = 'Dragon_Radar_saved_data';
const DEFAULT_DATA =
{
    "profil": {
        "name": "Etienne",
        "level": 15,
        "nb-times-shenron": 2,
        "image": "url"
    },
    "dragons-balls": [
        {
            "nb-stars": 2
        },
        {
            "nb-stars": 6
        }
    ]
}

// Au chargement de la page...
document.addEventListener('DOMContentLoaded', function () {
    // Fonction qui détermine si deux variables JSON ont les mêmes clés
    function haveSameKeys(json1, json2 = DEFAULT_DATA) {
        if (!json1 || !json2) { return false }
        const keys1 = Object.keys(json1);
        const keys2 = Object.keys(json2);

        // Nombre de clés
        if (keys1.length !== keys2.length) {
            return false;
        }

        // Chaque clé
        return keys1.every(key => keys2.includes(key));
    }
    
    // Vérifier que le localStorage contient des données correctes
    let actualData = get_json_data();
    let data = (haveSameKeys(actualData)) ? actualData : DEFAULT_DATA;
    set_json_data(data);
});

/**
 * Méthode qui permet de réinitialiser les données du joueur
 */
function reset_localStorage() {
    set_json_data(DEFAULT_DATA);
    window.location.reload();
}

/**
 * Méthode qui permet de récupérer les données du joueur dans le localStorage
 * @returns {JSON} les données JSON du joueur
 */
function get_json_data() {
    return JSON.parse(localStorage.getItem(DATA_KEY));
}

/**
 * Méthode qui permet de sauvegarder les données du joueur dans le localStorage
 * @param {JSON} newValue Nouveau tableau JSON des données à sauvegarder 
 * @returns {Boolean} Booléan qui dit si les données ont bien été sauvegardé
 */
function set_json_data(newValue) {
    localStorage.setItem(DATA_KEY, JSON.stringify(newValue));
    return true;
}


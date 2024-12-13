/**
 * Classe DataManager qui permet de gèrer les données de l'application
 */
class DataManager {
    // Champs de la classe
    localStorage_key;
    default_data;
    #data;

    // Propriétés de la classe
    get Data() { return this.#data }
    set Data(value) {
        this.#data = value;
        this.#set_json_data(this.#data);
    }

    /**
     * Méthode qui permet d'initialiser les valeurs de base de la classe
     */
    async init() {
        this.localStorage_key = 'Dragon_Radar_saved_data';
        this.default_data = await this.#get_json_default();
        this.#data = this.#get_json_data();

        // Fonction qui détermine si deux variables JSON ont les mêmes clés
        function haveSameKeys(json1, json2) {
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

        // Sauvegarder les données par défaut qui l'un est invalide
        let savedData = this.#get_json_data();
        this.#data = (haveSameKeys(savedData, this.default_data)) ? savedData : this.default_data;
    }

    /**
     * Méthode qui va récupérer les données JSON par défaut de l'application
     * @returns {JSON} Tableau json avec les données de base
     */
    async #get_json_default() {
        const URL_JSON = 'frontend/data.json';
        try {
            const response = await fetch(URL_JSON);
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON: ${response.statusText}`);
            }
            const data = await response.json();
            // alert('donnée JSON de base récupéré');
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    /**
     * Méthode qui permet de réinitialiser les données du joueur
     */
    reset() {
        this.#set_json_data(this.default_data);
        window.location.reload();
        console.log('Les données ont été réinitialisées');
    }

    /**
     * Méthode qui permet de récupérer les données du joueur dans le localStorage
     * @returns {JSON} les données JSON du joueur
     */
    #get_json_data() {
        return JSON.parse(localStorage.getItem(this.localStorage_key));
    }

    /**
     * Méthode qui permet de sauvegarder les données du joueur dans le localStorage
     * @param {JSON} newValue Nouveau tableau JSON des données à sauvegarder 
     * @returns {Boolean} Booléan qui dit si les données ont bien été sauvegardé
     */
    #set_json_data(newValue) {
        localStorage.setItem(this.localStorage_key, JSON.stringify(newValue));
        return true;
    }
}

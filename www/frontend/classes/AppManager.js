/**
 * Méthode AppManager qui permet de gèrer toutes les classes en même temps (coeur de l'application) 
 */
class AppManager {
    user;
    actualDragonBalls;
    kmPerimeter;

    constructor(user, actualDragonBalls, kmPerimeter) {
        this.user = user;
        this.actualDragonBalls = actualDragonBalls;
        this.kmPerimeter = kmPerimeter;
    }

    disperserDragonBall() {
        // Méthode qui retourne un nombre d'étoiles disponibles pour les Dragon Ball
        let starsAvalaible = [];
        for (let h = 0; h < NB_DRAGON_BALL; h++) {
            starsAvalaible.push(h + 1);
        }
        function getRandomStars() {
            let e = GetRandomValueFromList(starsAvalaible);
            starsAvalaible.remove(e);
            return e;
        }

        // Initialisation des variables
        this.actualDragonBalls = []; // sous-entendu

        // Générer 7 nouvelles Dragon Ball
        for (let i = 0; i < NB_DRAGON_BALL; i++) {
            this.actualDragonBalls.push(
                new DragonBall(
                    getRandomStars(),
                    this.#generateNewCoordonates()
                )
            );
        }
    }

    #generateNewCoordonates() {
        let userCoord = getUserCoord();
        let newCoord = [
             56.56476,
             67.47576
        ];

        // Générer des coordonnées GPS à partir de `userCoord` dans un rayon de `this.kmPerimeter` km
        // ...
        
        return newCoord;
    }
}

// OH SALE PUTE ! REECRIT CETTE FONCTION DANS LE BON FICHIER, ENCULE DE TES MORTS
function GetRandomValueFromList(list) {
    return list[GetRandomInt(0, list.length - 1)];
}
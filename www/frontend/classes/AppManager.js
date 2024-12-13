/**
 * Méthode AppManager qui permet de gèrer toutes les classes en même temps (coeur de l'application) 
 */
class AppManager {
    user;
    actualDragonBalls;
    kmPerimeter;

    constructor(userObject, actualDragonBallsJson, kmPerimeter) {
        this.user = userObject;
        this.kmPerimeter = kmPerimeter;

        this.actualDragonBalls = [];
        actualDragonBallsJson.forEach(dragonball => {
            this.actualDragonBalls.push(new DragonBall(dragonball["nb-stars"], dragonball.coordonnees));
        });
    }

    disperserDragonBall() {
        // Init du nombre d'étoiles disponible
        let starsAvalaible = Array.from({ length: NB_DRAGON_BALL }, (_, i) => i + 1);

        // Méthode qui retourne un nombre d'étoiles disponibles pour les Dragon Ball
        function getRandomStars() {
            let e = GetRandomValueFromList(starsAvalaible);
            starsAvalaible = starsAvalaible.filter(star => star !== e);
            return e;
        }

        // Générer 7 nouvelles Dragon Ball
        this.actualDragonBalls = []; // sous-entendu
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
        // let userCoord = getUserCoord();
        let newCoord = [];

        // Générer des coordonnées GPS à partir de `userCoord` dans un rayon de `this.kmPerimeter` km
        // ...

        newCoord = [
            46.25820656496626,
            6.227332430726359
        ];
        return newCoord;
    }
}

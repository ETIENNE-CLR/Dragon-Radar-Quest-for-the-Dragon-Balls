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
}
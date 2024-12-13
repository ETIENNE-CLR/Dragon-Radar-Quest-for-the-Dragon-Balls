/**
 * Classe Player qui signifie un joueur
 */
class Player {
    hand;
    nbVoeuxRealise;

    constructor(handJson, nbVoeuxRealise) {
        // Main
        this.hand = [];
        handJson.forEach(dragonball => {
            this.hand.push(new DragonBall(dragonball["nb-stars"], dragonball.coordonnees));
        });

        this.nbVoeuxRealise = nbVoeuxRealise;
    }

    get_nb_dragon_ball_recupere() {
        return this.nbVoeuxRealise * NB_DRAGON_BALL + this.hand.length
    }
}
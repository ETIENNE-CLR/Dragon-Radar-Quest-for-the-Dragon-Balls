/**
 * Classe Player qui signifie un joueur
 */
class Player {
    hand;
    nbVoeuxRealise;

    constructor(hand, nbVoeuxRealise) {
        // Main
        this.hand = [];
        hand.forEach(dbtemp => {
            this.hand.push(new DragonBall(dbtemp["nb-stars"], dbtemp.coordonnees));
        });

        this.nbVoeuxRealise = nbVoeuxRealise;
    }

    get_nb_dragon_ball_recupere(){
        return this.nbVoeuxRealise * NB_DRAGON_BALL + this.hand.length
    }
}
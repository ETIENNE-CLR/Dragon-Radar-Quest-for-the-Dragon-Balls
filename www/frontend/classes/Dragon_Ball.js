const NB_DRAGON_BALL = 7;

/**
 * Classe DragonBall qui signifie une Dragon Ball
 */
class DragonBall {
    nbStars;
    coordonate;

    constructor(nbStars, coordonate) {
        if (nbStars < 1 || nbStars > NB_DRAGON_BALL) {
            console.error(`La Dragon Ball ne peut pas avoir ${nbStars}`);
            return;
        }

        this.nbStars = nbStars;
        this.coordonate = coordonate;
    }

    getImgSrc() {
        return `assets/img/dragon_balls/dragon_ball_${this.nbStars.toString().padStart(2, '0')}.png`;
    }
}
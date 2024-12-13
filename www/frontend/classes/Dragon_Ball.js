const NB_DRAGON_BALL = 7;

/**
 * Classe DragonBall qui signifie une Dragon Ball
 */
class DragonBall {
    nbStars;
    coordonate;

    constructor(nbStars) {
        if (nbStars < 1 || nbStars > NB_DRAGON_BALL) {
            console.error(`La Dragon Ball ne peut pas avoir ${nbStars}`);
            return;
        }

        this.nbStars = nbStars;
    }

    getImgSrc() {
        return `assets/img/dragon_balls/dragon_ball_${nbStars.toString().padStart(2, '0')}.png`;
    }
}
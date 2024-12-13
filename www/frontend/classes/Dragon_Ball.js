class DragonBall {
    constructor(nbStars) {
        if (nbStars < 1 || nbStars > NB_DRAGON_BALL) {
            console.error(`La Dragon Ball ne peut pas avoir ${nbStars}`);
            return;
        }

        this.nbStars = nbStars;
        this.imgSrc = `assets/img/dragon_balls/dragon_ball_${nbStars.toString().padStart(2, '0')}.png`;
    }
}
const NB_DRAGON_BALL = 7;
class Radar {
    constructor(dragonsballs) {
        this.radarIsSearching = false;

        this.detectionArea = [];
        for (let a = 0; a < NB_DRAGON_BALL; a++) {
            this.detectionArea.push();
        }
    }

    init() {
        // code
    }
}
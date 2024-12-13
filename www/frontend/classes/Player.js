class Player {
    constructor(PlayerData) {
        this.dragonBalls = [];

        for (let a = 0; a < PlayerData["dragonBallPlayer"].length; a++) {
            const db = PlayerData["dragonBallPlayer"][a];
            this.dragonBalls.push(new DragonBall(db["nb-stars"]));
        }
    }
}
// Récuperation des variables utiles
let playerData = get_json_data();
const div_dragonBall_container = document.getElementById('dragonBall-container');

// Afficher les dragons balls
div_dragonBall_container.innerHTML = '';
let DragonsBalls = playerData["dragons-balls"];
if (DragonsBalls.length > 0) {
    const ALIGNEMENTS = [
        "align-items-start",
        "align-items-center",
        "align-items-end"
    ];
    DragonsBalls.forEach(uneDragonBall => {
        // Container
        const db_show = document.createElement("div");
        db_show.classList.add("d-flex");
        db_show.classList.add(ALIGNEMENTS[GetRandomInt(0, ALIGNEMENTS.length)]);
        div_dragonBall_container.appendChild(db_show);

        // Image
        const img_ball = document.createElement("img");
        img_ball.alt = `Dragon Ball à ${5} étoile${"s"}`;
        img_ball.src = `assets/img/dragon_ball/dragon_ball_${5.toString().padStart('0', 2)}.png`;
        db_show.appendChild(img_ball);
    });
} else {
    div_dragonBall_container.innerHTML = `
    <p class="text-center text-light mb-5">
        Vous n'avez pas encore trouvé de Dragon Ball !<br>
        Lorsque vous en aurez récupéré une, elle sera affichée ici.
    </p>`;
}
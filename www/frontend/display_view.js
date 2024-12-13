

function displayHomePage() {
    page_Home.style.display = 'block';
    displayUsersDragonBalls();
}

function displayRadarPage() {
    page_Radar.style.display = 'block';
}

function displayUsersDragonBalls() {
    // Afficher les dragons balls
    const div_dragonBall_container = document.getElementById('dragonBall-container');
    div_dragonBall_container.innerHTML = '';
    let userDragonsBalls = playerObject.dragonBalls;
    if (userDragonsBalls.length > 0) {
        const ALIGNEMENTS = [
            "align-items-start",
            "align-items-center",
            "align-items-end"
        ];
        userDragonsBalls.forEach(uneDragonBall => {
            // Container
            const db_show = document.createElement("div");
            db_show.classList.add("d-flex", "col-2", "m-1");
            db_show.classList.add(ALIGNEMENTS[GetRandomInt(0, ALIGNEMENTS.length - 1)]);
            div_dragonBall_container.appendChild(db_show);

            // Image
            const img_ball = document.createElement("img");
            console.log(uneDragonBall);
            
            img_ball.alt = `Dragon Ball à ${uneDragonBall.nbStars} étoile${"s"}`;
            img_ball.src = `assets/img/dragon_balls/dragon_ball_${uneDragonBall.nbStars.toString().padStart(2, '0')}.png`;
            db_show.appendChild(img_ball);
        });
    } else {
        div_dragonBall_container.innerHTML = `
        <p class="text-center text-light mb-5">
        Vous n'avez pas encore trouvé de Dragon Ball !<br>
        Lorsque vous en aurez récupéré une, elle sera affichée ici.
        </p>`;
    }

    // Activer / Désactiver l'accès à Shenron
    if (userDragonsBalls.length !== 7) {
        const div_shenron = document.getElementById('btn_toShenron');
        div_shenron.classList.add('disabled');
    }
}
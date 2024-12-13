/**
 * Fonction pour afficher la page d'accueil
 */
function displayHomePage(player) {
    hideAllPages();

    // Afficher les dragons balls
    const div_dragonBall_container = document.getElementById('dragonBall-container');
    div_dragonBall_container.innerHTML = '';
    if (player.hand.length > 0) {
        const ALIGNEMENTS = [
            "align-items-start",
            "align-items-center",
            "align-items-end"
        ];
        player.hand.forEach(uneDragonBall => {
            // Container
            const db_show = document.createElement("div");
            db_show.classList.add("d-flex", "col-2", "m-1");
            db_show.classList.add(ALIGNEMENTS[GetRandomInt(0, ALIGNEMENTS.length - 1)]);
            div_dragonBall_container.appendChild(db_show);

            // Image
            const img_ball = document.createElement("img");
            img_ball.alt = `Dragon Ball à ${uneDragonBall.nbStars} étoile${"s"}`;
            img_ball.src = uneDragonBall.getImgSrc();
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
    if (player.hand.length !== 7) {
        const div_shenron = document.getElementById('btn_toShenron');
        div_shenron.classList.add('disabled');
    }

    // Afficher la page
    page_Home.style.display = 'block';
}

/**
 * Fonction pour afficher la page de radar
 */
function displayRadarPage() {
    hideAllPages();
    page_Radar.style.display = 'block';
}

/**
 * Fonction pour afficher la page de shenron
 */
function displayShenronPage() {
    hideAllPages();
    page_Shenron.style.display = 'block';
}
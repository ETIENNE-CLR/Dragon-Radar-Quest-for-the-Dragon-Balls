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
        
    });
} else {
    div_dragonBall_container.innerHTML = `
    <p class="text-center text-light mb-5">
        Vous n'avez pas encore trouvé de Dragon Ball !<br>
        Lorsque vous en aurez récupéré une, elle sera affichée ici.
    </p>`;
}
function logoToMenu() {
    console.log('click');
    window.location = 'accueil.html';
}

function edit() {
    // Code de la fonction edit ici
    console.log('Accès à la fonction edit');
}

function promptAdmin(counter = 0) {
    let id = prompt("Nom du profil administrateur : ");
    if (id === null) {
        return;
    }

    if (id === 'admin') {
        let mdp = prompt("Mot de passe du profil administrateur : ");
        if (mdp === null) {
            return;
        }

        if (mdp === 'admin_pwd') {
            edit();
        } 
        else{
            counter++;
            alert("Mauvais mot de passe !");
            if (counter >= 3) {
                alert("Vous avez déjà fait 3 tentatives !");
                return;
            } 
            else{
                promptAdmin(counter);
            }
        }
    } 
    else{
        counter++;
        alert("Mauvais nom de profil !");
        if (counter >= 3) {
            alert("Vous avez déjà fait 3 tentatives !");
            return;
        } 
        else{
            promptAdmin(counter);
        }
    }
}

function main() {
    // logo pour aller vers le menu
    let logos = document.querySelectorAll('.logo');
    // Ajoutez l'événement clic à chaque logo
    logos.forEach(logo => {
        logo.addEventListener('click', logoToMenu);
    });

    let editButton = document.querySelector('button');
    editButton.addEventListener('click', () => promptAdmin());
}

main();


function logoToMenu(){
    console.log('click');
    window.location = 'accueil.html';
}
function main(){
    let logos = document.querySelectorAll('.logo');
    // Ajoutez l'événement clic à chaque logo
    logos.forEach(logo => {
        logo.addEventListener('click', logoToMenu);
    });
}



main()
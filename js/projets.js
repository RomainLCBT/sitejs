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


function scroll() {
    const arrow = document.querySelector('.arrow');
    if (arrow) {
        arrow.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }
}

main(
    scroll()
);
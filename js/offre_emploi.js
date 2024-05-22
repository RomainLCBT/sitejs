function logoToMenu(){
    window.location = 'accueil.html';
}
function main(){
    let logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.addEventListener('click', logoToMenu);
    });
}
main()



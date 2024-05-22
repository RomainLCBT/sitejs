function copiePlagiat(){
    console.log("Attention au plagiat !\nVoici les deux règles à respecter pour ne pas plagier :\n-Guillemets obligatoires\n-Références obligatoires ");
}
function yesOrNo(){
    let answer = confirm(" Voulez-vous naviguer dans l'onglet membres ?");
    if(answer == true){
        window.location = 'membres.html';
    }
}
// les fonctions des différents téléphones d'isen
function phoneNantes(){
    let phoneNumber = document.getElementsByClassName('phone')[0].innerHTML;
    let answer = prompt("Si vous voulez appeler ce numéro : "+ phoneNumber + " entrez le de nouveau dans le champ ci-dessous puis validez");
    let audio = new Audio("Son/den-den-mushi.mp3");
    if( answer == phoneNumber ){
        console.log("vous appelez ce numéro : " +phoneNumber);
        audio.play();
        audio.addEventListener('timeupdate', function() {
            if (this.currentTime >= 5) {
                audio.pause();
            }
        });
    }
}
function phoneRennes(){
    let phoneNumber = document.getElementsByClassName('phone')[1].innerHTML;
    let answer = prompt("Si vous voulez appeler ce numéro : "+ phoneNumber + " entrez le de nouveau dans le champ ci-dessous puis validez");
    let audio = new Audio("Son/PlayBoy.mp3");
    if( answer == phoneNumber ){
        console.log("vous appelez ce numéro : " +phoneNumber);
        audio.play();
        audio.addEventListener('timeupdate', function() {
            if (this.currentTime >= 5) {
                audio.pause();
            }
        });
    }
}
function phoneBrest(){
    let phoneNumber = document.getElementsByClassName('phone')[2].innerHTML;
    let answer = prompt("Si vous voulez appeler ce numéro : "+ phoneNumber + " entrez le de nouveau dans le champ ci-dessous puis validez");
    let audio = new Audio("Son/Sacha.blc.mp3");
    if( answer == phoneNumber ){
        console.log("vous appelez ce numéro : " +phoneNumber);
        audio.play();
        audio.addEventListener('timeupdate', function() {
            if (this.currentTime >= 5) {
                audio.pause();
            }
        });
    }
}
function phoneCaen(){
    let phoneNumber = document.getElementsByClassName('phone')[3].innerHTML;
    let answer = prompt("Si vous voulez appeler ce numéro : "+ phoneNumber + " entrez le de nouveau dans le champ ci-dessous puis validez");
    let audio = new Audio("Son/visca_psg.mp3");
    if( answer == phoneNumber ){
        console.log("vous appelez ce numéro : " +phoneNumber);
        audio.play();
        audio.addEventListener('timeupdate', function() {
            if (this.currentTime >= 5) {
                audio.pause();
            }
        });
    }
}
function phoneMaroc(){
    let phoneNumber = document.getElementsByClassName('phone')[4].innerHTML;
    let answer = prompt("Si vous voulez appeler ce numéro : "+ phoneNumber + " entrez le de nouveau dans le champ ci-dessous puis validez");
    let audio = new Audio("Son/INDIAN MEME SONG FOR YOUR RINGTONE.mp3");
    if( answer == phoneNumber ){
        console.log("vous appelez ce numéro : " +phoneNumber);
        audio.play();
        audio.addEventListener('timeupdate', function() {
            if (this.currentTime >= 5) {
                audio.pause();
            }
        });
    }
}
function main(){
    // avertissement plagiat quand on copie
    let copy = document.querySelector('html');
    copy.addEventListener('copy', copiePlagiat);


    //yes or no pour membres
    let membres = document.getElementsByClassName('menucase')[2];
    membres.addEventListener('click', yesOrNo);

    //phone copy et prompt et sonnerie
    let phoneNumber = document.getElementsByClassName('phone')[0];
    phoneNumber.addEventListener('copy', phoneNantes);
    let phoneNumber2 = document.getElementsByClassName('phone')[1];
    phoneNumber2.addEventListener('copy', phoneRennes);
    let phoneNumber3 = document.getElementsByClassName('phone')[2];
    phoneNumber3.addEventListener('copy', phoneBrest);
    let phoneNumber4 = document.getElementsByClassName('phone')[3];
    phoneNumber4.addEventListener('copy', phoneCaen);
    let phoneNumber5 = document.getElementsByClassName('phone')[4];
    phoneNumber5.addEventListener('copy', phoneMaroc);
}
main();
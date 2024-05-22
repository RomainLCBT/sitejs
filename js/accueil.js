function addSegments(digitId){
    let digitElement = document.getElementById(digitId); // on prend l'element digitId passer en paramètre
    for (let i = 0; i < 7; i++) { // boucle de 0 a 6 pour chaque segments
        let segment = document.createElement('div');// on créé un élément div
        segment.classList.add('segment', 'off', `segment${i}`); // on ajoute toutes les classes
        digitElement.appendChild(segment); // on oublie pas d'ajouter l'enfant(segment)
    }
}

function updateDigit(digitId, value){

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];
    let digitElement = document.getElementById(digitId);
    let segments = segmentStates[value]; // on affecte a segment la ligne du tableau qui correspond a value
    let segmentsElements = digitElement.children;
    let segLenght = segmentsElements.length;
    for (let i=0;i<segLenght;i++){ // boucle qui traverse tout les éléments de la ligne du tableau de value
        if(segments[i] == 1){
            segmentsElements[i].classList.remove('off'); // on enleve la class si la valeur dans le tableau est 1
        }
        else{
            segmentsElements[i].classList.add('off');// sinon on la met
        }
    }
    let points = document.getElementById(colon);
}
function pointsElements(){
    let colon = document.getElementById('colon');
    let colon2 = document.getElementById('colon2');
    if(colon.classList.contains('off')){
        colon.classList.remove('off');
    }      
    else{
        colon.classList.add('off');
    }
    if(colon2.classList.contains('off')){
        colon2.classList.remove('off');
    }      
    else{
        colon2.classList.add('off');
    }

}
function time(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return [hours, minutes, seconds];
}


function init(){ // on ajoute chaque paramètre de l'horloge mit dans le html avec addSegments
    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
    addSegments("seconds-tens");
    addSegments("seconds-units");
}
function final(){
    let [hours, minutes, seconds] = time();
    let hoursTens = Math.floor(hours / 10);
    let hoursUnits = hours % 10;
    let minutesTens = Math.floor(minutes / 10);
    let minutesUnits = minutes % 10;
    let secondsTens = Math.floor(seconds / 10);
    let secondsUnits = seconds % 10;
    updateDigit("hours-tens",hoursTens);
    updateDigit("minutes-tens",minutesTens);
    updateDigit("minutes-units",minutesUnits);
    updateDigit("hours-units",hoursUnits);
    updateDigit("seconds-tens",secondsTens);
    updateDigit("seconds-units",secondsUnits);
}
function zoom(){
    let competence = document.getElementsByClassName('arbreimg')[0];
    competence.style.transform = 'scale(1.5)';
}
function zoomOut(){
    let competence = document.getElementsByClassName('arbreimg')[0];
    competence.style.transform ='scale(1)';
}
function main(){
    init();
    final();
    setInterval(pointsElements,1000);
    setInterval(final, 1000);
    let competence = document.getElementsByClassName('arbreimg')[0];
    competence.addEventListener('mouseover',zoom);
    competence.addEventListener('click',zoom);
    competence.addEventListener('mouseleave', zoomOut);
}

main();
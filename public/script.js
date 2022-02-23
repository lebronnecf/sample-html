/* JEU CHIFFRE MYSTERE */

let nbMystere = Math.floor(Math.random() * 100);
let count = 0;
let bestScore; // variable juste déclarée, ne contient rien au debut de l'algo
console.log(nbMystere);


const form = document.querySelector('#form-mystere');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let choiceButton = document.querySelector('input[name="number"]');
    let choiceNumber = choiceButton.value;
    console.log(choiceNumber);

    let selectMessage = document.querySelector('#message');
    let messageRecord = document.querySelector('div[name="record"]')
// code Nico ci-dessous, fonctionne mais pas optimisé 
    // if (choiceNumber > nbMystere) {
    //     selectMessage.innerText = "Too high"
    // };
    // if (choiceNumber < nbMystere) {
    //     selectMessage.innerText = "Too low"
    // };
    // if (parseInt(choiceNumber) === parseInt(nbMystere)) {
    //     selectMessage.innerText = "Great"
    // };  
// code PIerre 
    
    count++

    if (choiceNumber > nbMystere) {
        selectMessage.innerText = "C'est moins";
    } else if (choiceNumber < nbMystere) {
        selectMessage.innerText = "C'est plus";
    } else { 
        selectMessage.innerText  = "Bravo, tu as gagné avec " + count + " tentative(s) ! ";
        // changer la couleur du texte si le meilleure score est battu
        if (typeof bestScore === 'undefined' || bestScore > count) {
            selectMessage.style.color = 'green';
            bestScore = count;
            messageRecord.innerText = "Ton meilleur score est de " + bestScore + " tentative(s)"
            messageRecord.style.color = 'orange'
            messageRecord.style.fontSize = "1.5rem"
        }
        const buttonReplay = document.createElement('button');
        selectMessage.appendChild(buttonReplay);
        buttonReplay.innerText = "Rejouer"
        buttonReplay.addEventListener('click', function(event) {
            event.preventDefault();
            form.reset(); // appelle le formulaire et pas l'input, pour vider l'input
            selectMessage.innerText = ''; //enlève le texte + le button rejouer
            count = 0;
            nbMystere = Math.floor(Math.random() * 100);
            console.log(nbMystere);
            selectMessage.style.color = 'black';
        })
    };
})

/* JEU ALPHABET */

const alphabet = ['A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numeroAlphabet = Math.floor(Math.random() * 27);
let lettreAlphabet = alphabet[numeroAlphabet]
console.log(numeroAlphabet);
console.log(alphabet[numeroAlphabet])

let consigneAlphabet = document.querySelector('#consigne-alphabet')
consigneAlphabet.innerText = "Quelle est la lettre n° " + numeroAlphabet + " de l'alphabet ?";
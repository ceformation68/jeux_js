let randomNumber = Math.floor(Math.random() * 100) + 1;
const hint = document.getElementById('hint');
let input = document.getElementById("userGuess");
let nbEssai	= 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
	nbEssai++;
    if (userGuess < randomNumber) {
        hint.textContent = 'Plus grand !';
    } else if (userGuess > randomNumber) {
        hint.textContent = 'Plus petit !';
    } else {
        hint.textContent = 'Félicitations ! Vous avez trouvé le bon nombre en '+nbEssai+' essai(s).';
        document.getElementById('userGuess').disabled = true;
        document.getElementById('userGuessBtn').disabled = true;
    }
}

// Ajout de la validation de l'input
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkGuess();
  }
});

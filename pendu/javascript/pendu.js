const arrLetters = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
const arrWords = new Array("Pommeraie", "Chocolat", "Bavard comme une pie.", "Céder au chant des sirènes.", "Réussir c'est vivre sans regret.", "Faussaire");
let word, intTour;
init();
// Initialisation du pendu
function init() {
  if (arrWords.length > 0) {
    intTour = 0;
    // Création des boutons de chaque lettre
    document.getElementById('letters').innerHTML = "";
    for (i = 0; i < 26; i++) {
      document.getElementById('letters').innerHTML += "<button class='btn btn-default' id='" + arrLetters[i] + "' onClick=\"choice('" + arrLetters[i] + "')\">" + arrLetters[i] + "</button>";
    }
    // Création du tableau des réponses
    // Récupération d'un mot en aléatoire dans le tableau
    idRandom = Math.floor(Math.random() * arrWords.length);
    word = arrWords[idRandom].toUpperCase();
    arrWords.splice(idRandom, 1);
    // Affichage du mot avec des _
    document.getElementById("word").innerHTML = "";
    for (j = 0; j < word.length; j++) {
      if (arrLetters.indexOf(word.substr(j, 1)) == -1) {
        document.getElementById("word").innerHTML += word.substr(j, 1);
      } else {
        document.getElementById("word").innerHTML += "_";
      }
    }
    // initialisation de l'image
    document.getElementById("imagePendu").src = "images/0.png";
    document.getElementById("letters").className = "";
  } else {
    alert("Vous avez terminéle jeu.");
  }
}
// Au clic sur chaque lettre
function choice(letter) {
  let wordHtml = document.getElementById("word").innerHTML;
  let boolFind = false;
  for (k = 0; k < word.length; k++) {
    if (word.substr(k, 1) == letter) {
      wordHtml = wordHtml.substr(0, k) + word.substr(k, 1) + wordHtml.substr(k + 1, wordHtml.length);
      boolFind = true;
    }
  }
  document.getElementById("word").innerHTML = wordHtml;
  document.getElementById(letter).disabled = true;

  if (!boolFind) { // la lettre n'est pas trouvée
    document.getElementById(letter).className = "btn btn-danger";
    intTour++;
    if (intTour < 6) {
      document.getElementById("imagePendu").src = "images/" + intTour + ".png";
    } else {
      document.getElementById("imagePendu").src = "images/loose.png";
      document.getElementById("letters").innerHTML = "Vous avez perdu ! ";
      document.getElementById("letters").className = "alert alert-danger";
      document.getElementById("word").innerHTML = "<p>Il fallait trouver : " + word + "</p><button onClick=\"init()\">Recommencer</button>";
    }
  } else { // la lettre est trouvée
    document.getElementById(letter).className = "btn btn-success";
    if (wordHtml.indexOf("_") == -1) {
      document.getElementById("letters").innerHTML = "Bravo ! ";
      document.getElementById("letters").className = "alert alert-success";
      document.getElementById("word").innerHTML = "<p>Vous avez trouvé : " + word + "</p><button onClick=\"init()\">Recommencer</button>";
    }
  }
}
/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
  // Récupération de la zone dans laquelle on va écrire le score
  let spanScore = document.querySelector(".zoneScore span");
  // Ecriture du texte
  let affichageScore = `${score} / ${nbMotsProposes}`;
  // On place le texte à l'intérieur du span.
  spanScore.innerText = affichageScore;
}

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
  // Initialisations

  let score = 0;
  let nbMotsProposes = 0;
  let i = 0;

  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  afficherProposition(listeMots[i]);
  btnValiderMot.addEventListener("click", function () {
    console.log(inputEcriture.value);
    i++;
    inputEcriture.value = "";
    if (listeMots[i] === undefined) {
      afficherProposition("le jeu est fini !");
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(listeMots[i]);
    }
  });

  afficherResultat(score, nbMotsProposes);
}

// inputEcriture.addEventListener("value", function () {
//   console.log("inputEcriture.value");
// });

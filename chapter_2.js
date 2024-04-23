console.log("Hello World");

//  Exercice 4 / OK

// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;

// Déclaration de la variable contenant le mot saisi par l'utilisateur
// Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
let motUtilisateur = prompt("Entrez le mot : " + listeMots[0]);

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
if (motUtilisateur === listeMots[0]) {
  score++;
}

// Idem avec le second mot du tableau
// Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", cela permet de réutiliser la variable déclarée précédemment
motUtilisateur = prompt("Entrez le mot : " + listeMots[1]);
if (motUtilisateur === listeMots[1]) {
  score++;
}

// Idem avec le troisième mot du tableau
motUtilisateur = prompt("Entrez le mot : " + listeMots[2]);
if (motUtilisateur === listeMots[2]) {
  score++;
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3");
// _________________________________________________________________________________________________________________

//  Exercice 5 /

console.log("Hello World");

// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];

let score = 0;

// Déclaration de la variable contenant le choix de l'utilisateur
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while (choix !== "mots" && choix !== "phrases") {
  choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");
}

if (choix === "mots") {
  // On parcourt le tableau des mots
  for (let i = 0; i < listeMots.length; i++) {
    // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i]);
    if (motUtilisateur === listeMots[i]) {
      // Si le mot saisi par l'utilisateur est correct, on incrémente le score
      score++;
    }
  }
  console.log("Votre score est de " + score + " sur " + listeMots.length);
} else {
  // On parcourt le tableau des phrases
  for (let i = 0; i < listePhrases.length; i++) {
    // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
    let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i]);
    if (phraseUtilisateur === listePhrases[i]) {
      // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
      score++;
    }
  }
  console.log("Votre score est de " + score + " sur " + listePhrases.length);
}

// A noter : ce n'est pas la seule réponse valide pour cet exercice, il en existe d'autres plus optimisées,
// mais nous verrons cela dans les prochains chapitres.

// _________________________________________________________________________________________________________________

//  Exercice 6 /

// _________________________________________________________________________________________________________________

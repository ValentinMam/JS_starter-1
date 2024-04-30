// Récuperez des données du formulaire

{
  /* <input type="text" id="nom" name="nom"> */
}

let baliseNomGet = document.getElementById("nom");
let nom = baliseNomGet.value;
console.log(nom); // affiche ce qui est contenu dans la balise name

{
  /* <input type="checkbox" id="accepter" name="accepter"> */
}
let baliseAccepter = document.getElementById("accepter");
let accepter = baliseAccepter.checked;
console.log(accepter); // affiche true ou false

{
  /* <label>Préférence de couleur :</label>
<input type="radio" id="red" name="couleur" value="red" checked>
<label for="red">Rouge</label>
<input type="radio" id="blue" name="couleur" value="blue">
<label for="blue">Bleu</label>
<input type="radio" id="green" name="couleur" value="green">
<label for="green">Vert</label> */
}

let baliseCouleur = document.querySelectorAll('input[name="couleur"]');
let couleur = "";
for (let i = 0; i < baliseCouleur.length; i++) {
  if (baliseCouleur[i].checked) {
    couleur = baliseCouleur[i].value;
    break;
  }
}
console.log(couleur); // affiche la valeur du radio coché

//  Evitez le rechargement de la page au submit du formulaire avec preventDefault

{
  /* <form>
    <!-- champ nom -->
    <label for="nom">Nom</label>
    <input type="text" id="nom" name="nom" placeholder="Votre nom">
    <!-- champ email -->
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Votre email">
    <!-- bouton de validation -->
    <button>Envoyer</button>
</form> */
}

const formulaire = document.querySelector("form");
// Quand on submit
formulaire.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  console.log("Il n’y a pas eu de rechargement de page");
  // On récupère les deux champs et on affiche leur valeur
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  console.log(nom);
  console.log(email);
});

// VALIDATION FORMULAIRE : Vérifiez un champ à l’envoi du formulaire

// <form>
//     <!-- champ nom -->
//     <label for="nom">Nom</label>
//     <input type="text" id="nom" name="nom" placeholder="Votre nom">
//     <!-- champ email -->
//     <label for="email">Email</label>
//     <input type="email" id="email" name="email" placeholder="Votre email">
//     <!-- bouton de validation -->
//     <button>Envoyer</button>
// </form>

// const form = document.querySelector("form");
// // Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
// form.addEventListener("submit", (event) => {
//   // On empêche le comportement par défaut
//   event.preventDefault();
//   // On fait la vérification.
//   const baliseNom = document.getElementById("nom");
//   const valeurNom = baliseNom.value;
//   if (valeurNom === "") {
//     console.log("Le champ nom est vide");
//   } else {
//     console.log("Le champ nom est rempli");
//   }
// });

// en supplément, vous pouvez utiliser trim() pour "nettoyer" les tabulations et autres espaces avant  de tester la chaine de caractères.

// VALIDATION FORMULAIRE : Vérifiez un champ à la saisie d’un champ du formulaire

// •	l’événement input : il se déclenche à chaque fois que l’utilisateur tape une lettre dans le champ ;
// •	l’événement change : il se déclenche quand l’utilisateur a fini de taper, et sélectionne un autre élément de la page.

const baliseNom = document.getElementById("nom");
baliseNom.addEventListener("change", (event) => {
  const valeurNom = event.target.value;
  if (valeurNom === "") {
    console.log("Le champ nom est vide");
  } else {
    console.log("Le champ nom est rempli");
  }
});

// REGEX
let chaine = "cachalot"; // Testez avec des chiffres pour voir la différence
let regex = new RegExp("^[a-z]+$");
let resultat = regex.test(chaine);
console.log(resultat); // Affiche true.

// GESTION DES ERREURS : if / else pour gérer les erreurs courantes

let maVariable = document.getElementById("idInexistant");
maVariable.createElement("div");

// declenche une erreur = gestion non optimisée car nous pourrions avoir besoin de réutiliser cette gestion d'erreur dans une autre partie du projet

// let maVariable = document.getElementById("idInexistant");
// if (maVariable === null) {
//   console.log("L'élément n'existe pas");
// } else {
//   maVariable.createElement("div");
//   // suite du traitement...
// }

try {
  let maVariable = document.getElementById("idInexistant");
  maVariable.createElement("div");
  // suite du traitement
} catch {
  console.log("Il y a eu une erreur dans le bloc try");
}

function verifierChamp(champ) {
  // Si le champ est vide, on lance une exception
  if (champ.value === "") {
    throw new Error(`Le champ ${champ.id} est vide`);
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  try {
    event.preventDefault();
    let baliseNom = document.getElementById("nom");
    verifierChamp(baliseNom);
    let balisePrenom = document.getElementById("prenom");
    verifierChamp(balisePrenom);
    let baliseSurnom = document.getElementById("surnom");
    verifierChamp(baliseSurnom);
    // traitement du formulaire
    // ...
  } catch (error) {
    console.log("Une erreur est survenue : " + error.message);
  }
});

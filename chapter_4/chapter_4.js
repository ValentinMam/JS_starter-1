// Récuperez des données du formulaire

{
  /* <input type="text" id="nom" name="nom"> */
}

let baliseNom = document.getElementById("nom");
let nom = baliseNom.value;
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

const form = document.querySelector("form");
// Quand on submit
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  console.log("Il n’y a pas eu de rechargement de page");
  // On récupère les deux champs et on affiche leur valeur
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  console.log(nom);
  console.log(email);
});

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

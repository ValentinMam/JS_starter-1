//
// RECUPERER : READ_____________________________________________________________________________
//

// CHAPITRE 3 : getElementById
let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);

console.log(baliseZoneProposition.clientHeight);
console.log(baliseZoneProposition.innerHTML);

// CHAPITRE 3 : QuerySelector

let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
console.log(baliseZonePropositionSpan);

// CHAPITRE 3 : QuerySelectorAll

let listeInputRadio = document.querySelectorAll(".zoneChoix input");
console.log(listeInputRadio);

for (let i = 0; i < listeInputRadio.length; i++) {
  console.log(listeInputRadio[i]);
}

//
// MODIFIER : UPDATE_____________________________________________________________________________
//

// <img
//   id="premiereImage"
//   src="image.jpg"
//   alt="Ceci est une image de test"
//   class="photo flexCenter"
// />;

// CHAPITRE 3 : setAttribute (permet de spécifier n’importe quel attribut)

let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt");

// OU
baliseImage.alt = "Ceci est une image de test modifiée";

// CHAPITRE 3 : classList  (qui permet de modifier des classes)

baliseImage.alt = "Ceci est une image de test modifiée";
baliseImage.classList.add("nouvelleClasse");
baliseImage.classList.remove("photo");

// CHAPITRE 3 : vérification avec l'inspecteur

let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est une image de test modifiée");
baliseImage.src = "cheminImage.jpg";
baliseImage.classList.add("nouvelleClasse");
baliseImage.classList.remove("photo");

//
// CREER : CREATE_____________________________________________________________________________
//

// CHAPITRE 3 : createElement (créer une nouvelle balise)

let nouvelElement = document.createElement("div");

// Récupérer un élément parent existant
let parentElement = document.getElementById("conteneur");
// Ajouter le nouvel élément au parent
parentElement.appendChild(nouvelElement);

// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Azertype";
let contenuParagraphe = "L'application pour apprendre à taper plus vite !";
// Création d'un div avec createElement. Dans cette div, on va créer un titre h1 et un paragraphe p
let nouvelleDiv = document.createElement("div");
let nouveauTitre = document.createElement("h1");
let nouveauParagraphe = document.createElement("p");
// On ajoute du texte dans le titre et le paragraphe
nouveauTitre.textContent = contenuTitre;
nouveauParagraphe.textContent = contenuParagraphe;
// On ajoute le titre et le paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre);
nouvelleDiv.appendChild(nouveauParagraphe);
// On ajoute la div dans le body
let body = document.querySelector("body");
body.appendChild(nouvelleDiv);

// CHAPITRE 3 : l’interpolation pour générer du HTML

// let contenuTitre = "Azertype";
// let contenuParagraphe = "L'application pour apprendre à taper plus vite !";
// let div = `
//     <div>
//         <h1>${contenuTitre}</h1>
//         <p>${contenuParagraphe}</p>
//     </div>
//     `;

// CHAPITRE 3 : innerHTML (pour insérer du HTML)

// let body = document.querySelector("body");
body.innerHTML = div;

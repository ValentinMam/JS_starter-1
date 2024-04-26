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

<img
  id="premiereImage"
  src="image.jpg"
  alt="Ceci est une image de test"
  class="photo flexCenter"
/>;

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

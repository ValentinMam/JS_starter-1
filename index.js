// Exercice 1

let totalLivres = 500;

totalLivres += 50;
totalLivres -= 10;
totalLivres += 5;

console.log(totalLivres);

let affichageTotalLivres = "Notre bibliothèque possède ";
affichageTotalLivres += totalLivres;
affichageTotalLivres += " livres.";

console.log(affichageTotalLivres);

// Exercice 2

const ticket = {
  nomFilm: "Batman",
  prix: 10,
  numeroSalle: 3,
};

let nom = "David";

// Bonjour nom, votre film NOMDEFILM est en salle NUMERODELASALE

let texteAffichage =
  "Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle;

console.log(texteAffichage);

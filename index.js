// Exercice 1 / OK

let totalLivres = 500;

totalLivres += 50;
totalLivres -= 10;
totalLivres += 5;

console.log(totalLivres);

let affichageTotalLivres = "Notre bibliothèque possède ";
affichageTotalLivres += totalLivres;
affichageTotalLivres += " livres.";

// FONCTIONNE EGALEMENT
// let affichageTotalLivres = "Notre bibliothèque possède" + totalLivres + "livres";

console.log(affichageTotalLivres);

// _________________________________________________________________________________________________________________

// Exercice 2 / OK

let ticket = {
  nomFilm: "Batman",
  prix: 10,
  numeroSalle: 3,
};

let nom = "Val";

let texteAffichage =
  "Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle;

console.log(texteAffichage);

// BONUS AVEC LE PRIX

// texteAffichage =
//   "Bonjour " +
//   nom +
//   ", votre film " +
//   ticket.nomFilm +
//   ", que vous avez payé " +
//   ticket.prix +
//   " €, est en salle " +
//   ticket.numeroSalle;

// console.log(texteAffichage);

// _________________________________________________________________________________________________________________

// Exercice 3 / OK

let playlist = ["A kind of magic", "We are the champions", "The show must go on"];

playlist.push("Innuendo");
playlist.push("Radio Gaga");

playlist.pop();

console.log(playlist);

// BONUS LE NOMBRE DE MORCEAUX DANS LA PLAYLIST

// let totalMorceaux = playlist.length;
// console.log(totalMorceaux);

// _________________________________________________________________________________________________________________

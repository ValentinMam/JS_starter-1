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

# CHAPITRE #1

## Exercice 1

Vous gérez une bibliothèque qui contient 500 livres. Vous décidez de faire les opérations suivantes :

- acheter 50 livres de plus ;
- en jeter 10 ;
- racheter 5 des livres jetés.

1. Créez une variable totalLivres initialisée à 500 et dans laquelle vous réaliserez ces opérations une par une, jusqu’à avoir le nombre final de livres.
2. Vérifiez le résultat grâce à l’instruction console.log.
3. Créez une nouvelle variable appelée affichageTotalLivres, en utilisant le résultat total précédemment calculé.
   Cette variable devra contenir la chaîne de caractères ci-dessous :
   “Notre bibliothèque possède TOTAL livres”
   Avec TOTAL qui sera remplacé par le contenu de la variable totalLivres.
4. Affichez cette phrase grâce à l’instruction console.log.

## Exercice 2

Vous êtes chargé de la maintenance d’une borne automatique qui permet de récupérer son billet de cinéma. Vous devez préparer la sortie du prochain film Batman, et faire en sorte que les utilisateurs puissent récupérer un billet pour ce nouveau film.

1. Déclarez le nouveau ticket de cinéma
   Un ticket de cinéma a plusieurs propriétés : un nom de film, un prix, un numéro de salle.

- Déclarez un objet ticket avec les propriétés suivantes :
  o nomFilm ;
  o prix ;
  o numeroSalle.
- Déclarez une variable nom avec votre nom.

2. Affichez les informations sur la borne

- Affichez un message sur la borne : “Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE”.
- Créez une variable texteAffichage qui contient cette phrase, avec NOM, NOMDEFILM et NUMERODELASALLE remplacés par leur vraie valeur.
- Vérifiez le résultat avec un console.log.

## Exercice 3

Vous organisez une soirée avec des amis. Une bonne soirée, c’est souvent une bonne musique ! Mais pour cela, vous devez vous organiser.

1. Déclarez les morceaux de votre playlist

Commençons par faire un inventaire des CD en votre possession.

- Déclarez un tableau playlist qui contiendra trois de vos morceaux préférés.
- Stockez le nombre de morceaux disponibles dans une variable totalMorceaux.

2. Ajoutez les morceaux de vos amis

Pour plaire à tout le monde, vous décidez de laisser vos amis choisir deux morceaux supplémentaires pour compléter votre collection.

- Ajoutez deux morceaux au tableau playlist de manière à porter le total à cinq morceaux.

3. Enlevez le dernier morceau de votre playlist

Malheureusement, certains ne sont pas d’accord avec le dernier morceau ajouté. Il va falloir faire du tri !

- Supprimez le dernier morceau ajouté à votre collection.

# CHAPITRE #2

L’utilisateur va devoir recopier un mot qui lui est proposé. Si le mot est correct, son score augmentera, sinon… Eh bien, il ne se passera rien

si “mot tapé par l’utilisateur” == “mot proposé”
alors “on augmente le score”

## Exercice 4

Vous avez appris à tester un mot dans notre application. Votre objectif est maintenant d’en tester trois à la suite, et toujours pas à pas !

1.  Testez le premier mot

- Déclarez une variable listeMots qui est un tableau.
  Ce tableau contient trois mots que l’utilisateur devra taper au clavier : “Cachalot”, “Pétunia” et “Serviette”.
- Déclarez une deuxième variable score, initialisée à 0, qui contiendra le nombre de mots correctement tapés par l’utilisateur.
- À l’aide de l’instruction prompt, demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau. N’oubliez pas, la première case d’un tableau est la case numéro zéro !
- Écrivez une première structure conditionnelle pour savoir si le mot tapé par l’utilisateur est bien celui demandé par l’application.

Si c’est le cas, on augmente la valeur de score de 1.
Vérifiez avec des console.log si le score final est correct.

2. Testez le second mot

- Demandez à l’utilisateur de rentrer le second mot.
- Faites une seconde structure conditionnelle pour vérifier si le second mot tapé par l’utilisateur correspond bien au second mot du tableau.

3.  Testez le troisième mot

- Recommencez une troisième fois pour la dernière case du tableau !
  Vous remarquerez peut-être que certaines portions de code vont beaucoup se ressembler dans cet exercice. Pas d'inquiétude, c’est normal à ce stade !

## Exercice 5

Jusqu’à maintenant, nous avons répété trois fois les mêmes instructions dans notre projet :

- 3 “prompts”, qui nous ont permis de demander des mots à l’utilisateur ;
- 3 fois le test pour vérifier que le mot tapé par l’utilisateur est correct.

Je vous propose de factoriser ce code, c'est-à-dire de mettre en commun les parties répétées à l’aide d'une boucle.

1. répétez votre code avec une boucle
   Dans ce dossier [GitHub](https://github.com/OpenClassrooms-Student-Center/7696886-javascript/tree/P2-C2---Conditions), le tableau listeMots contient 3 mots : “Cachalot”, “Pétunia” et “Serviette”. Pour chacun de ces mots, à l’aide d’une boucle for :

- demandez à l’utilisateur de le retaper avec prompt ;
- comptez un point par mot correctement tapé ;
- affichez le score à la fin avec un console.log.

Gardez en tête que l’emplacement des instructions est particulièrement important pour le fonctionnement du code ! Ce qui se trouve dans le bloc d’instruction de la boucle est répété, mais pas ce qui est à l’extérieur.
Ici, votre objectif est de répéter certaines instructions comme le prompt, mais pas toutes les instructions (le score, lui, ne doit pas être affiché).

2.  proposez deux types de listes de mots
    Pour rendre le jeu plus engageant, nous voulons que l’utilisateur puisse avoir le choix entre deux listes de mots différentes : une liste avec des mots et une liste avec des phrases.

- Déclarez un tableau listePhrases qui contient 3 courtes phrases : “Pas de panique !”, “La vie, l’univers et le reste”, “Merci pour le poisson”.
- Demandez à l’utilisateur s’il veut la liste de mots ou la liste de phrases. Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.
- Lancez votre boucle for, avec la liste que l’utilisateur a choisie.

Pour cet exercice, vous pouvez copier deux fois la boucle de jeu :

- une fois dans le if ;
- une fois dans le else.

Mais bien sûr, il existe d’autres manières de réussir l’exercice !

## Exercice 6

1.  découpez votre code en fonctions

Notre but est maintenant d’améliorer l’organisation et la lisibilité de notre [code](https://github.com/OpenClassrooms-Student-Center/7696886-javascript/tree/P2-C3---Les-boucles). Je vous propose donc de créer les fonctions suivantes :

- afficherResultat : cette fonction prend en paramètre le résultat et le nombre total de mots proposés, et affiche le résultat du joueur ;
- choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il veut jouer avec des phrases ou des mots.
  Tant que l’utilisateur n’a pas répondu “phrases” ou “mots”, la question lui est posée en boucle. La fonction ne prend aucun paramètre, mais retourne ce que l’utilisateur a répondu.
- lancerBoucleDeJeu : cette fonction contient la boucle principale de jeu, c'est-à-dire la boucle for qui propose les mots/phrases au joueur, et lui demande de taper ces mots. Elle prend en paramètre le tableau de mots/phrases qui sera proposé au joueur, et retourne le nombre de mots/phrases correctement tapés ;
- lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer toutes les autres. En d’autres termes, c’est elle qui va appeler les fonctions que vous venez d’écrire.

2. séparez votre code en plusieurs fichiers

- Séparez votre code en plusieurs fichiers.
- Créez un fichier config.js qui contiendra uniquement les deux listes de propositions.
- Créez un fichier main.js qui contiendra uniquement l’appel à la fonction principale lancerJeu.
- Vérifiez que tout fonctionne encore.
- Créez un nouveau répertoire appelé “scripts”, et placez-y tous vos fichiers.
- Vérifiez à nouveau votre code.
- Pour réussir cette étape, pensez bien à mettre à jour le fichier HTML !

# CHAPITRE #3

## Exercice 7

Dans cet exercice, je vous propose de récupérer plusieurs éléments dont nous aurons besoin dans le chapitre suivant, lorsque nous procéderons à la modification de la page.
Comme j’aime vous faciliter la vie, j’ai modifié légèrement le projet et réalisé la partie HTML/CSS pour cet exercice. Vous la trouverez [ici](https://github.com/OpenClassrooms-Student-Center/7696886-javascript).

Dans le fichier main.js :

1. Sélectionnez avec la méthode getElementById :

- l’input dans lequel le joueur va écrire son texte ;
- le bouton de validation.

2. Sélectionnez avec la méthode querySelector :

- l’endroit où le mot proposé sera affiché ;
- l’endroit où le score sera affiché.

3. Sélectionnez avec la méthode querySelectorAll :

- les boutons radio de choix.

N’oubliez pas de vérifier que la sélection est correcte à chaque fois, en utilisant un console.log !

## Exercice 8

Pour l’instant, dans notre application, le résultat apparaît uniquement dans la console. Le but ici va être de mettre à jour la page HTML après avoir joué, de manière à afficher le résultat de la partie.
Je vous invite à utiliser ce projet sur GitHub, qui reprend ce que nous avons réalisé ensemble. J’y ai intégré une maquette HTML/CSS que vous pourriez cloner. Cependant, vous pouvez également reprendre votre code et développer le projet vous-même, si vous voulez augmenter le niveau de difficulté de l’exercice.

1. Mettez à jour le HTML

- Modifiez la fonction afficherResultat. Cette fonction ne devra plus afficher le résultat en console, mais directement sur la page HTML sous la forme “score / nbMotsProposes”.

## Exercice 9

Dans cet exercice, je vous propose de revenir sur plusieurs notions abordées tout au long de cette troisième partie du cours, en modifiant notre projet. Pour le réaliser, je vous conseille de partir du [résultat que nous avons obtenu à l’issue de l’exercice précédent](https://github.com/OpenClassrooms-Student-Center/7696886-javascript/tree/P3-C2---Manipulez-un-%C3%A9l%C3%A9ment---Correction-de-l%27exercice)

1. nettoyez le projet
   Votre première étape consiste à supprimer les éléments qui seront modifiés dans notre projet :

   - mettez en commentaire toutes les méthodes qui utilisent prompt ;
   - mettez à jour la fonction lancerJeu pour qu’elle ne fasse plus appel à ces fonctions.
     Vous devez également désactiver temporairement le choix entre la liste des phrases et la liste des mots, de manière à utiliser systématiquement la liste des mots :
   - mettez à jour la fonction lancerJeu, et commentez ce qui concerne la variable listePhrases.

2. gérez le clic sur le bouton « Valider »
   À ce stade, le projet n’est plus fonctionnel, il n’est plus possible de jouer. Vous devez donc reconstruire ce que vous avez commenté à la première étape, en interagissant directement avec la page HTML.
   Votre première étape est de pouvoir réagir au clic sur le bouton “Envoyer” :

   - Dans la fonction lancerJeu, récupérez le bouton de validation et écoutez l’événement click en utilisant la méthode addEventListener.
   - Testez que cela fonctionne avec un console.log(“j’ai cliqué !”).
   - Récupérez la balise inputEcriture et placez-la dans une variable.
   - Dans l’addEventListener, faites un console.log avec la valeur contenue dans cette balise.
     Pour accéder à la valeur contenue dans la balise inputEcriture, utilisez la propriété value.
   - Testez en écrivant quelque chose dans le champ, et en vérifiant que la valeur apparaît bien lorsque vous cliquez sur Envoyer.

3. affichez les mots que l’utilisateur doit recopier
   À ce stade, vous savez comment récupérer le mot que l’utilisateur a écrit, mais vous n’affichez pas encore le mot qu’il devra recopier. Pour réaliser cette mise à jour du code HTML :
   - à l’extérieur du addEventListener, créez une variable i qui servira de compteur. Dans l’addEventListener, ajoutez 1 à i à chaque fois que l’utilisateur clique sur le bouton Envoyer ;
   - ajoutez un console.log qui va afficher le mot numéro i du tableau listeMots ;
   - créez une fonction afficherProposition, qui va prendre en paramètre le mot à afficher, et afficher ce mot dans la div zoneProposition ;
   - utilisez cette fonction pour afficher les mots à proposer.

Après ces opérations, vous devriez voir apparaître les mots un par un après avoir réalisé ces opérations. Cependant, vous remarquerez peut-être que le mot “undefined” s’affiche lorsqu’il n’y a plus de mots disponibles dans le tableau. Pour régler ce problème :

- ajoutez un test dans l’addEventListener. Si le mot numéro i du tableau vaut undefined, écrivez le message “Le jeu est fini” à la place du mot, et désactivez le bouton de validation. Pour désactiver ce bouton, mettez la propriété disabled de ce bouton à true ;
- à chaque fois que l’utilisateur clique sur Valider, videz le champ inputEcriture.

4. gérez le score
   Il nous reste une dernière étape : gérer le score de l’utilisateur.
   - Dans l’addEventListener, comparez ce qu’a écrit l’utilisateur et le mot proposé. Si ces deux mots sont identiques, augmentez le score.
   - Dans tous les cas, mettez à jour le score en appelant la fonction de mise à jour du score avec les bons paramètres.

Je vous invite également à vérifier l’intégralité du projet en consultant [ce corrigé sur GitHub](https://github.com/OpenClassrooms-Student-Center/7696886-javascript/tree/P3-C4---G%C3%A9rez-les-%C3%A9v%C3%A9nements) Toutes mes félicitations pour votre travail !

# CHAPITRE #4

## Exercice 10

Pour l’instant, dans notre application :

- l’utilisateur doit recopier du texte qui provient systématiquement du tableau listeMots ;
- il y a deux boutons radio pour que l’utilisateur puisse choisir entre “Mots” ou “Phrases”, mais ils ne fonctionnent pas.

L’objectif de cet exercice est de gérer ces boutons radio pour les rendre fonctionnels. Ainsi, à l’issue de l’exercice, lorsque l’utilisateur cliquera sur “Phrases”, il devra recopier une phrase. Inversement, lorsqu’il cliquera sur “Mots”, il devra recopier un mot.
Pour y parvenir :

1. Écoutez l’événement “change” sur les boutons radio.

N’hésitez pas à faire un console.log avec la value du bouton radio sélectionné pour tester le résultat.

2. Lorsque cet événement se déclenche, modifiez le texte proposé pour le remplacer par une phrase si l’utilisateur a cliqué sur “Phrases”, ou un mot si l’utilisateur a cliqué sur “Mots”. Pour cela :

- déclarez une nouvelle variable listeProposition initialisée par défaut à listeMots ;
- utilisez cette nouvelle variable pour votre traitement à la place de listeMots ;
- lorsque le joueur clique sur Phrases, modifiez la valeur de listeProposition pour qu’elle corresponde au tableau des phrases. Quand le joueur clique sur Mots, faites de même ;
- mettez à jour l’affichage.

## Exercice 11

Notre application est fonctionnelle. Notre objectif est maintenant de permettre à l’utilisateur de partager son score avec un ami.
J’ai donc ajouté un bouton “Partager” à notre projet. Ainsi, au clic sur le bouton, une popup apparaît et affiche un formulaire.

Pour réaliser cet exercice :

- écoutez l’événement submit sur ce nouveau formulaire, et empêchez le comportement par défaut de se produire ;
- récupérez les valeurs des champs présents ;
- créez une variable sujet et une variable message, et affichez-les dans la console ;
- utilisez la méthode afficherEmail que je vous ai préparée, avec les bons arguments pour afficher l’e-mail à envoyer, prérempli avec les bonnes informations.

## Exercice 12

Notre application contient un formulaire. Mais pour l’instant, rien ne permet de vérifier que les champs sont correctement renseignés avant de lancer l’e-mail. C’est donc tout le but de cet exercice.
Pour ce faire :

1. Écrivez une fonction validerNom qui va prendre le nom à tester en paramètre et retourner true si le nom est valide, false sinon.

- La fonction doit prendre le nom en paramètre et valider qu’il est correct.
- La règle est d’avoir un champ avec au moins deux caractères.

2. Écrivez une fonction validerEmail qui va prendre en paramètre l’e-mail à tester et retourner true si l’e-mail est valide, false sinon.
3. Utilisez ces deux fonctions avec l’événement submit du formulaire.
4. Si les deux champs sont valides, affichez l’e-mail. Sinon, affichez seulement un message d’erreur dans la console.

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

Notre but est maintenant d’améliorer l’organisation et la lisibilité de notre code. Je vous propose donc de créer les fonctions suivantes :

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

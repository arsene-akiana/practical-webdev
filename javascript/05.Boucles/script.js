/* Exercice 1 : Boucles
1. Afficher les nombres de 0 à 9.
*/
/*============================================================================= */
/*
let i = 0;
while (i < 10) {
    document.write(i + "<br>");
    i++;
}
*/

/*============================================================================= */
/* Exercice 1' : Boucles avec do while
1. Afficher les nombres de 10 à 19.
*/
/*============================================================================= */
/*
let i = 10;

do {
    document.write(i + "<br>");
    i++;
}
while (i < 20);
*/

// la boucle do while est une boucle qui s'exécute au moins une fois, même si la condition est fausse. Elle vérifie la condition après l'exécution du bloc de code.

/*============================================================================= */
//Exercice 2 : Boucle for
/*============================================================================= */

for (let i = 0; i < 10; i++) {
    document.write("a");

    if(i === 5) {
        continue;  
    }
    document.write("b");
}       

// les propriétés break et continue sont utilisées pour contrôler le flux d'exécution des boucles. La propriété break permet de sortir complètement de la boucle, tandis que la propriété continue permet de passer à l'itération suivante de la boucle sans exécuter le reste du code dans le bloc de la boucle pour cette itération.
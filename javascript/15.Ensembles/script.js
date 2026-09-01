/*
let someSet = new Set([1, 2, 3]); // Création d'un ensemble (Set) avec des valeurs initiales de même type (ici des nombres)

for(element of someSet) // Boucle for...of pour itérer sur les éléments de l'ensemble
{
    document.write(element + "<br>"); // Affiche chaque élément de l'ensemble dans le document HTML
}
*/
//------------------------------------------------------------------------------
/*
let someSet = new Set([1, "Bonjour", new Date(), 1]); // Création d'un ensemble (Set) avec des valeurs initiales de types différents (ici un nombre, une chaîne de caractères et un objet Date), si on met deux fois la même valeur, elle ne sera pas ajoutée à l'ensemble (ici le nombre 1 est ajouté une seule fois)

for(element of someSet) // Boucle for...of pour itérer sur les éléments de l'ensemble
{
    document.write(element + "<br>"); // Affiche chaque élément de l'ensemble dans le document HTML
}

document.write("Taille de l'ensemble : " + someSet.size + "<br>"); // Affiche la taille de l'ensemble (nombre d'éléments uniques) dans le document HTML


someSet.add("Nouveau"); // Ajoute un nouvel élément à l'ensemble
someSet.delete(1); // Supprime un élément de l'ensemble (ici le nombre 1)

for(element of someSet) // Boucle for...of pour itérer sur les éléments de l'ensemble après les modifications
{
    document.write(element + "<br>"); // Affiche chaque élément de l'ensemble dans le document HTML après les modifications
}

someSet.clear(); // Supprime tous les éléments de l'ensemble
document.write("Taille de l'ensemble après clear : " + someSet.size + "<br>"); // Affiche la taille de l'ensemble après avoir supprimé tous les éléments (devrait être 0)
//------------------------------------------------------------------------------
let someSet1 = new Set([1, 2, 3]);

if(someSet1.has(2)) // Vérifie si l'ensemble contient l'élément 2
{
    document.write("L'ensemble contient l'élément 2<br>"); // Affiche un message si l'élément 2 est présent dans l'ensemble
}
*/

//-----------------------------------------------------------------------------
/*
let someSet1 = new Set([1, 2, 3]);

const iterValues = someSet1.values(); // Récupère un itérateur pour les valeurs de l'ensemble

document.write(iteraValues.next().value + "<br>"); // Affiche la première valeur de l'itérateur (1)
document.write(iteraValues.next().value + "<br>"); // Affiche la deuxième valeur de l'itérateur (2)
*/

//-----------------------------------------------------------------------------
/*
let someSet2 = new Set([4, 5, 6]);  

const allEntries = someSet2.entries(); // Récupère un itérateur pour les entrées (paires clé-valeur) de l'ensemble
for (const elements of allEntries) // Boucle for...of pour itérer sur les entrées de l'ensemble
{
    document.write(elements + "<br>"); // Affiche chaque entrée de l'ensemble dans le document HTML
}   
// NB: entries() renvoie un itérateur sous forme de tableau [clé, valeur].

*/

//-----------------------------------------------------------------------------

let someSet3 = new Set(["Hi", "Bonjour", "Au revoir"]); // Création d'un ensemble (Set) avec des chaînes de caractères

function show(value) // Définition d'une fonction show qui prend un argument value
{
    document.write(value + "<br>"); // Affiche la valeur passée en argument dans le document HTML
}

someSet3.forEach(show); // Appelle la fonction show pour chaque élément de l'ensemble


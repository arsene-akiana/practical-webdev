
//let something = {one: "One", two: "Two", three: "Three"}; // Création d'un objet littéral avec des propriétés et leurs valeurs

let someMap = new Map(); // Création d'une instance de Map (une collection de paires clé-valeur)

document.write("Taille de la Map : " + someMap.size + "<br>"); // Affiche la taille initiale de la Map (devrait être 0)

someMap.set(1, "Un");// Ajoute une paire clé-valeur à la Map (clé: 1, valeur: "Un")
someMap.set(2, "Deux");//someMap.set(something, "Objet"); // Ajoute une paire clé-valeur à la Map avec un objet comme clé (clé: something, valeur: "Objet")

document.write("Taille de la Map après ajout : " + someMap.size + "<br>"); // Affiche la taille de la Map après l'ajout des éléments

//someMap.delete(1); // Supprime la paire clé-valeur avec la clé 1 de la Map
//someMap.clear(); // Supprime toutes les paires clé-valeur de la Map

//document.write("Taille de la Map après clear : " + someMap.size + "<br>"); // Affiche la taille de la Map après avoir supprimé tous les éléments (devrait être 0)

if(someMap.has(2)) // Vérifie si la Map contient la clé 2
{
    document.write("La Map contient la clé 2<br>"); // Affiche un message si la clé 2 est présente dans la Map
}

document.write("Valeur associée à la clé 2 : " + someMap.get(2) + "<br>"); // Affiche la valeur associée à la clé 2 dans la Map

 const it = someMap.keys(); // Récupère un itérateur pour les clés de la Map
document.write(it.next().value + "<br>");
document.write(it.next().value + "<br>");

const it2 = someMap.values(); // Récupère un itérateur pour les valeurs de la Map
document.write(it2.next().value + "<br>"); // Affiche la première valeur de l'itérateur (devrait être "Un")


const allEntries = someMap.entries(); // Récupère un itérateur pour les entrées (paires clé-valeur) de la Map
for (const elements of allEntries) // Boucle for...of pour itérer sur les entrées de la Map
{
    document.write(elements + "<br>"); // Affiche chaque entrée de la Map dans le document HTML
}

function showTheTruth (value, key) // Définition d'une fonction qui sera utilisée comme callback pour forEach
{
    document.write("La clé est : " + key + " et la valeur est : " + value + "<br>"); // Affiche la clé et la valeur de chaque paire dans la Map     
}

someMap.forEach(showTheTruth); // Appelle la fonction showTheTruth pour chaque paire clé-valeur de la Map

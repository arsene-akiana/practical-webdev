/*============================================================================= */
// ***********************Déclaration de tableaux***************************
/*
let someArray = ["apple", "banana", "cherry", "date", "elderberry"]; // Déclaration d'un tableau contenant des fruits en utilisant la syntaxe littérale de tableau

let anotherArray  = new Array("fig", "grape", "honeydew"); // Déclaration d'un autre tableau contenant des fruits en utilisant le constructeur Array

let array2D = [
    ["red", "green", "blue"], // Premier sous-tableau contenant des couleurs
    ["cyan", "magenta", "yellow"], // Deuxième sous-tableau contenant des couleurs
]// Déclaration d'un tableau à deux dimensions (tableau de tableaux) contenant des couleurs

let someArray1 =  Array.of(1, 2, 3, 4, 5); // Déclaration d'un tableau contenant des nombres en utilisant la méthode statique Array.of()


console.log(someArray); // Affiche le contenu du tableau someArray dans la console
console.log(someArray1); // Affiche le contenu du tableau someArray1 dans la console
console.log(anotherArray); // Affiche le contenu du tableau anotherArray dans la console
console.log(array2D); // Affiche le contenu du tableau array2D dans la console
*/

/*============================================================================= */
// *********************** Manipulation de tableaux **************************
/*
let someArray = ["apple", "banana", "cherry", "date", "elderberry"]; 

console.log(Array.isArray(someArray)); // Vérifie si someArray est un tableau et affiche le résultat (true ou false) dans la console
console.log(someArray.length); // Affiche la longueur du tableau someArray dans la console (ici, 5)

console.log(someArray[0]); // Accède au premier élément du tableau someArray et l'affiche dans la console (ici, "apple")
console.log(someArray[2]); // Accède au troisième élément du tableau someArray et l'affiche dans la console (ici, "cherry")

console.log(someArray[someArray.length - 1]); // Accède au dernier élément du tableau someArray en utilisant la longueur du tableau et l'affiche dans la console (ici, "elderberry")

console.log(someArray.at(5)); // Accède au cinquième élément du tableau someArray en utilisant la méthode at() et l'affiche dans la console (ici, undefined)

console.log(someArray[0]= "apricot"); // Modifie le premier élément du tableau someArray en le remplaçant par "apricot" et affiche la nouvelle valeur dans la console
console.log(someArray); // Affiche le contenu modifié du tableau someArray dans la console (ici, ["apricot", "banana", "cherry", "date", "elderberry"])
*/

/*============================================================================= */
// *******Parcours de tableaux en pointant sur les éléments pour les modifier*******
/*
let someArray = ["apple", "banana", "cherry", "date", "elderberry"]; 

for (let i = 0; i < someArray.length; i++) // Boucle for qui parcourt le tableau someArray en utilisant un index
{
    console.log(someArray[i]); // Affiche chaque élément du tableau someArray dans la console

    someArray[i] = "Inconnue"; // Modifie chaque élément du tableau someArray en le remplaçant par "Inconnue"
    someArray[2] = "Nouveau"; // Modifie le troisième élément du tableau someArray en le remplaçant par "Inconnue"

}   

console.log(someArray); // Affiche chaque élément modifié du tableau someArray dans la console
*/

/*============================================================================= */
// *******Parcours de tableaux sans les modifier*******

/*
let someArray = ["apple", "banana", "cherry", "date", "elderberry"];

for(value of someArray) // Boucle for...of qui parcourt le tableau someArray en utilisant la valeur de chaque élément
{
    console.log(value); // Affiche chaque élément du tableau someArray dans la console sans pouvoir le modifier
}
*/
//-----------------------------------------------------------------------------
/*
let someArray = ["apple", "banana", "cherry", "date", "elderberry"];

for(index in someArray) // Boucle for...in qui parcourt le tableau someArray en utilisant l'index de chaque élément
{
    console.log(index); // Affiche l'index de chaque élément du tableau someArray dans la console
    console.log(someArray[index]); // Affiche chaque élément du tableau someArray dans la console en utilisant l'index
}
*/

//--------------------------------------------------------------------------

/*
let someArray = ["apple", "banana", "cherry", "date", "elderberry"];

// someArray.forEach(item => console.log(item)); // Utilise la méthode forEach() pour parcourir le tableau someArray et afficher chaque élément dans la console

someArray.forEach((item, index) => console.log(index + "- " + item)); // Utilise la méthode forEach() pour parcourir le tableau someArray et afficher chaque élément avec son index dans la console
*/

/*============================================================================= */
// ********************* Tableau de caractères ****************************
/*
let s = "Salut à tous !"; // Déclaration d'une variable s contenant une chaîne de caractères

let someArray = s.split(''); // Utilise la méthode split() pour diviser la chaîne de caractères s en un tableau de caractères, en utilisant une chaîne vide comme séparateur (on peut mettre un autre séparateur comme un espace ou une virgule), et assigne le résultat à la variable someArray

console.log(someArray); // Affiche le tableau de caractères someArray dans la console

s = someArray.join(""); // Utilise la méthode join() pour combiner les éléments du tableau someArray en une seule chaîne de caractères, en utilisant une chaîne vide comme séparateur, et assigne le résultat à la variable s

console.log(s); // Affiche la chaîne de caractères s dans la console
*/

/*============================================================================= */
// ***********************Manipulation de tableaux************************

let someArray = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(someArray); // Affiche le contenu du tableau someArray dans la console

someArray.push("fig", "grape"); // Utilise la méthode push() pour ajouter les éléments "fig" et "grape" à la fin du tableau someArray
console.log(someArray);

 someArray.unshift("kiwi"); // Utilise la méthode unshift() pour ajouter l'élément "kiwi" au début du tableau someArray

console.log(someArray);

 someArray.pop(); // Utilise la méthode pop() pour supprimer le dernier élément du tableau someArray
console.log(someArray);

 someArray.shift(); // Utilise la méthode shift() pour supprimer le premier élément du tableau someArray
 
console.log(someArray); 

someArray.fill("Inconnue", 1, 3); // Utilise la méthode fill() pour remplir le tableau someArray avec la valeur "Inconnue" à partir de l'index 1 jusqu'à l'index 3 (exclus)
console.log(someArray);

console.log(someArray.indexOf("fig")); // Utilise la méthode indexOf() pour trouver l'index de l'élément "fig" dans le tableau someArray et affiche le résultat dans la console

console.log(someArray.lastIndexOf("elderberry")); // Utilise la méthode lastIndexOf() pour trouver le dernier index de l'élément "elderberry" dans le tableau someArray et affiche le résultat dans la console

console.log(someArray.includes("date")); // Utilise la méthode includes() pour vérifier si l'élément "date" est présent dans le tableau someArray et affiche le résultat (true ou false) dans la console

console.log(someArray.find((item) => item.startsWith("e")));// Utilise la méthode find() pour trouver le premier élément du tableau someArray qui commence par la lettre "e" et affiche le résultat dans la console

console.log(someArray.findIndex((item) => item.startsWith("d"))); // Utilise la méthode findIndex() pour trouver l'index du premier élément du tableau someArray qui commence par la lettre "d" et affiche le résultat dans la console


/*============================================================================= */
// ***********************fusionner deux tableaux***************************
let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];

let mergedArray = array1.concat(array2);
console.log(mergedArray); // Affiche le tableau fusionné dans la console

/*============================================================================= */
// ***********************Trier un tableau***************************

let TrieArray = [-2, 5, 1, 3, -4, 0, 15, 18, 20];



console.log(TrieArray.sort((a, b) => a - b)); // Utilise la méthode sort() pour trier le tableau TrieArray en ordre croissant et affiche le résultat dans la console

console.log(TrieArray.sort((a, b) => b - a)); // Utilise la méthode sort() pour trier le tableau TrieArray en ordre décroissant et affiche le résultat dans la console

console.log(TrieArray.reverse()); // Utilise la méthode reverse() pour inverser l'ordre des éléments du tableau TrieArray et affiche le résultat dans la console


//-----------------------------------------------------------------------------------------------------------------
let compare = ["John", "Alice", "Bob", "Charlie", "David"]; 

console.log(compare .sort((a, b) => a.localeCompare(b))); // Utilise la méthode sort() avec localeCompare() pour trier le tableau compare par ordre alphabétique et affiche le résultat dans la console

console.log(compare .sort((a, b) => b.localeCompare(a))); // Utilise la méthode sort() avec localeCompare() pour trier le tableau compare par ordre alphabétique inverse et affiche le résultat dans la console

//-----------------------------------------------------------------------------------------------------------------

console.log(compare.slice(1, 4)); // Utilise la méthode slice() pour extraire un sous-tableau de compare (éléments d'index 1 à 3) et affiche le résultat dans la console

let splicedArray = compare.splice(2, 2, "Eve", "Frank"); // Utilise la méthode splice() pour supprimer 2 éléments à partir de l'index 2 dans le tableau compare et les remplacer par "Eve" et "Frank", puis assigne les éléments supprimés à splicedArray
console.log(splicedArray);

console.log(compare); // Affiche le tableau compare après la modification avec splice() dans la console

//------------------------------------------------------------------------------------------------------------

let filteredArray = [2, -5, 1, 6, 9, 0, 16, 18, 20];

console.log(filteredArray.filter((element) => element > 0)); // Utilise la méthode filter() pour filtrer les éléments positifs du tableau filteredArray et affiche le résultat dans la console

console.log(filteredArray.map((element) => element * 2)); // Utilise la méthode map() pour créer un nouveau tableau en multipliant chaque élément du tableau filteredArray par 2 et affiche le résultat dans la console

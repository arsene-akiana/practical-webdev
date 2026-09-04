/* Exo 1 : Créez une fonction qui affiche "Hello, World!" dans la console. Appelez cette fonction pour afficher le message. */
/*============================================================================= */
/*
function myFunctionHello() {  
    document.write("Hello, World!");  
}
myFunctionHello();
*/

/*============================================================================= */
// Exo 2 
/*============================================================================= */
/*
let  data = "OK"; // variable globale, accessible depuis n'importe quelle fonction du script

function fonction1() {
    let data2 = "POPI"; // variable locale, accessible uniquement dans la fonction
    document.write(data2 + "<br>");
    document.write("The value of data is: " + data + "<br>"); // on peut accéder à la variable globale depuis une fonction
}

fonction1();
console.log(data2); // on ne peut pas accéder à la variable locale depuis l'extérieur de la fonction, donc cela va générer une erreur
*/

/*============================================================================= */
// Exo 3 : utilisation du return 
/*============================================================================= */
/*
function sum(nb1, nb2) 
{
    return nb1 + nb2;
}

let result = sum(5, 10);
document.write(result); // affiche 15
*/

/*============================================================================= */
// Exo 4 : parametres 
/*============================================================================= */
/*
function sum(nb1, nb2 = 10) // si on ne passe pas de valeur pour nb2, il prendra la valeur par défaut de 10
{
    return nb1 + nb2;
}
let n1 = 25;
let n2 = 15;
let result = sum(n1);
document.write("The sum of " + n1 + " and " + n2 + " is: " + result); // affiche 35, car n2 prend la valeur par défaut de 10
*/


/*============================================================================= */
/* Exo 1 : Expression fonction */
/*============================================================================= */
/*
let hi =  function helloWorld() {  
    document.write("Hello, World!");  
};
hi(); 
*/

/*============================================================================= */
// Exo 2 : Expression fonction fléchée
/*============================================================================= */

 let sum = (x, y) => {return x + y;};
document.write(sum(5, 10)); // affiche 15




// le + dans une fonction permet de concaténer des chaînes de caractères. Ici, on concatène la valeur de la variable data avec une chaîne de caractères pour l'afficher dans le document.

// la concaténation est l'opération qui consiste à assembler deux chaînes de caractères pour en former une nouvelle. Par exemple, si on a deux chaînes "Hello" et "World", la concaténation de ces deux chaînes donnera "HelloWorld".

// le return dans une fonction permet de renvoyer une valeur à l'endroit où la fonction a été appelée. Cela permet de récupérer le résultat d'une fonction pour l'utiliser dans d'autres parties du code. Par exemple, si une fonction calcule la somme de deux nombres et utilise return pour renvoyer le résultat, on peut ensuite stocker ce résultat dans une variable ou l'afficher dans le document.

// une expression fonction est une fonction qui est définie à l'intérieur d'une expression, plutôt que d'être déclarée avec le mot-clé function. Cela permet de créer des fonctions anonymes, c'est-à-dire des fonctions qui n'ont pas de nom, et de les affecter à des variables ou de les passer en tant qu'arguments à d'autres fonctions. Par exemple, on peut écrire let myFunction = function() { ... }; pour créer une fonction anonyme et l'affecter à la variable myFunction.

// une fonction flechée est une syntaxe plus concise pour définir des fonctions en JavaScript. Elle utilise la flèche "=>" pour séparer les paramètres de la fonction de son corps. Les fonctions fléchées ont également un comportement particulier concernant le mot-clé "this", qui est lié au contexte dans lequel elles sont définies, contrairement aux fonctions traditionnelles. Par exemple, on peut écrire let myFunction = (param1, param2) => { ... }; pour créer une fonction fléchée.
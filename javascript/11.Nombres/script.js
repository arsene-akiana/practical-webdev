/*
Les différents types de variables en JavaScript sont les suivants :

types primitifs : 
            undefined : une variable qui n'a pas été initialisée.
            null : une variable qui a été explicitement définie comme n'ayant aucune valeur.
            boolean : une variable qui peut être soit true soit false.
            number : une variable qui peut contenir des nombres entiers ou à virgule flottante.
            string : une variable qui contient du texte.
            symbol : une variable qui contient un symbole unique et immuable.
            bigint : une variable qui peut contenir des nombres entiers de taille arbitraire.

types d'objets :
            object : une variable qui peut contenir des objets, des tableaux, des fonctions, etc.
            function : une variable qui contient une fonction.
            Array : une variable qui contient un tableau.
*/

/*============================================================================= */
// **********************undefined***************************
/*
let n;
document.write("La valeur de n est : " + n + "<br>"); // Affiche la valeur de n, qui est undefined car elle n'a pas été initialisée
*/

/*============================================================================= */
// ***********************null***************************
/*
let m = null;

document.write("La valeur de m est : " + m + "<br>"); // Affiche la valeur de m, qui est null car elle a été explicitement définie comme n'ayant aucune valeur
*/

/*============================================================================= */
// ***********************boolean***************************
/*
let isTrue = true;
let isFalse = false;

document.write("La valeur de isTrue est : " + isTrue + "<br>"); // Affiche la valeur de isTrue, qui est true
document.write("La valeur de isFalse est : " + isFalse + "<br>"); // Affiche la valeur de isFalse, qui est false
*/
/*============================================================================= */
// ***********************number***************************
/*
let integer = 42; // Nombre entier
let float = 3.14; // Nombre à virgule flottante
let negative = -10; // Nombre négatif
let zero = 0; // Zéro

document.write("La valeur de integer est : " + integer + "<br>"); // Affiche la valeur de integer, qui est 42
document.write("La valeur de float est : " + float + "<br>"); // Affiche la valeur de float, qui est 3.14
document.write("La valeur de negative est : " + negative + "<br>"); // Affiche la valeur de negative, qui est -10
document.write("La valeur de zero est : " + zero + "<br>"); // Affiche la valeur de zero, qui est 0
*/

/*============================================================================= */
// ***********************Class Number***************************
/*
let n = new Number(42); // Création d'un objet Number avec la valeur 42
document.write("La valeur de n est : " + n + "<br>"); // Affiche la valeur de n, qui est 42
*/

/*
document.write(Number.MAX_VALUE + "<br>"); // Affiche la valeur maximale que peut contenir un objet Number
document.write(Number.MAX_SAFE_INTEGER + "<br>"); // Affiche la plus grande valeur entière sûre que peut contenir un objet Number
document.write(Number.MIN_VALUE + "<br>"); // Affiche la valeur minimale que peut contenir un objet Number
document.write(Number.MIN_SAFE_INTEGER + "<br>"); // Affiche la plus petite valeur entière sûre que peut contenir un objet Number
document.write(Number.POSITIVE_INFINITY + "<br>"); // Affiche l'infini positif
document.write(Number.NEGATIVE_INFINITY + "<br>"); // Affiche l'infini négatif
*/
/*
let n = 355;

if(Number.isInteger(n)) // Vérifie si n est un entier
{
    document.write("La valeur de n est un entier<br>");
}
else
{
    document.write("La valeur de n n'est pas un entier<br>");
}

// On a aussi d'autres méthodes pour vérifier une valeur, comme Number.isNaN() pour vérifier si une valeur est NaN (Not a Number), Number.isFinite() pour vérifier si une valeur est finie, et Number.isSafeInteger() pour vérifier si une valeur est un entier sûr.
*/
/*============================================================================= */
/*
let n = 3.1629465;

document.write(n.valueOf() + "<br>"); // Affiche la valeur primitive de n, qui est 3.1629465
document.write(n.toExponential(2) + "<br>"); // Affiche la valeur de n en notation exponentielle avec 2 chiffres après la virgule, qui est 3.16e+0
document.write(n.toFixed(2) + "<br>"); // Affiche la valeur de n avec 2 chiffres après la virgule, qui est 3.16
document.write(n.toPrecision(4) + "<br>"); // Affiche la valeur de n avec une précision de 4 chiffres, qui est 3.163
document.write(n.toString() + "<br>"); // Affiche la valeur de n sous forme de chaîne de caractères, qui est "3.1629465"
*/

/*============================================================================= */
// ***********************BigInt***************************

let bn = BigInt(12345678901234567890123456); // Création d'un objet BigInt avec une valeur entière de grande taille
document.write("La valeur de bn est : " + bn + "<br>"); // Affiche la valeur de bn, qui est 123456789012345678901234567890

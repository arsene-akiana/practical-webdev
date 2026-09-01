/*
let s = "Hello World"; // Création d'une chaîne de caractères primitive avec la valeur "Hello World"
let s2 = new String("Hello World"); // Création d'un objet String avec la valeur "Hello World"

document.write(typeof s + "<br>");
document.write(typeof s2 + "<br>");
*/
/*============================================================================= */
// ***********************comparaison lexicographique***************************
/*
let s1 = "arbre";
let s2 = "bois";

if(s1 < s2) // Comparaison lexicographique des chaînes de caractères s1 et s2
{
    document.write(s1 + " est inférieur à " + s2 + "<br>"); // Affiche que s1 est inférieur à s2
}
else {
    document.write(s1 + " n'est pas inférieur à " + s2 + "<br>"); // Affiche que s1 n'est pas inférieur à s2
}
*/

/*============================================================================= */
// *****************taille d'une chaîne de caractères***************************
/*
let s = "Arbre";
document.write(s.length + "<br>"); // Affiche la longueur de la chaîne de caractères s

document.write(s.charAt(0) + "<br>"); // Affiche le premier caractère de la chaîne de caractères s
document.write(s.charAt(1) + "<br>"); // Affiche le deuxième caractère de la chaîne de caractères s
document.write(s.charAt(2) + "<br>"); // Affiche le troisième caractère de la chaîne de caractères s
document.write(s.charAt(3) + "<br>"); // Affiche le quatrième caractère de la chaîne de caractères s
document.write(s.charAt(4) + "<br>"); // Affiche le cinquième caractère de la chaîne de caractères s
document.write(s.charAt(5) + "<br>"); // Affiche le sixième caractère de la chaîne de caractères s (vide car la chaîne a seulement 5 caractères)
document.write(s.charAt(s.length - 1) + "<br>"); // Affiche le dernier caractère de la chaîne de caractères s

*/
/*============================================================================= */
// ********************Interpolation de chaînes******************************
/*
let s = "Glory";

document.write(`Bonjour ${s}, comment allez-vous ? <br>`); // Affiche un message de salutation en utilisant l'interpolation de chaînes avec la variable s. c'est plus pratique que la concatenation de chaines de caracteres avec le symbole +. document.write("Bonjour " + s + ", comment allez-vous ? <br>"); // Affiche un message de salutation en utilisant la concatenation de chaînes avec le symbole + et la variable s.
*/

/*============================================================================= */
// **************méthodes de chaînes de caractères*****************************

let s = "Bonjour, je suis en train d'apprendre le JavaScript !"; 

document.write(s.concat( "..." + "<br>")); // Affiche la chaîne de caractères s suivie de "..." en utilisant la méthode concat() pour concaténer les chaînes de caractères.

document.write(s.startsWith("Bo") + "<br>");// Affiche true si la chaîne de caractères s commence par "Bo", sinon false. La méthode startsWith() retourne un booléen.

document.write(s.endsWith("ipt !") + "<br>");// Affiche true si la chaîne de caractères s se termine par "ipt !", sinon false. La méthode endsWith() retourne un booléen.

document.write(s.includes("apprendre") + "<br>");// Affiche true si la chaîne de caractères s contient "apprendre", sinon false. La méthode includes() retourne un booléen.

document.write(s.padStart(50, "*") + "<br>");// Affiche la chaîne de caractères s avec des caractères "*" ajoutés au début pour atteindre une longueur totale de 50 caractères. La méthode padStart() retourne une nouvelle chaîne de caractères.

document.write(s.padEnd(50, "*") + "<br>");// Affiche la chaîne de caractères s avec des caractères "*" ajoutés à la fin pour atteindre une longueur totale de 50 caractères. La méthode padEnd() retourne une nouvelle chaîne de caractères.   

document.write(s.indexOf("apprendre") + "<br>");// Affiche l'index de la première occurrence de "apprendre" dans la chaîne de caractères s. La méthode indexOf() retourne un entier représentant l'index ou -1 si la sous-chaîne n'est pas trouvée.

document.write(s.repeat(3) + "<br>");// Affiche la chaîne de caractères s répétée 3 fois. La méthode repeat() retourne une nouvelle chaîne de caractères.

document.write(s.replace("JavaScript", "JS") + "<br>");// Affiche la chaîne de caractères s avec "JavaScript" remplacé par "JS". La méthode replace() retourne une nouvelle chaîne de caractères.

document.write(s.replaceAll("a", "A") + "<br>");// Affiche la chaîne de caractères s avec toutes les occurrences de "a" remplacées par "A". La méthode replaceAll() retourne une nouvelle chaîne de caractères.


document.write(s.slice(0, 7) + "<br>");// Affiche les caractères de la chaîne de caractères s de l'index 0 à l'index 7 (exclus). La méthode slice() retourne une nouvelle chaîne de caractères.

document.write(s.toLowerCase() + "<br>");// Affiche la chaîne de caractères s en minuscules. La méthode toLowerCase() retourne une nouvelle chaîne de caractères.

document.write(s.toUpperCase() + "<br>");// Affiche la chaîne de caractères s en majuscules. La méthode toUpperCase() retourne une nouvelle chaîne de caractères.   

document.write(s.substring(0, 7) + "<br>");// Affiche les caractères de la chaîne de caractères s de l'index 0 à l'index 7 (exclus). La méthode substring() retourne une nouvelle chaîne de caractères.

document.write(s.split(" ") + "<br>");// Affiche un tableau contenant les mots de la chaîne de caractères s, séparés par des espaces. La méthode split() retourne un tableau de chaînes de caractères.  


let s2 = "     Bonsoir    .   "; // Chaîne de caractères avec des espaces au début et à la fin
document.write(s2.trim() + "<br>");// Affiche la chaîne de caractères s2 sans les espaces au début et à la fin. La méthode trim() retourne une nouvelle chaîne de caractères.
document.write(s2.trimStart() + "<br>");// Affiche la chaîne de caractères s2 sans les espaces au début. La méthode trimStart() retourne une nouvelle chaîne de caractères.
document.write(s2.trimEnd() + "<br>");// Affiche la chaîne de caractères s2 sans les espaces à la fin. La méthode trimEnd() retourne une nouvelle chaîne de caractères. 



/*============================================================================= */



/*
Comment se passe la comparaison lexicographique des chaînes de caractères en JavaScript ? Réponse : En JavaScript, la comparaison lexicographique des chaînes de caractères se fait en comparant les valeurs Unicode des caractères dans les chaînes. La comparaison se fait caractère par caractère, de gauche à droite.
 cela signifie que si le premier caractère de la première chaîne est inférieur au premier caractère de la deuxième chaîne, alors la première chaîne est considérée comme inférieure. Si les premiers caractères sont égaux, la comparaison continue avec les caractères suivants jusqu'à ce qu'une différence soit trouvée ou que l'une des chaînes se termine. Si une chaîne est un préfixe de l'autre, la chaîne plus courte est considérée comme inférieure.
*/

// la taille d'une chaîne de caractères est déterminée par le nombre de caractères qu'elle contient. En JavaScript, vous pouvez obtenir la longueur d'une chaîne de caractères en utilisant la propriété `length`. Par exemple, pour une chaîne `s`, vous pouvez obtenir sa taille avec `s.length`.
/*
    getcomputedStyle() // pour obtenir les propriétés css

    <element>.classList.add() // ajout des propriétés de classes
    <element>.classList.remove() // suppression des propriétés de classes
    <element>.classList.replace() // remplacer ...
    <element>.classList.toggle() // retire une classe s'il exite et ajoute elle n'est pas dans l'element


*/


/*
const element = document.getElementById("coucou");
console.log(element.style); // pour afficher les informations sur le style
*/

/*
const element = document.getElementById("coucou");
let elementStyle = getComputedStyle(element); // pour avoir tous le style d'une maniere plus claire

console.log(elementStyle); 
*/

/*
const element = document.getElementById("coucou");
let elementStyle = getComputedStyle(element); // pour avoir tous le style d'une maniere plus claire

console.log(elementStyle.color);// affiche uniquement les informations sur la propriété color 
*/

/*
const element = document.getElementById("coucou");
 element.style.backgroundColor = "#bc1818"; // on n'utilise cette methode pour modifier une propriété css car apres le style. on met la propriété que l'on souhaite modifier et avec vs code on aura de maniere proposé toutes les propriétés
*/

/*
const element = document.getElementById("toto");
 
element.classList.add("underline", "italic"); // on a ajoute les propriétés des classes underline et italic a l'element  de class avec l'id toto
*/

/*
const element = document.getElementById("toto");

if(element.classList.contains("green")) // si l'element contains green 
{
     element.classList.remove("green"); // supprimer la classe green
}

*/

/*
const element = document.getElementById("toto");

if(element.classList.contains("green")) // si l'element contains green 
{
element.classList.replace("green", "red");// remplace la classe green par red
}
*/

/*
const element = document.getElementById("toto");

element.classList.toggle("green");// va supprimer la classe green car toto la contient
*/

/*
const element = document.getElementById("Lily");

element.classList.toggle("blue");// va ajouter la classe blue car Lily n'a pas de classe
*/

const element = document.getElementById("Lily");


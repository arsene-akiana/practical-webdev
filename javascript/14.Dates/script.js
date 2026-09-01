
/*
let d = new Date(); // Création d'un nouvel objet Date représentant la date et l'heure actuelles
document.write("Date actuelle : " + d + "<br>"); // Affiche la date et l'heure actuelles dans le document HTML

let d1 = new Date("January 15, 2026 22:25:00"); // Création d'un nouvel objet Date représentant une date et une heure spécifiques (15 janvier 2026 à 22h25)
document.write("Date spécifiée 1 : " + d1 + "<br>"); // Affiche la date spécifiée dans le document HTML

let d2 = new Date(2026, 6, 15); // Création d'un nouvel objet Date représentant le 15 juillet 2026
document.write("Date spécifiée 2 : " + d2 + "<br>"); // Affiche la date spécifiée dans le document HTML

let d3 = new Date(2026, 6, 15, 22, 35, 0); // Création d'un nouvel objet Date représentant le 15 juillet 2026 à 22h25
document.write("Date spécifiée 3 : " + d3 + "<br>"); // Affiche la date spécifiée dans le document HTML

let d4 = Date.now(); // Création d'un nouvel objet Date représentant la date et l'heure actuelles (en millisecondes depuis le 1er janvier 1970) qui est la date utilisée pour les calculs de temps en JavaScript
document.write("Date actuelle (en ms) : " + d4 + "<br>"); // Affiche la date et l'heure actuelles dans le document HTML
*/

/*============================================================================= */
// ***********************les accesseurs ***************************

let d = new Date(); // Création d'un nouvel objet Date représentant la date et l'heure actuelles
document.write("Date actuelle : " + d + "<br>"); // Affiche la date et l'heure actuelles dans le document HTML

// Accesseurs pour obtenir les différentes parties de la date
document.write("Année : " + d.getFullYear() + "<br>");
document.write("Mois : " + d.getMonth() + "<br>");
document.write("Jour : " + d.getDate() + "<br>");
document.write("Heure : " + d.getHours() + "<br>");
document.write("Minutes : " + d.getMinutes() + "<br>");
document.write("Secondes : " + d.getSeconds() + "<br>");    

document.write("Jour : " + d.getUTCDate() + "<br>");// On peut utiliser UTC avec tous les accesseurs pour obtenir la date et l'heure en temps universel coordonné (UTC)


//modificateurs pour modifier les différentes parties de la date

d.setFullYear(2025); // ou setUTCFullYear(2025) pour modifier l'année de l'objet Date à 2025

document.write("Date après modification de l'année : " + d + "<br>");
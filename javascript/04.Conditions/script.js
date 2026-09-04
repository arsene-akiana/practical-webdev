/* Exercice 1 : Conditions
1. Demander à l'utilisateur son nom.
2. Si le nom est "Glory", afficher "Oui, Hello Glory" et demander son âge.
3. Si l'âge est 21, afficher "oui c'est bien ton age 21 ans".
4. Sinon, afficher "Non, Hello inconnu".
*/
/*============================================================================= */
/*
let name = prompt("Quel est ton nom ?");

if(name === "Glory") {
    document.write("Oui, Hello Glory");
    let age = prompt("Quel est ton âge ?");
    age = parseInt(age);
    if(age === 21) {
        document.write("oui c'est bien ton age 21 ans");
    } 
} else {
    document.write("Non, Hello inconnu");
}
*/

/*============================================================================= */
/* Exercice 2 : Conditions
1. Demander à l'utilisateur un nombre.
2. Si le nombre est négatif, afficher "Le nombre est négatif".
3. Si le nombre est positif, afficher "Le nombre est positif".
4. Sinon, afficher "Le nombre est nul".
*/
/*============================================================================= */
/*
let number = prompt("Entrez un nombre :");
number = parseInt(number);

if(number < 0) {
    document.write("Le nombre est négatif");
} else if(number > 0) {
    document.write("Le nombre est positif");
} else {
    document.write("Le nombre est nul");
}   
*/

/*============================================================================= */
//Exercice 2' : Conditions avec switch
/*
let number = prompt("Entrez un nombre :");
number = parseInt(number);

switch(true) {
    case (number < 0):
        document.write("Le nombre est négatif");
        break;
    case (number > 0):
        document.write("Le nombre est positif");
        break;
    default:
        document.write("Le nombre est nul");
}
*/

/*============================================================================= */
/* Exercice 3 : Conditions avec switch
1. Demander à l'utilisateur un nombre.
2. Si le nombre est inférieur à 5, afficher "Le nombre est inferieur à 5".
3. Si le nombre est égal à 5, afficher "Le nombre est égal à 5".
4. Sinon, afficher "Le nombre est supérieur à 5".   
*/
/*============================================================================= */
/*
let number = prompt("Entrez un nombre :");
number = parseInt(number);

switch(number) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            document.write("Le nombre est inferieur à 5");
            break;
        case 5:
            document.write("Le nombre est égal à 5");
            break;
        default:
            document.write("Le nombre est supérieur à 5");
            break;
}
*/
/*============================================================================= */
/* Exercice 3' : Conditions avec ternaire
1. Demander à l'utilisateur un nombre.
2. Si le nombre est inférieur à 5, afficher "Le nombre est inferieur à 5".
3. Si le nombre est égal à 5, afficher "Le nombre est égal à 5".
4. Sinon, afficher "Le nombre est supérieur à 5".
*/

let number = prompt("Entrez un nombre :");
number = parseInt(number);
let message = (number < 5) ? "Le nombre est inferieur à 5" : (number === 5) ? "Le nombre est égal à 5" : "Le nombre est supérieur à 5";
document.write(message);

// condition ternaire : (condition) ? valeur si vrai : valeur si faux

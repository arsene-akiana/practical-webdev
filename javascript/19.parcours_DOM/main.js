/*
    <html> : document.documentElement
    <head> : document.head
    <body> : document.body

    NOEUDS : childNodes
             firstChild
             lastChild
             parentNode
             previousSibling
             nextSibling

    TABLEAU : 
            <table>.rows
            <table>.caption
            <table>.tHead
            <table>.tBodies -> HTMLCollection
            <table>.tFoot

    FORMULAIRE : 
        document.forms -> HTMLFormControlsCollection
        document.forms.<name> -> HTMLFormElement
                <form>.elements.name

                SELECT :
                    <select>.options -> HTMLOptionsCollection
        

        document.cookie
        document.images
        document.links
        document.scripts
        
*/ 
/*
console.log(document.documentElement); // Affiche l'élément racine du document, c'est-à-dire l'élément <html> et tout son contenu.
console.log(document.head); // Affiche l'élément <head> et tout son contenu.
console.log(document.body); // Affiche l'élément <body> et tout son contenu.
*/

//------------------------------------------------------------------------------------------------------------------
/*
for(let node of document.body.childNodes) // Parcourt tous les nœuds enfants de l'élément <body> et les affiche dans la console.
{
    console.log(node); // Affiche tous les nœuds enfants de l'élément <body>, y compris les éléments, les textes et les commentaires.
}
*/

//------------------------------------------------------------------------------------------------------------------
/*
console.log(document.body.firstChild); // Affiche le premier nœud enfant de l'élément <body>, qui peut être un élément, un texte ou un commentaire.
*/

/*
console.log(document.body.lastChild); // Affiche le dernier nœud enfant de l'élément <body>, qui peut être un élément, un texte ou un commentaire.
*/

/*
console.log(document.head.parentNode); // Affiche le nœud parent de l'élément <head>, qui est l'élément <html>.
*/

/*
console.log(document.head.firstChild.nextSibling); // Affiche le nœud suivant du premier nœud enfant de l'élément <head>, qui peut être un élément, un texte ou un commentaire.
*/

/*
console.log(document.head.firstChild.previousSibling);// Affiche le nœud précédent du premier nœud enfant de l'élément <head>, qui peut être un élément, un texte ou un commentaire.
*/

/*
console.log(coucou.textContent); // Affiche le contenu textuel de l'élément avec l'ID "coucou". 
*/

/*
const allRows = stats.rows; // Récupère toutes les lignes de statistiques à partir de l'objet "stats" et les stocke dans la variable "allRows".
for (let row of allRows) // Parcourt chaque ligne de statistiques dans "allRows".
{
    console.log(row);// Affiche chaque ligne de statistiques dans la console.
}
*/

/*
console.log(stats.caption); // Affiche la légende (caption) du tableau de statistiques dans la console.
*/

/*
console.log(stats.tHead);// Affiche l'en-tête (thead) du tableau de statistiques dans la console.
*/

//console.log(stats.tBodies);// Affiche le corps (tbody) du tableau de statistiques dans la console.

//console.log(stats.tHead.rows);// Affiche toutes les lignes de l'en-tête (thead) du tableau de statistiques dans la console.

// console.log(stats.tBodies[0].rows);// Affiche toutes les lignes du premier corps (tbody) du tableau de statistiques dans la console.

// console.log(stats.rows[1].cells[0]);// Affiche la première cellule (cell) de la deuxième ligne (row) du tableau de statistiques dans la console.

// console.log(stats.rows[1].cells[0].textContent);// Affiche le contenu textuel de la première cellule (cell) de la deuxième ligne (row) du tableau de statistiques dans la console.

// console.log(document.forms.infoform);// Affiche le formulaire avec le nom "infoform" dans la console.


//----------------------------------------------------------------------------------

const myForm = document.forms.infoform; // Récupère le formulaire avec le nom "infoform" et le stocke dans la variable "myForm".

// console.log(myForm.elements.user_name); // Affiche la valeur du champ "username" du formulaire "myForm" dans la console.

console.log(myForm.elements.user_lang.options); // Affiche toutes les options du champ "user_lang" du formulaire "myForm" dans la console.



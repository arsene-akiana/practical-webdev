/*

    document.getElementById('<id>') // Récupère l'élément avec l'id spécifié et le retourne. Si aucun élément n'est trouvé, retourne null.

    document.getElementsByClassName('<name>') // Récupère tous les éléments avec la classe spécifiée et retourne une collection HTML. Si aucun élément n'est trouvé, retourne une collection vide.

    document.getElementsByTagName('<tagname>') // Récupère tous les éléments avec le nom de balise spécifié et retourne une collection HTML. Si aucun élément n'est trouvé, retourne une collection vide.

    document.getElementsByClassName('<classname>') // Récupère tous les éléments avec la classe spécifiée et retourne une collection HTML. Si aucun élément n'est trouvé, retourne une collection vide.

    //-------------------------------------css--------------------------------------------------------------------------

    document.querySelector('<selector>')// pour récupérer le premier élement rencontrer 
    document.querySelectorAll('<selector>')// pour récupérer tous les  tous les séclecteurs

    modification de la valeur ce font avec ces propriétés :

                            innerHTML
                            outerHTML
                            innerText
                            outerText

        <element>.hasAttribute("<name>") // vérifie si l'élement possede cette attribut 
        <element>.getAttribute("<name>")// obtenir l'attribut d'un element
        <element>.removeAttribute("<name>") // supprimer un attribut
        <element>.setAttribute("<name>", "<value>") // modifier un attribut


        document.createElement() // pour créer un élement


                <node>.append() : fin du noeud
                <node>.prepend() : debut du noeud
                <node>.before() :avant le noeud
                <node>.after() : apres le noeud
                <node>.replaceWith() :   remplacer un élement dans le noeud
                
    <node>.remove() : pour supprimer l'élement du noeud

    insertAjacentHTML("", "") // pour inserer 

        beforebegin : avant l'element 
        afterbegin : dans l'element au debut
        afterend : dans l'element a la fin
        beforeend : tout a la fin



*/




// const element = document.getElementById('coucou'); // Récupère l'élément avec l'id "coucou" et le stocke dans la variable "element"

// const element = document.getElementsByName('user_comments'); // Récupère l'élément avec le nom "user_comments" et le stocke dans la variable "element"

// const element = document.getElementsByName('user_comments')[0]; // Récupère le premier élément avec le nom "user_comments" et le stocke dans la variable "element"



// const element = document.getElementsByTagName('p'); // Récupère tous les éléments avec le nom de balise "p" et les stocke dans la variable "element"


// console.dir(element); // Affiche l'élément récupéré dans la console sous forme d'objet
 
// const element = document.getElementsByClassName('blue');
// console.log(element[0]);


//console.log(element); // Affiche l'élément récupéré dans la console


// const element = document.querySelector('input[type=submit]');// pour récupérer 
// console.log(element);

/*
const elements = document.querySelectorAll('article h2');

for(e of elements)
{
    console.log(e.textContent);
}
*/

/*
const elements = document.querySelectorAll('article h2');
console.log(elements.length);
*/

/*
const element = document.getElementsByClassName('blue')[0];
console.dir(element.className);
console.log(element);
*/

/*
const element = document.getElementsByClassName('blue')[0];
element.outerText = "<ul><li>OK<li/></ul>";
*/

/*
const element = document.getElementsByClassName('blue')[0];
element.innerHTML = "<ul><li>OK<li/></ul>";
*/

/*
const element = document.getElementsByClassName('blue')[0];
element.title = "Super Bosseur"; // on change le title
*/

/*
const element = document.getElementsByClassName('blue')[0];
console.log(element.getAttribute('title'));// pour obtenir l'attribut de title
*/

/*
const element = document.getElementsByClassName('blue')[0];
console.log(element.dataset);// pour obtenir l'attribut qu'on a créer
// console.log(element.dataset.formation);//pour obtenir sa valeur
// console.log(element.dataset.formation = "JS");//pour modifier cette valeur
*/


/*
// Cela ne modifie pas le code en phyisque  mais cela se modifie sur le navigateur, donc avec cela on peut mettre des informations temporaires pour les clients qu'on pourra vite efface sans affecté notre code source

const someParagraph = document.createElement('p');// on a créer un paragraphe

someParagraph.innerHTML = "Bonjour je viens squatter la page";// ajout du text a p
someParagraph.className = "red"; // ajout du css 

document.body.append(someParagraph); // pour mettre le en bas du noued sur la page, pour mettre au début on utilse "prepend"

// document.getElementById("coucou").prepend(someParagraph);//Ici on le met là où il y'a id coucou au debut

// document.getElementById("coucou").replaceWith(someParagraph);//Ici on remplace tout l'element qui contient l'id

*/

documet.getElementById("coucou").insertAjacentHTML("beforbegin", "Hello World inserer") // pour insérer un élément juste avant l'élement contenat le id, car on a mis beforebegin
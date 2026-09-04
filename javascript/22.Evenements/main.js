

let someButton = document.querySelector('button');


/*
someButton.onclick = () => {
    alert("Vous avez cliqué sur le bouton !");
}
//onclick est un événement qui se déclenche lorsqu'on clique sur un élément. Ici, on l'utilise pour afficher une alerte lorsque l'utilisateur clique sur le bouton.
*/


/*
someButton.onclick = (event) => {
    console.log(event);
}
//on peut utiliser l'objet event pour accéder à des informations sur l'événement qui s'est produit. Ici, on affiche l'objet event dans la console lorsque l'utilisateur clique sur le bouton.
*/

/*
someButton.onmousemove = (event) => {
    console.log(event);
}
//onmousemove est un événement qui se déclenche lorsqu'on déplace la souris sur un élément. Ici, on l'utilise pour afficher l'objet event dans la console lorsque l'utilisateur déplace la souris sur le bouton.
*/

/*
someButton.onclick = (event) => {
    console.log(event);
    document.body.style.backgroundColor = "lightblue";
}
//on peut utiliser l'objet event pour accéder à des informations sur l'événement qui s'est produit. Ici, on affiche l'objet event dans la console lorsque l'utilisateur clique sur le bouton et on change la couleur de fond du body en bleu clair.
*/



/*
someButton.addEventListener('click', (event) =>
{
    console.log(event);
    document.body.style.backgroundColor = "red";
    
})
// on utilise addEventistener car il permet d'ajouter plusieurs événements à un même élément. Ici, on ajoute un événement click au bouton qui affiche l'objet event dans la console et change la couleur de fond du body en bleu clair.
*/

/*
someButton.addEventListener('click', (event) =>
{
    console.log(event);
    console.log("Vous avez cliqué sur le bouton !");
})

let someForm = document.querySelector('form');

someForm.addEventListener('mouseover', (event) =>
{
    console.log(event);
    console.log("la sourie passe sur le formulaire !");
});

someForm.addEventListener('mouseleave', (event) =>
{
    console.log(event);
    console.log("la sourie quitte le formulaire !");
});
*/
/*
window.addEventListener('keydown', (event) =>
{
    console.log(event.key);
});
// on a ajouté un événement keydown à la fenêtre qui affiche la touche pressée dans la console. et on peut utiliser event.key pour accéder à la touche pressée. window est un objet global qui représente la fenêtre du navigateur.
*/

/*
window.addEventListener('keydown', (event) =>
{
    if(event.key == 'b')
        alert('Tu as gagné !');
});
// on a ajouté un événement keydown à la fenêtre qui affiche une alerte lorsque l'utilisateur appuie sur la touche "b", on a utilisé une condition pour vérifier si la touche pressée est "b" et on a utilisé alert() pour afficher un message à l'utilisateur.
*/

/*
window.addEventListener('keydown', (event) =>
{
   event.preventDefault();
   console.log(event);
});
// Ici on a utilisé event.preventDefault() pour empêcher le comportement par défaut de l'événement keydown, qui est de faire défiler la page vers le bas lorsque l'utilisateur appuie sur la touche "flèche bas". On peut utiliser cette méthode pour empêcher certains comportements par défaut des événements.
*/

/*
someButton.addEventListener('click', (event) =>
{
    console.log(event);
    console.log("Vous avez cliqué sur le bouton !");

    event.stopPropagation();// on a utilisé event.stopPropagation() pour empêcher la propagation de l'événement click vers les éléments parents. Cela signifie que si on a un événement click sur un élément parent, il ne sera pas déclenché lorsque l'utilisateur clique sur le bouton.
})
*/
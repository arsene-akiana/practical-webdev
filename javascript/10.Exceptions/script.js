

// *********************** Détecter une exception ***************************

/*
try 
{
    // Code qui pourrait générer une exception
    let data = JSON.parse('{"name" "John", "age": 30}'); // Exemple de code qui peut lancer une exception si la chaîne JSON est mal formée 
    throw new Error("Ceci est une exception "); // Lève une exception avec un message spécifique

} 
catch (error) // Bloc catch qui capture l'exception et permet de gérer l'erreur
{   
    console.error('Une erreur s\'est produite :', error.message); // Affiche un message d'erreur dans la console avec le message de l'exception
    console.error('Type d\'erreur :', error.name); // Affiche le type d'erreur dans la console
    console.error('Stack trace :', error.stack); // Affiche la trace de la pile d'appel dans la console
    console.error('Détails de l\'erreur :', error); // Affiche les détails complets de l'erreur dans la console
    if (error instanceof SyntaxError) // Vérifie si l'erreur est une instance de SyntaxError
    {
        console.log("Erreur de syntaxe détectée dans le JSON<br>"); // Affiche un message spécifique pour les erreurs de syntaxe
    }
    else if (error instanceof TypeError) // Vérifie si l'erreur est une instance de TypeError
    {
        console.log("Erreur de type détectée<br>"); // Affiche un message spécifique pour les erreurs de type
    }
} 
finally 
{
    document.write("OK, je passe toujours ici"); // Bloc finally qui s'exécute toujours, qu'une exception ait été levée ou non. Il est souvent utilisé pour effectuer des opérations de nettoyage ou de finalisation.
}
*/


/*============================================================================= */
// *********************** Créer une exception via une fonction constructeur ***************************
/*
function MyError(message) // Définition d'une fonction constructeur pour créer une exception personnalisée
{
    const err = new Error(message); // Crée une nouvelle instance de l'objet Error avec le message fourni
    err.name = "MyError"; // Définit le nom de l'erreur personnalisée
    err.code = 400; // Définit un code d'erreur personnalisé (par exemple, 400 pour une erreur de requête)
    err.logfile = "error.log"; // Définit un fichier de journalisation pour l'erreur (peut être utilisé pour enregistrer les erreurs dans un fichier)

    return err; // Retourne l'objet erreur personnalisé

}

throw new MyError("Ceci est une exception personnalisée !"); // Lève une exception personnalisée en utilisant la fonction MyError avec un message spécifique c-à-d  il crée une nouvelle instance de l'objet MyError avec le message fourni et la lance comme une exception.
*/


/*============================================================================= */
// *********************** Créer une exception via une classe ***************************
/*
class MySpecialError extends Error // Définition d'une classe MySpecialError qui hérite de la classe Error pour créer une exception personnalisée
{
    constructor(code, ...params) // Constructeur de la classe MySpecialError
    {
        super(...params); // Appelle le constructeur de la classe parente (Error) avec les paramètres fournis
        this.code = code; // Définit un code d'erreur personnalisé pour l'exception
    }

}
try 
{
    throw new MySpecialError(404, "Ceci est une exception personnalisée via une classe !"); // Lève une exception personnalisée en utilisant la classe MySpecialError avec un code d'erreur et un message spécifique
}
catch(er) // Bloc catch qui capture l'exception et permet de gérer l'erreur
{
    console.log(er.code);
    console.log(er.message);
    console.error(er.stack);
}
*/

/*============================================================================= */
// *********************** Fonction assert ***************************

 function assert(condition, message) // Définition d'une fonction assert qui vérifie une condition et lève une exception si la condition est fausse
{
    if (!condition) // Vérifie si la condition est fausse
    {
        throw new Error(message || "Assertion failed"); // Lève une exception avec le message fourni ou un message par défaut si la condition est fausse
    }
}

assert(1 === 2, "1 n'est pas égal à 2"); // Appelle la fonction assert avec une condition fausse et un message spécifique, ce qui lèvera une exception




// On a plusieurs types d'exceptions en JavaScript, notamment : Error, TypeError, ReferenceError, SyntaxError, RangeError, EvalError, URIError. Chaque type d'exception est utilisé pour signaler des erreurs spécifiques dans le code.

// Une exception est un mécanisme de gestion des erreurs qui permet de signaler et de traiter les situations anormales ou inattendues dans un programme. En JavaScript, les exceptions sont généralement gérées à l'aide des blocs `try`, `catch`, et `finally`.
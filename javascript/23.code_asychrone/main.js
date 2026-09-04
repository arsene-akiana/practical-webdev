
/*
function getUsers()
{
    return["Alice", "Bob", "Charlie"];
}

function getNumbers()
{
    return[1, 2, 3, 4, 5];
}

function printSomething(callback)
{
    data = callback();
    console.log("Données : " + data);
}

// printSomething(getUsers);// printSomething est une de rappel, on lui passe la fonction getUsers en argument

// printSomething(getNumbers);// printSomething est une de rappel, on lui passe la fonction getNumbers en argument

printSomething(() =>
{
    return['A', 'B', 'C'];
})
//Ici on passe une fonction anonyme en argument de printSomething, qui retourne un tableau de lettres.
*/

/*
setTimeout(() =>
{
    console.log("Données reçues !");
}, 2000);
// Ici on utilise la fonction setTimeout pour exécuter une fonction après un délai de 2 secondes (2000 millisecondes). La fonction passée en argument est une fonction anonyme qui affiche "Données reçues !" dans la console.
*/

/*
setTimeout((someone) =>
{
    console.log("Hello" + someone);
}, 2000, "Lily");
// Ici on utilise la fonction setTimeout pour exécuter une fonction après un délai de 2 secondes (2000 millisecondes). La fonction passée en argument est une fonction anonyme qui affiche "Hello" suivi du nom de la personne passée en argument ("Lily") dans la console.
*/

/*
let somepromise = new Promise((resolve, reject) =>
{
    // resolve("Données reçues c'est Super !");
    reject("Données non reçues... Désolé !");
});
 
// consommateur
somepromise.then(value =>
{
    console.log("TENUE : " + value);
}).catch(error =>
{
    console.error("ERREUR : " + error);
});//on utilise la méthode then() pour gérer le cas où la promesse est tenue (résolue) et la méthode catch() pour gérer le cas où la promesse est rejetée (non tenue).
*/


/*
const p1 = Promise.resolve("Promesse 1 tenue !");
const p2 = Promise.reject("Promesse 2 non tenue !");
const p3 = new Promise((resolve, reject) =>
{
    // resolve("Promesse 3 tenue !");
    reject("Promesse 3 non tenue !");
});

let globalPromise = Promise.all([p1, p2, p3]).then(values =>
{
    console.log("Toutes les promesses sont tenues : " + values);
}).catch(error =>
{
    console.error("Au moins une promesse n'est pas tenue : " + error);
}); 
// Dans cet exemple, on utilise la méthode Promise.all() pour attendre que toutes les promesses soient tenues (résolues) ou qu'au moins une promesse soit rejetée (non tenue). Si toutes les promesses sont tenues, la méthode then() est appelée avec un tableau contenant les valeurs de chaque promesse. Si au moins une promesse est rejetée, la méthode catch() est appelée avec l'erreur correspondante.
*/


/*
const p1 = Promise.resolve("Promesse 1 tenue !");
const p2 = Promise.reject("Promesse 2 non tenue !");
const p3 = new Promise((resolve, reject) =>
{
    // resolve("Promesse 3 tenue !");
    reject("Promesse 3 non tenue !");
});

let globalPromise = Promise.any([p1, p2, p3]).then(values =>
{
    console.log("Au moins une promesse est tenue : " + values);
}).catch(error =>
{
    console.error("Toutes les promesses sont rejetées : " + error);
}); 
// Dans cet exemple, on utilise la méthode Promise.any() pour attendre que au moins une promesse soit tenue (résolue). Si au moins une promesse est tenue, la méthode then() est appelée avec la valeur de la première promesse tenue. Si toutes les promesses sont rejetées, la méthode catch() est appelée avec l'erreur correspondante.
*/

/*
const p1 = Promise.resolve("Promesse 1 tenue !");
const p2 = Promise.reject("Promesse 2 non tenue !");
const p3 = new Promise((resolve, reject) =>
{
    // resolve("Promesse 3 tenue !");
    reject("Promesse 3 non tenue !");
});

let globalPromise = Promise.race([p1, p2, p3]).then(values =>
{
    console.log("La première promesse est tenue : " + values);
}).catch(error =>
{
    console.error("Toutes les promesses sont rejetées : " + error);
}); 
// Dans cet exemple, on utilise la méthode Promise.race() pour attendre que la première promesse soit tenue (résolue) ou rejetée (non tenue). Si la première promesse est tenue, la méthode then() est appelée avec la valeur de cette promesse. Si la première promesse est rejetée, la méthode catch() est appelée avec l'erreur correspondante.
*/

/*
//Exemple d'utilisation de la méthode fetch() pour récupérer des données depuis une API et les afficher dans la console.

function checkUrl(url)
{
    return new Promise((resolve, reject) =>
    {
        fetch(url).then(response =>
        {
            if (response.ok)
            {
                resolve("URL valide : " + url);
            }
            else
            {
               resolve("URL invalide : " + url);
            }
        }).catch(error =>
        {
            resolve("Erreur lors de la requête : " + error);
        });
    });
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/999999',
    'https://jsonplaceholder.typicode.com/posts/3'
];

const allUrls = urls.map(url => checkUrl(url));

Promise.all(allUrls).then(results =>
{
    results.forEach(result =>
    {
        console.log(result);
    });
}).catch(error =>
{
    console.error("Erreur lors de la récupération des URLs : " + error);
})

//Ici, on utilise la méthode fetch() pour récupérer des données depuis une API. La fonction checkUrl() prend une URL en paramètre et retourne une promesse qui est résolue si l'URL est valide (code de réponse HTTP 200) ou rejetée si l'URL est invalide (code de réponse HTTP différent de 200). On utilise ensuite la méthode Promise.all() pour attendre que toutes les promesses soient résolues et afficher les résultats dans la console.
*/

// Exemple avec async/await pour voir l'ordre d'exécution des opérations asynchrones.

//1. récupérations des donnés utilisateurs

function getUser()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            const user = {
                "username": "Ignace", 
                "age": 76
                };

            resolve(user);
        }, 3000);
    });
}

//2. affichage des données utilisateurs

async function printUser()
{
    try
    {
        const userData = await getUser();
        console.log(userData.username + " a " + userData.age + " ans.");
    }
    catch (error)
    {
        console.error("Erreur lors de la récupération des données utilisateur : " + error);
    }
}

printUser();


// Ici, on utilise la fonction async printUser() pour récupérer les données utilisateur de manière asynchrone. La fonction getUser() retourne une promesse qui est résolue après un délai de 3 secondes avec un objet utilisateur. On utilise le mot-clé await pour attendre que la promesse soit résolue avant d'afficher les données utilisateur dans la console. Si une erreur se produit lors de la récupération des données utilisateur, elle est capturée dans le bloc catch() et affichée dans la console. 
















/*
Définition de la programmation asynchrone : La programmation asynchrone est un paradigme de programmation qui permet à un programme d'exécuter des tâches de manière non bloquante, c'est-à-dire qu'il peut continuer à s'exécuter pendant que certaines opérations sont en cours d'exécution. Cela est particulièrement utile pour les opérations qui prennent du temps, comme les requêtes réseau ou les accès aux bases de données, car cela permet d'améliorer les performances et la réactivité du programme.
Une promesse est un objet représentant l'achèvement ou l'échec éventuel d'une opération asynchrone. Elle permet de gérer les résultats d'une opération asynchrone de manière plus lisible et plus facile à comprendre que les callbacks.


Etat de promise :

        pending : en attente

        fulfilled : résolue, honorée, validée

        rejected : rejetée, refusée, non honorée(ou anulée)
*/
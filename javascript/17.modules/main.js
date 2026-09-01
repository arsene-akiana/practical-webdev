// import { Bonjour } from './module.js'; 
import * as Base from './mymodule.js'; // Importation de toutes les fonctions exportées depuis le module mymodule.js et les regroupe sous l'objet Base

document.body.innerHTML = Base.Bonjour() + "<br>" + Base.howareYou(); // Utilisation des fonctions importées depuis le module mymodule.js pour afficher un message de salutation et une question sur l'état de la personne dans le corps du document HTML










// Un module en JavaScript est un fichier qui contient du code JavaScript encapsulé, permettant de séparer les fonctionnalités et de les réutiliser dans différents contextes. Les modules permettent d'organiser le code de manière plus claire et maintenable, en évitant les conflits de noms et en facilitant la gestion des dépendances.
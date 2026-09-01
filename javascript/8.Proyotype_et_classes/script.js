/*
    lorsque n'utilise class : pas d'attributs privé,  pas d'attributs stactic
*/

/*============================================================================= */
// Utilisation de la fonction constructeur pour créer un objet MusicPlayer avec des méthodes et des propriétés
/*============================================================================= */
/*
function MusicPlayer(filetype) // Définition de la fonction constructeur MusicPlayer
{
    this.filetype = filetype; // Propriété filetype de l'objet MusicPlayer

    this.filetype = function() // Méthode filetype de l'objet MusicPlayer
    {
        return filetype; // Retourne la propriété filetype de l'objet MusicPlayer
    }
};

MusicPlayer.data = 15; // Propriété statique data de la fonction constructeur MusicPlayer

document.write(MusicPlayer.data + "<br>"); // Affiche la valeur de la propriété statique data dans le document HTML

MusicPlayer.hello = function() {return "Hello Musician"} // Méthode statique hello de la fonction constructeur MusicPlayer

document.write(MusicPlayer.hello() + "<br>"); // Affiche le résultat de l'appel de la méthode statique hello dans le document HTML

*/
/*============================================================================= */
// Utilisation avec la classe 
/*============================================================================= */

class MusicPlayer // Définition de la classe MusicPlayerClass
{
    constructor(filetype) // Constructeur de la classe MusicPlayerClass
    {
        this.filetype = filetype; // Propriété filetype de l'objet MusicPlayerClass
    }

    static hello() // Méthode statique hello de la classe MusicPlayerClass
    {
        return "Hello Musician"; // Retourne une chaîne de caractères
    }   
}

document.write(MusicPlayer.hello() + "<br>"); // Affiche le résultat de l'appel de la méthode statique hello dans le document HTML

MusicPlayer.prototype.filename = null; // Ajout d'une propriété filename au prototype de la classe MusicPlayerClass

let song = new MusicPlayer("MP3"); // Création d'une instance de la classe MusicPlayerClass avec le format "MP3"
document.write(song.filetype + "<br>"); // Affiche le format de l'objet song dans le document HTML, affiche rien car la propriété filename est null

song.filename = "song1.mp3"; // Affectation d'une valeur à la propriété filename de l'objet song
document.write(song.filename + "<br>"); // Affiche le nom de fichier de l'objet song dans le document HTML

delete song.filename; // Suppression de la propriété filename de l'objet song
document.write(song.filename + "<br>"); // Affiche la valeur de la propriété filename de l'objet song dans le document HTML, affiche null car la propriété filename a été supprimée

MusicPlayer.prototype.bye = function() // Ajout d'une méthode bye au prototype de la classe MusicPlayerClass
{
    return "Bye Musician"; // Retourne une chaîne de caractères
};

document.write(song.bye() + "<br>"); // Affiche le résultat de l'appel de la méthode bye de l'objet song dans le document HTML






//Un prototype est un objet qui est associé à chaque fonction et objet en JavaScript. Il permet de partager des propriétés et des méthodes entre les instances d'une fonction constructeur ou d'une classe. En utilisant le prototype, on peut ajouter des méthodes et des propriétés à toutes les instances d'une fonction constructeur ou d'une classe sans avoir à les définir dans chaque instance individuellement. Cela permet d'économiser de la mémoire et de faciliter la maintenance du code.
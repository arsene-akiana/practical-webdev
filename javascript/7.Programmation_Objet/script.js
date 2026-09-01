class MusicPlayer // Définition de la classe MusicPlayer
{
    constructor(format) // Constructeur de la classe MusicPlayer
    {
        this.format = format; // Propriété format de l'objet MusicPlayer
    
        document.write( this.format + "<br>"); // Affiche le format de l'objet MusicPlayer lors de sa création
    }

    play() // Méthode play de la classe MusicPlayer
    {
        document.write("Playing music in " + this.format + " format<br>");
    }

    getFormat() // Méthode getFormat de la classe MusicPlayer
    {
        return this.format; // Retourne la propriété format de l'objet MusicPlayer
    }   

    setFormat(newFormat) // Méthode setFormat de la classe MusicPlayer
    {
        this.format = newFormat; // Modifie la propriété format de l'objet MusicPlayer
    }
}

let player1 = new MusicPlayer("MP3"); // Création d'une instance de la classe MusicPlayer avec le format "MP3"
console.log(player1.getFormat()); // Affiche le format de l'objet player1 dans la console
player1.setFormat("WAV"); // Modifie le format de l'objet player1
console.log(player1.getFormat()); // Affiche le nouveau format de l'objet player1 dans la console

document.write(player1.getFormat() + "<br>"); // Affiche le format actuel de l'objet player1 dans le document HTML
player1.play(); // Appelle la méthode play de l'objet player1


let player2 = new MusicPlayer("OGG");// Création d'une instance de la classe MusicPlayer avec le format "WAV"
player2.play();

/*
le rôle de chaque elements dans ce code est le suivant :- `class MusicPlayer`: Définit une classe nommée MusicPlayer qui représente un lecteur de musique.
- `constructor(format)`: Méthode spéciale qui est appelée lors de la création d'une instance de la classe. Elle initialise la propriété `format` avec la valeur passée en argument.
- `this.format`: Propriété de l'objet MusicPlayer qui stocke le format de musique (ex: MP3, WAV, FLAC).
- `document.write(...)`: Affiche du texte dans le document HTML. Ici, il affiche le format de musique lors de la création d'une instance et lors de l'appel des méthodes.
- `play()`: Méthode qui simule la lecture de musique en affichant un message indiquant le format de musique en cours de lecture.
- `getFormat()`: Méthode qui retourne la valeur actuelle de la propriété `format`.
- `setFormat(newFormat)`: Méthode qui permet de modifier la valeur de la propriété `

*/
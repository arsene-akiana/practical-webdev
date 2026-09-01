
// ***************Ecriture Littérale***********************

// Déclaration littérale d'objet est une façon de créer un objet en JavaScript en utilisant une syntaxe concise et directe. Elle consiste à définir un objet en utilisant des accolades {} et à spécifier ses propriétés et méthodes à l'intérieur de ces accolades.

//Voici un exemple de déclaration littérale d'objet pour créer un objet représentant naruto :               
let naruto = 
{
    attack: function() {return "Naruto attacks with his Rasengan!";},
    defense: function() {return "Naruto defends with his Shadow Clone Jutsu!";},
    name: "Naruto Uzumaki",
    weapon: "Kunai", 
};

document.write(naruto.attack() + "<br>"); // Affiche l'attaque de l'objet naruto dans le document HTML
document.write(naruto.defense() + "<br>"); // Affiche la défense de l'objet naruto dans le document HTML

/*============================================================================= */
// ***********************Constructeur via fonction***************************

// Déclaration d'une fonction comme un constructeur d'objet est une autre façon de créer des objets en JavaScript. Elle consiste à définir une fonction qui agit comme un modèle pour créer des instances d'objets avec des propriétés et des méthodes spécifiques.

//Voici un exemple de déclaration d'une fonction comme un constructeur d'objet pour créer un objet représentant Ninja :

function Ninja(name, weapon) // Définition de la fonction constructeur Ninja avec les paramètres name et weapon
{

    this.attack = function() 
    {
        return this.name + " attacks with his " + this.weapon + "!";
    };

    this.name = name  || " Ninja Inconnu"; // Propriété name de l'objet Ninja, avec une valeur par défaut si aucun nom n'est fourni 
    this.weapon = weapon || "Shuriken"; // Propriété weapon de l'objet Ninja, avec une valeur par défaut si aucune arme n'est fournie
} 
let hinata = new Ninja("Hinata Hyuga", "Byakugan"); // Création d'une instance de l'objet Ninja avec le nom "Hinata Hyuga" et l'arme "Byakugan"
document.write(hinata.attack() + "<br>"); // Affiche l'attaque de l'objet hinata dans le document HTML

/*============================================================================= */
// ***********************Constructeur via class***************************

// Déclarer une classe comme un constructeur d'objet est une autre façon de créer des objets en JavaScript. Elle consiste à définir une classe qui agit comme un modèle pour créer des instances d'objets avec des propriétés et des méthodes spécifiques.

//Voici un exemple de déclaration d'une classe comme un constructeur d'objet pour créer un objet représentant Genin :

class Genin // Définition de la classe Genin
{
    constructor(name, weapon) // Constructeur de la classe Sasuke avec les paramètres name et weapon 
    {
        this.name = name || "Sasuke Uchiha";
        this.weapon = weapon || "Sharingan";
    }

    attack() {
        return this.name + " attacks with his " + this.weapon + "!";
    }
}

let sasuke = new Genin ("Sasuke Uchiha", "Sharingan"); // Création d'une instance de la classe Sasuke avec le nom "Sasuke Uchiha" et l'arme "Sharingan"

document.write(sasuke.attack() + "<br>"); // Affiche l'attaque de l'objet sasuke dans le document HTML

/*============================================================================= */
// ****************Constructeur via heritage de prototypes*********************

//Déclarer une fonction comme un constructeur d'objet et utiliser l'héritage de prototypes est une autre façon de créer des objets en JavaScript. Elle consiste à définir une fonction qui agit comme un modèle pour créer des instances d'objets avec des propriétés et des méthodes spécifiques, tout en permettant à ces objets d'hériter des propriétés et méthodes d'autres objets via le prototype.

//Voici un exemple de déclaration d'une fonction comme un constructeur d'objet et l'utilisation de l'héritage de prototypes pour créer un objet représentant Chuunin et Jounin :


function Chuunin(name) // Définition de la fonction constructeur Chuunin avec le paramètre name  (parent)
{
    this.name = name || "Kakashi Hatake"; // Propriété name de l'objet Chuunin, avec une valeur par défaut si aucun nom n'est fourni

    this.attack = function() { return "AHHH! "}; // Méthode attack de l'objet Chuunin qui retourne une chaîne de caractères
}

function Jounin(weapon) // Définition de la fonction constructeur Jounin avec le paramètre weapon (enfant)
{
    Chuunin.call(this, "Kakashi Hatake"); // Appel du constructeur de la classe parente Chuunin
    this.weapon = weapon || "Chidori"; // Propriété weapon de l'objet Jounin, avec une valeur par défaut si aucune arme n'est fournie

}

Jounin.prototype = Object.create(Chuunin.prototype); // Héritage du prototype de Chuunin pour Jounin (clonage du prototype de Chuunin pour Jounin)

// Jounin.prototype = Chuunin.prototype; // Héritage du prototype de Chuunin pour Jounin (référence directe au prototype de Chuunin pour Jounin c-à-d que si on modifie le prototype de Chuunin, le prototype de Jounin sera également modifié en gros une liaison entre les deux prototypes)

let kakashi = new Jounin("Chidori"); // Création d'une instance de la classe Jounin avec l'arme "Chidori"
document.write(kakashi.name + " attacks with his " + kakashi.weapon + "<br>"); // Affiche l'attaque de l'objet kakashi dans le document HTML



/*============================================================================= */
// ***********************Constructeur via class extends***************************

//Déclarer une classe comme un constructeur d'objet et utiliser l'héritage de classes est une autre façon de créer des objets en JavaScript. Elle consiste à définir une classe qui agit comme un modèle pour créer des instances d'objets avec des propriétés et des méthodes spécifiques, tout en permettant à ces objets d'hériter des propriétés et méthodes d'autres classes via l'héritage de classes.

//Voici un exemple de déclaration d'une classe comme un constructeur d'objet et l'utilisation de l'héritage de classes pour créer un objet représentant Hero et SuperHero :

class Hero // Définition de la classe Hero
{
    constructor(name = "Neji") // Constructeur de la classe Hero avec le paramètre name ayant une valeur par défaut "Neji"
    {
        this.name = name;
    }
}

class SuperHero extends Hero // Définition de la classe SuperHero qui hérite de la classe Hero
{       
    constructor(name = "Naruto", power = "Rasenshuriken") // Constructeur de la classe SuperHero avec les paramètres name et power ayant une valeur par défaut "Byakugan"
    {
        super(name); // Appel du constructeur de la classe parente Hero avec le paramètre name
        this.power = power; // Propriété power de l'objet SuperHero
    }
}

let Minato = new SuperHero("Minato Namikaze", "Flying Thunder God Technique"); // Création d'une instance de la classe SuperHero avec le nom "Minato Namikaze" et le pouvoir "Flying Thunder God Technique"
document.write(Minato.name + " has the power of " + Minato.power + "<br>"); // Affiche le nom et le pouvoir de l'objet Minato dans le document HTML




// Pourquoi dit-on que JavaScript est un langage orienté prototye et non orienté classe ? Parceque JavaScript utilise un système de prototypes pour l'héritage et la création d'objets, contrairement aux langages orientés classes qui utilisent des classes comme modèles pour créer des objets. Dans JavaScript, chaque objet peut avoir un prototype, qui est un autre objet dont il hérite des propriétés et des méthodes. Cela permet une grande flexibilité dans la création et la manipulation d'objets, mais peut également rendre le code plus complexe à comprendre pour ceux qui sont habitués aux langages orientés classes.

// la différence entre une classe et un prototype est que avec un protoype on peut ajouter des propriétés et des méthodes à un objet existant au cours de l'exécution du programme telque pour notre Ninja, on peut ajouter se soigner, etc. Avec une classe, les propriétés et méthodes sont définies lors de la création de la classe et ne peuvent pas être modifiées après. Cependant, les classes en JavaScript sont en réalité des fonctions qui utilisent le système de prototypes pour l'héritage, donc elles partagent certaines similitudes avec les prototypes.
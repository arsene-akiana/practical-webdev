function hello() 
{
    return "Hello from mymodule.js!"; // Renvoie une chaîne de caractères indiquant un message de salutation
}

function howareYou()
{
    return "How are you?"; // Renvoie une chaîne de caractères demandant comment ça va
}   

export { hello as Bonjour, howareYou }; // Exporte les fonctions hello et howareYou pour qu'elles puissent être utilisées dans d'autres fichiers JavaScript. La fonction hello est exportée avec un alias "Bonjour".
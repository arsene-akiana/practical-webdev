
/*============================================================================= */

var a = 5;
var b = 10;
var result = a + b;

document.write(result);

/*============================================================================= */


/*============================================================================= */
/*
let N = 5; 
N = N + 1; // N = N + 1; est équivalent à N += 1; qui est équivalent à N++; qui est équivalent à ++N;
document.write(N);
// N = N - 1; // N = N - 1; est équivalent à N -= 1; qui est équivalent à N--; qui est équivalent à --N;
/*============================================================================= */


/*============================================================================= */
/*
//postincrémentation : N++
let N = 5;
document.write(N++);
document.write(N);
*/
/*============================================================================= */


/*============================================================================= */
/*
//préincrémentation : ++N
let N = 5;
document.write(++N);
document.write(N);
*/

/*============================================================================= */


/*============================================================================= */
/*
document.write(8 == "8"); // true car == compare uniquement les valeurs, donc 8 est égal à "8" même si l'un est un nombre et l'autre une chaîne de caractères.
document.write(8 === "8"); // false car === compare à la fois les valeurs et les types de données, donc 8 n'est pas égal à "8" car l'un est un nombre et l'autre une chaîne de caractères.
*/
/*============================================================================= */

// let est utilisé pour déclarer une variable qui peut être modifiée ultérieurement. Contrairement à var, let a une portée de bloc, ce qui signifie qu'elle n'est accessible que dans le bloc où elle est déclarée. Cela permet d'éviter les problèmes de portée et de rendre le code plus prévisible.

/*
les opérateurs en JS :

affectation : =, +=, -=, *=, /=, %=
arithmétique : +, -, *, /, %
incrémentation/décrémentation : ++, --
comparaison : ==, ===, !=, !==, >, <, >=, <= 
logique : &&, ||, !
*/



// Une comparaison est une opération qui permet de comparer deux valeurs et de déterminer si elles sont égales, différentes, supérieures ou inférieures. Les opérateurs de comparaison renvoient toujours un résultat booléen (true ou false).
//une distinction importante entre == et === est que == compare uniquement les valeurs, tandis que === compare à la fois les valeurs et les types de données.
// une distinction importante entre != et !== est que != compare uniquement les valeurs, tandis que !== compare à la fois les valeurs et les types de données.

/* 
    N++
         -> N = N
         -> N = N + 1
    
    ++N
         -> N = N + 1
         -> N = N

*/

// l'opérateur ! est un opérateur logique qui permet de renverser la valeur d'une expression booléenne. Si l'expression est vraie (true), l'opérateur ! la rendra fausse (false), et si l'expression est fausse (false), l'opérateur ! la rendra vraie (true). Par exemple, si on a une variable isTrue qui vaut true, alors !isTrue vaudra false. Cela peut être utile pour vérifier des conditions inverses dans le code.
function read(phrase){
    if((phrase.charAt(phrase.length - 1) !== '.')){
        throw new Error("La phrase doit se terminer par un point.");   
    }
     
    let longueur = 0;
    let nombreMots = 0;
    let nombreVoyelles = 0;
    const voyelles = 'aeiouAEIOU';
    for(let i=0;i<phrase.length;i++){
        const caractere = phrase.charAt(i);
        longueur++;

          // Compter les voyelles
          if (voyelles.includes(caractere)) {
            nombreVoyelles++;
        }
        //compter les mots
        if (caractere === ' ' || (caractere === '.' && i > 0)) {
            nombreMots++;
        }

    }
    return {
        longueur,
        nombreMots,
        nombreVoyelles
    };

}
//exemple 
const phrase = "Bonjour tout le monde.";
const resultats = read(phrase);

console.log("Longueur de la phrase:", resultats.longueur);
console.log("Nombre de mots:", resultats.nombreMots);
console.log("Nombre de voyelles:", resultats.nombreVoyelles);
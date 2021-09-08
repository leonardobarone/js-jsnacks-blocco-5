// Scrivi una funzione che accetti una stringa come argomento e la ritorni

// girata (es. Ciao -> oaiC)

function giraStringa(string){

    let risultato = [];

    for(var i = string.length - 1; i >= 0; i--){
       
        risultato.push(string[i])
        
    }

    return risultato.join("");
    
    
}

console.log(giraStringa("ciaonee"))
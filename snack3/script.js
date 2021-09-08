// Scrivi una funzione che accetti una stringa come argomento e la ritorni

// girata (es. Ciao -> oaiC)

function giraStringa(string){

    let nuovaParola = "";

    for(var i = string.length - 1; i >= 0; i--){
       
        nuovaParola += string[i];
        
    }

    return nuovaParola;
    
    
}

console.log(giraStringa("Leonardo"))
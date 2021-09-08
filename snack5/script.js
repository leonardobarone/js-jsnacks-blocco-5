// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
function porzioneArray(arr, a, b) {
    
    var arrNew = [];
    
    for(var i = 0; i < arr.length; i++){
        
        if (i >= a && i <= b) {
            arrNew.push(arr[i]);
        } 
        
    }
    return arrNew;
    
}
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

let arr = ["a", "b", "c", "d", "e", "f"];

console.log(porzioneArray(arr, 1, 3));
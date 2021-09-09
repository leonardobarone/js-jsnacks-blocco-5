// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function fusione(primoArray, secondoArray){

    var nuovoArray = [];

    
    if (primoArray.length > secondoArray.length) {
        var arrayPiuLungo = primoArray.length; 
    } else if (primoArray.length < secondoArray.length) {
        var arrayPiuLungo = secondoArray.length;
    } else {
        var arrayPiuLungo = primoArray.length;
    }
    
    for(var i = 0; i < arrayPiuLungo ; i++) {

        
        
        
        if (primoArray[i] !== undefined) {
            
            nuovoArray.push(primoArray[i]);
            nuovoArray.push(secondoArray[i]);
        } else {
            nuovoArray.push(secondoArray[i]);
        }

    }

    return nuovoArray;
}


// FARE CONTROLLO SE LE STRINGHE NON SONO UGUALE


var arr2 = ["a", "b", "c"];
var arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1);
console.log(arr2);
console.log(fusione(arr1, arr2));
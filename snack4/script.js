
// function fusione(primoArray, secondoArray){

//     var nuovoArray = [];

    
//     if (primoArray.length > secondoArray.length) {
//         var arrayPiuLungo = primoArray.length; 
//     } else if (primoArray.length < secondoArray.length) {
//         var arrayPiuLungo = secondoArray.length;
//     } else {
//         var arrayPiuLungo = primoArray.length;
//     }
    
//     for(var i = 0; i < arrayPiuLungo ; i++) {

        
        
        
//         if (primoArray[i] !== undefined) {
            
//             nuovoArray.push(primoArray[i]);
//             nuovoArray.push(secondoArray[i]);
//         } else {
//             nuovoArray.push(secondoArray[i]);
//         }

//     }

//     return nuovoArray;
// }




// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


function fusione(arr1, arr2) {
    
    let risultato = [];

    let breve;
    let lunghezzaBreve;
    let lunga;
    let lunghezzaLunga;


    if (arr1.length <= arr2.length) {
        
        breve = arr1; // primo array
        lunghezzaBreve = arr1.length; // 3
        lunga = arr2; // array lungo
        lunghezzaLunga = arr2.length; // 6

    } else {

        breve = arr2;
        lunghezzaBreve = arr2.length; 
        lunga = arr1;
        lunghezzaLunga = arr1.length;
    
    }

    for ( let i = 0; i < lunghezzaBreve; i++ ) {
        risultato.push(arr1[i]);
        risultato.push(arr2[i]);
    }

    for ( let i = lunghezzaBreve; i < lunghezzaLunga; i++) {
        risultato.push(lunga[i]);
    }

    
    

  
    return risultato;

}



var arr2 = ["a", "b", "c"];
var arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1);
console.log(arr2);
console.log(fusione(arr1, arr2))
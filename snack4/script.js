// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function fusione(arr1, arr2){

    var nuovoArray = [];

    for(var i = 0; i < arr1.length; i++){
        nuovoArray.push(arr1[i])
        nuovoArray.push(arr2[i])

    }

    return nuovoArray;
}


var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3];

console.log(fusione(arr1, arr2))
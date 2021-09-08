// Crea 10 oggetti che rappresentano una zucchina.
const arr = [
    {
        "varieta" : "nera",
        "peso" : 74,
        "lunghezza" : 10,
    },
    {
        "varieta" : "romanesco",
        "peso" : 133,
        "lunghezza" : 17,
    },
    {
        "varieta" : "fiorentino",
        "peso" : 212,
        "lunghezza" : 5,
    },
    {
        "varieta" : "napoletana",
        "peso" : 400,
        "lunghezza" : 24,
    },
    {
        "varieta" : "tonde",
        "peso" : 250,
        "lunghezza" : 10,
    },
    {
        "varieta" : "trombetta",
        "peso" : 410,
        "lunghezza" : 31,
    },
    {
        "varieta" : "nerano",
        "peso" : 210,
        "lunghezza" : 21,
    },
    {
        "varieta" : "milanese",
        "peso" : 110,
        "lunghezza" : 18,
    },
    {
        "varieta" : "bluettina",
        "peso" : 17,
        "lunghezza" : 170,
    },
    {
        "varieta" : "ultimino",
        "peso" : 245,
        "lunghezza" : 16,
    },
];

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
let arrMaggiore = [];
let arrMinore = [];

for(var i = 0; i < arr.length; i++){

    if (arr[i].lunghezza >= 15) {
        arrMaggiore.push(arr[i].lunghezza)        
    } else {
        arrMinore.push(arr[i].lunghezza);
    }
    
}
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
console.log("Le Zucchine più CORTE di 15cm sono: " + arrMinore.join(", "));
console.log("Le Zucchine più LUNGHE di 15cm sono: " + arrMaggiore.join(", "));
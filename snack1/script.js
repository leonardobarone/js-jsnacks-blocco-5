// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
var arr = [
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
        "lunghezza" : 28,
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
// Calcola quanto pesano tutte le zucchine.
var peso = 0;

for(i = 0; i < arr.length; i++) {
     
    var insert = arr[i].peso;
    peso += insert;

}

console.log((peso / 1000).toFixed(2) + " Kg");


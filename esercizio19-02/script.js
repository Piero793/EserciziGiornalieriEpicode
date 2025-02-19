// 1 Quali sono i tipi primitivi principali in TypeScript?
//number
//string
//boolean
//undefined
//null
//any
//never
//object
//array
//function
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var NAME = "Piero";
var AGE = 31;
var TYPESCRIPT_STUDENT = true;
//3) Tipizza il parametro della seguente funzione:
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Piero"));
//4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) {
    return a + b;
};
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var IVA = function (price) {
    return +(price * 0.22);
};
console.log(IVA(250));
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var CONCAT_STRING = function (s1, s2) {
    return s1.concat(s2);
};
console.log(CONCAT_STRING("Buonasera", "Signorina"));
var variable = 12;
variable = null;
variable = undefined;
console.log(variable);
var day = "Sabato";
console.log(day);
// 10) Tipizza il seguente array di numeri nei due modi possibili:
var numbers = [1, 2, 3];
// const numbers: Array<number> = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var TUPLE = ["lunedi", "ciao", "cosa", 12, 24];
console.log(TUPLE);
var PIERO = {
    firstname: "pietro",
    lastname: "laci",
    age: 31,
};
console.log(PIERO);
var NEW_STUDENT = {
    nome: "Giacomo",
    voto: 9,
};
var response = {
    status: 400,
    message: "Not found",
    data: {
        id: 1,
        name: "Giorgio Scalzo",
        email: "giorgio.scalzo@example.com",
    },
};
console.log(response);

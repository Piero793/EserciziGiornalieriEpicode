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

const NAME: string = "Piero";
const AGE: number = 31;
const TYPESCRIPT_STUDENT: boolean = true;

//3) Tipizza il parametro della seguente funzione:

const greet = (name: string) => {
  return "Ciao " + name;
};

console.log(greet("Piero"));

//4) Specifica il tipo di ritorno della seguente funzione:

const sum = (a: number, b: number): number => {
  return a + b;
};

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const IVA = (price: number): number => {
  return +(price * 0.22);
};

console.log(IVA(250));

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const CONCAT_STRING = (s1: string, s2: string): string => {
  return s1.concat(s2);
};

console.log(CONCAT_STRING("Buonasera", "Signorina"));

// 7) Cos'è un Type Union e come si scrive?

//il type union serve ad unire nello stesso contenitore variabili anche di tipo diverso ad es...

type NUMBERSTRING = number | string;

// 8) Crea una variabile che possa contenere un numero, null o undefined.

type NUMNULLUNDEFINED = number | null | undefined;

let variable: NUMNULLUNDEFINED = 12;
variable = null;
variable = undefined;
console.log(variable);
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type GiorniDellaSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

let day: GiorniDellaSettimana = "Sabato";

console.log(day);
// 10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers: number[] = [1, 2, 3];
// const numbers: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const TUPLE: [string, string, string, number, number] = ["lunedi", "ciao", "cosa", 12, 24];
console.log(TUPLE);
// 12) Qual è la differenza tra type e interface?

//i type definiscono il tipo di dato
//le interface servono a descrivere la struttura degli oggetti che possono essere di tipi diversi

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

const PIERO: Person = {
  firstname: "pietro",
  lastname: "laci",
  age: 31,
};

console.log(PIERO);

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface User {
  email: string;
  phone?: number;
}

// const User: User = {
//   email: "blala@ull.com",
// };

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

type Studente = {
  nome: string;
  voto: number;
};

const NEW_STUDENT: Studente = {
  nome: "Giacomo",
  voto: 9,
};

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  model: string;
  year: number;
  price: number;
}

interface Auto extends Veicolo {
  condizione: boolean;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

interface OGG extends Auto {}

// 18) Cosa sono i Generics in TypeScript?

//i generics sono uno strumento utile per definire componenti che potranno utilizzare vari tipi di dato senza doverli definire in anticipo

// 19) È possibile avere più tipi generici in un'interfaccia?

//yess

// 20) Crea un'interfaccia generica per una risposta API.

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const response: ApiResponse<User> = {
  status: 400,
  message: "Not found",
  data: {
    id: 1,
    name: "Giorgio Scalzo",
    email: "giorgio.scalzo@example.com",
  },
};

console.log(response);

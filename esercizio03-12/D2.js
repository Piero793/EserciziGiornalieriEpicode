/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 5;
let numero2 = 10;

if (numero1 > numero2) {
  console.log("il numero più grande è: " + numero1);
} else if (numero1 < numero2) {
  console.log("il numero più grande è:" + numero2);
} else {
  console.log("i due numeri sono uguali!");
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 6;

if (numero3 != 5) {
  console.log("not equal");
} else {
  console.log("Il numero fornito è uguale a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let divisibile = 10;

if (divisibile % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("Il numero non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let int1 = 4;
let int2 = 4;

if (int1 === 8 || int1 + int2 === 8) { };

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart;
let costospedizione = 10;

if (totalShoppingCart > 50) {
  console.log("hai diritto alla spedizione gratuita");
} else ("la spedizione ha un costo di 10");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = 40;
let blackfriday = 0.20;
let costototale = totalShoppingCart + costospedizione;

if (totalShoppingCart + blackfriday > 50) {
  console.log("hai diritto alla spedizione gratuita" + costototale - blackfriday);

} else if (totalShoppingCart + blackfriday < 50) {
  console.log("totale ordine" + costototale + costospedizione + blackfriday);

}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 20;
let num3 = 30;

let max, mid, min;

if (num1 >= num2 && num1 >= num3) {
  max = num1; if (num2 >= num3) { mid = num2; min = num3; } else { mid = num3; min = num2; }

} else if (num2 >= num1 && num2 >= num3) {
  max = num2; if (num1 >= num3) { mid = num1; min = num3; } else { mid = num3; min = num1; }
} else {
  max = num3; if (num1 >= num2) { mid = num1; min = num2; } else { mid = num2; min = num1; }
}
console.log(max, mid, min);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let tipo1 = 22;
console.log(typeof (tipo1));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let paridispari = 15;

if (paridispari % 2 === 0) {
  console.log("il numero  è pari");
} else if (paridispari % 2 === 1) {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 5) {
  console.log("meno di dieci");

} else if (val < 10) {
  console.log("meno di 5");
} else {
  console.log("uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".

*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myarr = [];

myarr.push(1);
myarr.push(2);
myarr.push(3);
myarr.push(4);
myarr.push(5);
myarr.push(6);
myarr.push(7);
myarr.push(8);
myarr.push(9);
myarr.push(10);

console.log(myarr);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myarr[myarr.length - 1] = 100;
console.log(myarr);

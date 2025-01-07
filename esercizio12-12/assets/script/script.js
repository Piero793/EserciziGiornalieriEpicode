


const board = document.querySelector('#board');
const drawButton = document.querySelector('#draw-button');
const lastNumberDisplay = document.querySelector('#last-number');
//console.log(board,drawButton,lastNumberDisplay);

// Creo la tabella con 76 celle numerate da 1 a 76

for (let i = 1; i <= 76; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = 'cella' + i;          //concatenazione delle stringhe
    cell.innerHTML = i;
    board.appendChild(cell);
    //console.log(cell,i);
}

let drawnNumbers = [];             //variabile dove memorizzerò il numero estratto
//console.log(drawnNumbers);


// Funzione per estrarre un numero casuale non ancora estratto con un controllo quando tutti i numeri sono stati estratti
function drawNumber() {
    if (drawnNumbers.length >= 76) {
        alert('Tutti i numeri sono stati estratti!');

    }

    let number;        //qui memorizzo il numero casuale generato

    do {
        number = Math.floor(Math.random() * 76) + 1;         // ciclo e verifico se il numero generato esiste già

    } while (drawnNumbers.includes(number));

    drawnNumbers.push(number);
    //console.log(number)

    // Evidenzia la cella corrispondente al numero estratto
    const cell = document.querySelector('#cella' + number);      // Utilizzo la concatenazione delle stringhe
    cell.classList.add('highlighted');


    // Mostra l'ultimo numero estratto
    lastNumberDisplay.textContent = 'Numero estratto: ' + number;

}

// event listener per richiamare la funzione al click
drawButton.addEventListener('click', drawNumber);


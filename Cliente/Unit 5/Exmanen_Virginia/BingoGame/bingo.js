/*Crea una clase BingoGame que represente el juego de bingo. La clase tendrá:
Propiedades:
cards:Representa el carton del bingo del jugador. Será un array bidimensional de 5*5
(5 columnas y 5 filas), donde cada fila tiene cinco números aleatorios entre 1 y 90
drawnNumbers: Array unidimensional que almacena los números que hansalido hasta el momento
lineAchieved: un booleano que insica si se ha cantado linea
Metodos;
Constructor: Al crear una nueva instancia de BingoGame, se pasa como parámetro el carton
(arraybidimensional con números entre 1 y 90 sin repetirse en cada fila)
drawNumber(): Genera un número aleatorio entre 1 y 90 que no haya salido antes, lo agrega
al array dranNumbers y lo muestra en consola */
class BingoGame {
    constructor(cards) {
        this.cards = cards;             // Cartón del bingo (array 5x5)
        this.drawnNumbers = [];          // Números que han salido
        this.totalNumbers = cards.flat(); // Un array con todos los números del cartón
    }

    // Sortea un número aleatorio entre 1 y 90 que no se haya sorteado antes
    drawNumber() {
        let number;
        do {
            number = Math.floor(Math.random() * 90) + 1;
        } while (this.drawnNumbers.includes(number)); // Asegurarse de que no se repita el número
        this.drawnNumbers.push(number);

        // Muestra los números sorteados en la interfaz
        const drawnNumbersDiv = document.getElementById('drawnNumbers');
        drawnNumbersDiv.innerHTML = `Números sorteados: ${this.drawnNumbers.join(', ')}`;

        console.log(`Número sorteado: ${number}`);
    }

    // Verificar si todos los números del cartón han sido sorteados
    checkCardCompletion() {
        const isComplete = this.totalNumbers.every(num => this.drawnNumbers.includes(num));
        if (isComplete) {
            console.log("¡El cartón de bingo está completo!");
            return true;
        }
        return false;
    }

    // Llenar el cartón sorteando números automáticamente hasta completarlo
    fillCard() {
        while (!this.checkCardCompletion()) {
            this.drawNumber(); // Sortea un número
        }
    }
}

// Cartón de bingo inicial
const card = [
    [5, 18, 35, 48, 60],
    [3, 21, 40, 50, 70],
    [7, 15, 39, 54, 80],
    [10, 25, 41, 55, 78],
    [12, 28, 43, 59, 85]
];

// Crear la instancia del juego
const bingoGame = new BingoGame(card);

// Mostrar el cartón de bingo en la interfaz
const cardDiv = document.getElementById('card');
card.forEach(row => {
    row.forEach(num => {
        const numDiv = document.createElement('div');
        numDiv.textContent = num;
        cardDiv.appendChild(numDiv);
    });
});

// Comenzar a llenar el cartón automáticamente
bingoGame.fillCard();







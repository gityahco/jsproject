

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
}

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
}

const deposit = () => {
while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Please Enter a Number!!");
    } else {
        return numberDepositAmount;
    }
}
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter a number of lines: ");
        const numberOfLines = parseFloat(lines);
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("No more than 3 lines");
        } else {
            return numberOfLines;
        }
    }
    };


const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total of bet: ");
        const numberBet = parseFloat(bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines) {
            console.log("Invalid. Try Again!!");
        } else {
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = [];
    console.log("🚀 ~ file: project.js:60 ~ spin ~ symbols:", symbols)
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol)
        }
    }
    
}
spin();
const reels = [];
for (let i = 0; i < COLS; i++) {
    reels.push([])
    const reelSymbols = [...symbols]
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const numberBet = getBet(balance, numberOfLines);
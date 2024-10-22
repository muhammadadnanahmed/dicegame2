function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function coinToss() {
    return Math.random() < 0.5 ? "heads" : "tails";
}

function startGame() {
    var player1Choice = prompt("Player 1, choose heads or tails:").toLowerCase();

    while (player1Choice !== "heads" && player1Choice !== "tails") {
        player1Choice = prompt("Invalid choice! Please choose 'heads' or 'tails':").toLowerCase();
    }

    var tossResult = coinToss();
    var tossMessage = `The coin toss result is ${tossResult}. `;
    
    if (player1Choice === tossResult) {
        tossMessage += "Player 1 wins the toss and starts!";
    } else {
        tossMessage += "Player 2 wins the toss and starts!";
    }
    
    document.getElementById('tossResult').innerText = tossMessage;

    var dice1, dice2;
    var diceRollHistory = '';
    do {
        dice1 = rollDice();
        dice2 = rollDice();
        diceRollHistory += `Player 1 rolled ${dice1}, Player 2 rolled ${dice2}<br>`;
    } while (dice1 !== dice2);

    diceRollHistory += "Both players rolled the same number! The game ends!";
    document.getElementById('diceRolls').innerHTML = diceRollHistory;
}
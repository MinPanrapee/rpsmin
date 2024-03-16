// Function to determine the winner of the game
function determineWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return "It's a tie!";
    } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Function to handle players' choices and display result
function play(player, choice) {
    if (player === 1) {
        player1Choice = choice;
    } else {
        player2Choice = choice;
    }

    if (player1Choice && player2Choice) {
        const result = determineWinner(player1Choice, player2Choice);
        document.getElementById('result').innerText = `${result}`;
        // Reset choices after determining the winner
        player1Choice = null;
        player2Choice = null;
    }
}

function quitGame() {
    window.location.href = "index.html"; // Replace "index.html" with the path to your index page
}
// Event listeners for players' choices
document.getElementById('player1Rock').addEventListener('click', () => play(1, 'rock'));
document.getElementById('player1Paper').addEventListener('click', () => play(1, 'paper'));
document.getElementById('player1Scissors').addEventListener('click', () => play(1, 'scissors'));
document.getElementById('player2Rock').addEventListener('click', () => play(2, 'rock'));
document.getElementById('player2Paper').addEventListener('click', () => play(2, 'paper'));
document.getElementById('player2Scissors').addEventListener('click', () => play(2, 'scissors'));


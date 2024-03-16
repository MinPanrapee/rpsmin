function startGame() {
    const player1Name = document.getElementById("player1Name").value;
    const player2Name = document.getElementById("player2Name").value;
    const numRounds = document.querySelector('input[name="rounds"]:checked').value;

    if (!player1Name || !player2Name) {
        alert("Please enter both players' names.");
        return;
    }

    sessionStorage.setItem("player1Name", player1Name);
    sessionStorage.setItem("player2Name", player2Name);
    sessionStorage.setItem("rounds", numRounds);

    window.location.href = "game2.html";
}

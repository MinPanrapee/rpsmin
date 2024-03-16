
function startGame() {
    const player1Name = document.getElementById("player1Name").value;
    const numRounds = document.querySelector('input[name="rounds"]:checked').value;

    const numPlayers = sessionStorage.getItem("numPlayers");
    sessionStorage.setItem("player1Name", player1Name);
    sessionStorage.setItem("rounds", numRounds);
    
    window.location.href = "game1.html";
}


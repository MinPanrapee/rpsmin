function nextStep() {
    const selectedPlayers = document.querySelector('input[name="numPlayers"]:checked').value;
    if (selectedPlayers === "1") {
        window.location.href = "gamesetup1.html";
    } else if (selectedPlayers === "2") {
        window.location.href = "gamesetup2.html";
    }
}
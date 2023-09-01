const p1 = {
   name:prompt("Enter Player-1"),
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}
const p2 = {
name:prompt("Enter Player-2"),
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}
const names=document.querySelector("h3");
names.textContent=`${p1.name}  V/S  ${p2.name}`;

const resetButton = document.querySelector("#reset");
const winMsg=document.querySelector("#winMsg");
const winningScoreSelect = document.querySelector("#playto");


let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            winMsg.textContent= `${player.name} wins!!!`;
            winMsg.classList.add("heading");
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
    p1.button.addEventListener("click", function () {
        updateScore(p1, p2);

    });

    p2.button.addEventListener("click", function () {
        updateScore(p2, p1);
    });

    winningScoreSelect.addEventListener("change", function () {
        winningScore = parseInt(this.value);
        reset();
    })

    resetButton.addEventListener("click", reset);

    
    function reset() {
        isGameOver = false;
        winMsg.classList.remove("heading");
        winMsg.textContent="Result...."
        for(let p of[p1,p2]){
            p.score=0;
            p.display.textContent=0;
            p.display.classList.remove("has-text-success", "has-text-danger");
            p.button.disabled = false;
        }
    }

   
import {ship, Gameboard, Player} from "./game.js";

//create players
const player1 = new Player("real");
const player2 = new Player("computer");

//create ship
const longship = new ship(12);
player1.Gameboard.placeShip(longship, 3, 2);

//create board
const boardDiv = document.getElementById("board");

for (let x = 0; x < 5; x++) {
    const row = document.createElement("div"); // 👈 new row

    for (let y = 0; y < 5; y++) {
        const cell = document.createElement("div");
        cell.textContent = `${x},${y}`;
        cell.style.border = "1px solid black";
        cell.style.display = "inline-block";
        cell.style.width = "50px";
        cell.style.height = "50px";

        cell.addEventListener("click", () => {
            console.log("clicked", x, y);
            const result = player1.attack(player2, x, y);

            if (result === "hit") {
                cell.textContent = "💥";
            } else {
                cell.textContent = "❌";
            }
        });

        row.appendChild(cell); // 👈 add to row
    }

    boardDiv.appendChild(row); // 👈 add row to board
}
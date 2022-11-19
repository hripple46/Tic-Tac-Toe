let gameArray = [];

const Gameboard = (() => {
  const addChoice = (playerChoice) => {
    let gameBoardArray = [];
    for (let i = 0; i < playerChoice.length; i++) {
      gameBoardArray.push(playerChoice[i].innerText);
    }
    gameArray = gameBoardArray;
    console.log(gameBoardArray);
  };
  const checkWin = () => {
    if (gameArray[0] == "O" && gameArray[1] == "O" && gameArray[2] == "O") {
      prompt("O Wins!");
    } else if (
      gameArray[0] == "O" &&
      gameArray[4] == "O" &&
      gameArray[8] == "O"
    ) {
      prompt("O Wins!");
    } else if (
      gameArray[0] == "O" &&
      gameArray[3] == "O" &&
      gameArray[6] == "O"
    ) {
      prompt("O Wins!");
    } else if (
      gameArray[1] == "O" &&
      gameArray[4] == "O" &&
      gameArray[7] == "O"
    ) {
      prompt("O Wins!");
    } else if (
      gameArray[2] == "O" &&
      gameArray[5] == "O" &&
      gameArray[8] == "O"
    ) {
      prompt("O Wins!");
    } else if (
      gameArray[3] == "O" &&
      gameArray[4] == "O" &&
      gameArray[5] == "O"
    ) {
      prompt("O Wins!");
    } else if (
      gameArray[6] == "O" &&
      gameArray[7] == "O" &&
      gameArray[8] == "O"
    ) {
      prompt("O Wins!");
    } else if (
      gameArray[2] == "O" &&
      gameArray[4] == "O" &&
      gameArray[6] == "O"
    ) {
      prompt("O Wins!");
    } else if (
      gameArray[0] == "X" &&
      gameArray[1] == "X" &&
      gameArray[2] == "X"
    ) {
      prompt("X Wins!");
    } else if (
      gameArray[0] == "X" &&
      gameArray[4] == "X" &&
      gameArray[8] == "X"
    ) {
      prompt("X Wins!");
    } else if (
      gameArray[0] == "X" &&
      gameArray[3] == "X" &&
      gameArray[6] == "X"
    ) {
      prompt("X Wins!");
    } else if (
      gameArray[1] == "X" &&
      gameArray[4] == "X" &&
      gameArray[7] == "X"
    ) {
      prompt("X Wins!");
    } else if (
      gameArray[3] == "X" &&
      gameArray[4] == "X" &&
      gameArray[5] == "X"
    ) {
      prompt("X Wins!");
    } else if (
      gameArray[6] == "X" &&
      gameArray[7] == "X" &&
      gameArray[8] == "X"
    ) {
      prompt("X Wins!");
    } else if (
      gameArray[2] == "X" &&
      gameArray[4] == "X" &&
      gameArray[6] == "X"
    ) {
      prompt("X Wins!");
    } else if (
      gameArray[2] == "X" &&
      gameArray[5] == "X" &&
      gameArray[8] == "X"
    ) {
      prompt("X Wins!");
    } else return;
  };

  return { addChoice, checkWin };
})();

document.querySelector("#container").addEventListener("click", () => {
  Gameboard.addChoice(document.querySelectorAll(".box"));
  Gameboard.checkWin();
});

//Gameboard.displayGrid();

const displayController = (() => {
  let previousChoice = 0;
  const grid = document.querySelectorAll(".box");
  const playerSelect = () => {
    for (let i = 0; i < grid.length; i++) {
      grid[i].addEventListener("click", () => {
        console.log(`${grid[i].innerText.length}`);
        if (grid[i].innerText.length > 0) {
          return;
        } else {
          previousChoice += 1;

          if (previousChoice % 2 == 0) {
            grid[i].innerText = "X";
          } else {
            grid[i].innerText = "O";
          }
          console.log([i]);
        }
      });
    }
  };
  return { playerSelect };
})();
displayController.playerSelect();

const Players = (name) => {
  const sayName = () => console.log(name);
  return { name, sayName };
};
const Henry = Players("Henry");
Henry.sayName();

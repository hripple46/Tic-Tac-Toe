let gameArray = [];
players = [];
document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".userInput").style.display = "none";

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
        console.log(player1name);
        player1name.playChoice1();
      } else if (
        gameArray[0] == "O" &&
        gameArray[4] == "O" &&
        gameArray[8] == "O"
      ) {
        player1name.playChoice1();
      } else if (
        gameArray[0] == "O" &&
        gameArray[3] == "O" &&
        gameArray[6] == "O"
      ) {
        player1name.playChoice1();
      } else if (
        gameArray[1] == "O" &&
        gameArray[4] == "O" &&
        gameArray[7] == "O"
      ) {
        player1name.playChoice1();
      } else if (
        gameArray[2] == "O" &&
        gameArray[5] == "O" &&
        gameArray[8] == "O"
      ) {
        player1name.playChoice1();
      } else if (
        gameArray[3] == "O" &&
        gameArray[4] == "O" &&
        gameArray[5] == "O"
      ) {
        player1name.playChoice1();
      } else if (
        gameArray[6] == "O" &&
        gameArray[7] == "O" &&
        gameArray[8] == "O"
      ) {
        player1name.playChoice1();
      } else if (
        gameArray[2] == "O" &&
        gameArray[4] == "O" &&
        gameArray[6] == "O"
      ) {
        player1name.playChoice1();
      } else if (
        gameArray[0] == "X" &&
        gameArray[1] == "X" &&
        gameArray[2] == "X"
      ) {
        player2name.playChoice2();
      } else if (
        gameArray[0] == "X" &&
        gameArray[4] == "X" &&
        gameArray[8] == "X"
      ) {
        player2name.playChoice2();
      } else if (
        gameArray[0] == "X" &&
        gameArray[3] == "X" &&
        gameArray[6] == "X"
      ) {
        player2name.playChoice2();
      } else if (
        gameArray[1] == "X" &&
        gameArray[4] == "X" &&
        gameArray[7] == "X"
      ) {
        player2name.playChoice2();
      } else if (
        gameArray[3] == "X" &&
        gameArray[4] == "X" &&
        gameArray[5] == "X"
      ) {
        player2name.playChoice2();
      } else if (
        gameArray[6] == "X" &&
        gameArray[7] == "X" &&
        gameArray[8] == "X"
      ) {
        player2name.playChoice2();
      } else if (
        gameArray[2] == "X" &&
        gameArray[4] == "X" &&
        gameArray[6] == "X"
      ) {
        player2name.playChoice2();
      } else if (
        gameArray[2] == "X" &&
        gameArray[5] == "X" &&
        gameArray[8] == "X"
      ) {
        player2name.playChoice2();
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
    const playChoice1 = () => {
      let gameLog = document.querySelector(".gamelog");
      let pChoice = document.createElement("p");
      pChoice.innerText = `${name} wins!!!`;
      gameLog.appendChild(pChoice);
    };
    const playChoice2 = () => {
      let gameLog = document.querySelector(".gamelog");
      let pChoice = document.createElement("p");
      pChoice.innerText = `${name} wins!!!`;
      gameLog.appendChild(pChoice);
    };
    return { playChoice1, playChoice2 };
  };

  const player1name = Players(document.querySelector("#player1").value);
  const player2name = Players(document.querySelector("#player2").value);
});

//reset the game
let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () => {
  window.location.reload();
});

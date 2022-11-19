let gameBoardArray = [];

const Gameboard = (() => {
  const addChoice = (playerChoice) => {
    gameBoardArray = [];
    for (let i = 0; i < playerChoice.length; i++) {
      gameBoardArray += playerChoice[i].innerText;
    }
    console.log(gameBoardArray);
  };

  return { addChoice };
})();
document.querySelector("#container").addEventListener("click", () => {
  Gameboard.addChoice(document.querySelectorAll(".box"));
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

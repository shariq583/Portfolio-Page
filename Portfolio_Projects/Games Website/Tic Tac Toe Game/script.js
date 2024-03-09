let turnX = true;
let gameBtns = document.querySelectorAll(".cell");
let turnDisp = document.querySelector(".text");
let winDisp = document.querySelector(".win");
let resetBtn = document.querySelector("#resetBtn");
var audio = new Audio("Audio/pop-39222.mp3");
var sucAudio = new Audio("Audio/success-1-6297.mp3");
let gameAudio = new Audio("Audio/game-music-loop-7-145285.mp3");
let drawAudio = new Audio("Audio/game-over-arcade-6435(1).mp3");
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 4, 2],
  [6, 7, 8],
];

gameAudio.play();

gameBtns.forEach((box) => {
  box.addEventListener("click", () => {
    audio.play();
    if (turnX == true) {
      box.innerText = "X";
      turnX = false;
      turnDisp.innerText = "O's Turn";
    } else {
      box.innerText = "O";
      turnX = true;
      turnDisp.innerText = "X's Turn";
    }
    box.disabled = true;
    if (winCheck()) {
      // Check for winner
      for (const btn of gameBtns) {
        btn.disabled = true;
      }
    } else if (drawCheck()) {
      // Check for draw
      drawAudio.play();
      winDisp.innerText = "It's a Draw!";
    }
  });
});

const winCheck = () => {
  for (const pattern of winPattern) {
    let pos1Val = gameBtns[pattern[0]].innerText;
    let pos2Val = gameBtns[pattern[1]].innerText;
    let pos3Val = gameBtns[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        sucAudio.play();
        winDisp.innerText = `Winner is ${pos3Val}`;
        return true; // Return true if there's a winner
      }
    }
  }
  return false; // Return false if there's no winner
};

const drawCheck = () => {
  for (const btn of gameBtns) {
    if (btn.innerText == "") {
      return false; // Return false if there are still empty cells
    }
  }
  return true; // Return true if all cells are filled
};

resetBtn.addEventListener("click", () => {
  location.reload();
});

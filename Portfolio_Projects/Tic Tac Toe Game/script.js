let turnX = true;
let gameBtns = document.querySelectorAll(".cell");
let turnDisp = document.querySelector(".text");
let winDisp = document.querySelector(".win");
let resetBtn = document.querySelector("#resetBtn");
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
let evt;
gameBtns.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX == true) {
      box.innerText = "X";
      turnX = false;
      turnDisp.innerText = "O's Turn";
    } else {
      box.innerText = "O";
      turnX = true;
      turnDisp.innerText = "X's Turn";
    }
    // trunCheck();
    box.disabled = true;
    winCheck(evt);
  });
});
const winCheck = () => {
  for (const pattern of winPattern) {
    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(
      gameBtns[pattern[0]].innerText,
      gameBtns[pattern[1]].innerText,
      gameBtns[pattern[2]].innerText
    );
    let pos1Val = gameBtns[pattern[0]].innerText;
    let pos2Val = gameBtns[pattern[1]].innerText;
    let pos3Val = gameBtns[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        winDisp.innerText = `Winner is ${pos3Val}`;
        for (const btn of gameBtns) {
          btn.disabled = true;
        }
      }
    }
  }
};
resetBtn.addEventListener("click", () => {
  location.reload();
});

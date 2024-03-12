let result = document.querySelector("#result");
let guessBtn = document.querySelector("#guessBtn");
const numFloat = Math.random() * 100;
const numInt = Math.floor(numFloat);
let userWin = false;
const matchNum = () => {
  var userInp = document.querySelector("#numGuess").value;
  if (numInt == userInp && userWin == false) {
    result.innerHTML = "Correct!";
    userWin = true;
  } else if (numInt < userInp && userWin == false) {
    result.innerHTML = "Too High!";
  } else if (numInt > userInp && userWin == false) {
    result.innerHTML = "Too Low!";
  }
  console.log(numInt);
};
guessBtn.addEventListener("click", () => {
  if (!userWin) {
    setTimeout(() => {
      matchNum();
    }, 10);
  }
});

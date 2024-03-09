let gameBtns = document.querySelectorAll(".choice");
let msgBox = document.querySelector("#msgTxt");
let userScore = document.querySelector(".userScore");
let compScore = document.querySelector(".compScore");
let userScoreInt = parseInt(userScore.innerText);
let compScoreInt = parseInt(compScore.innerText);
const mainGame = (tagId) => {
  let compChoice = numGen();
  if (tagId == compChoice) {
    msgBox.innerText = "That's A Draw";
    msgBox.style.backgroundColor = "black";
  } else {
    let userWin = true;
    if (tagId == "rock") {
      // paper , scissors
      userWin = compChoice == "scissors" ? true : false;
      console.log("User Choice is :", tagId);
      console.log("Comp Choice is :", compChoice);
    } else if (tagId == "paper") {
      // paper , scissors
      userWin = compChoice == "rock" ? true : false;
      console.log("User Choice is :", tagId);
      console.log("Comp Choice is :", compChoice);
    } else {
      userWin = compChoice == "paper" ? true : false;
      console.log("User Choice is :", tagId);
      console.log("Comp Choice is :", compChoice);
    }
    showWin(userWin);
  }
};
const showWin = (userWin) => {
  if (userWin == true) {
    msgBox.innerText = "You Won ";
    msgBox.style.backgroundColor = "green";
    userScoreInt++;
    userScore.innerText = userScoreInt;
    console.log(userScore, userScoreInt);
  } else if (userWin == false) {
    msgBox.innerText = "Conp Won!";
    msgBox.style.backgroundColor = "red";
    compScoreInt++;
    compScore.innerText = compScoreInt;
    console.log(compScore, compScoreInt);
  }
};
const numGen = () => {
  let num = Math.floor(Math.random() * 3);
  let tagChoice = ["rock", "paper", "scissors"];
  return tagChoice[num];
};
gameBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tagId = btn.getAttribute("id");
    mainGame(tagId);
  });
});

// const catUrl = "https://cat-fact.herokuapp.com/facts";
// const para = document.querySelector("#firstPara");
// let num = Math.floor(Math.random() * 5);

// const getInfo = async (num = 0) => {
//   try {
//     let result = await fetch(catUrl);
//     let resultTxt = await result.json();
//     para.innerText = resultTxt[num].text;
//   } catch (error) {
//     console.error("Error fetching cat facts:", error);
//   }
// };
// // const getInfo = (num = 0) => {
// //   fetch(catUrl)
// //     .then((response) => {
// //       return response.json();
// //     })
// //     .then((resultTxt) => {
// //       para.innerText = resultTxt[num].text;
// //     });
// // };
// getInfo(num);

// Project Code :-
let baseUrl =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.26/v1/currencies/";
let fromImg = document.querySelector("#fromImg");
let toImg = document.querySelector("#toImg");
let dropDowns = document.querySelectorAll(".dropDown select ");
let fromTxtBox = document.querySelector("#fromField");
let toTxtBox = document.querySelector("#toField");
let msgTxt = document.querySelector("#msgTxt");
let dateTxt = document.querySelector("#updateDate");
// dropDown Update :
dropDowns.forEach((opt) => {
  for (code in countryList) {
    let newOpt = document.createElement("option");
    newOpt.innerText = code;
    newOpt.value = code;
    opt.append(newOpt);
  }
  opt.addEventListener("change", (evt) => {
    changeFlag(evt);
  });
});
// flagUpdate :
const changeFlag = (element) => {
  var inpCurr = element.target.value;
  var countCode = countryList[inpCurr];
  let imgUrl = `https://flagsapi.com/${countCode}/flat/32.png`;
  console.log(element.target.id);
  if (element.target.id == "fromVal") {
    fromImg.src = imgUrl;
  } else if (element.target.id == "toVal") {
    toImg.src = imgUrl;
  }
};

fromTxtBox.addEventListener("keyup", () => {
  logCode(dropDowns[0].value, dropDowns[1].value);
});
const logCode = (codeFrom, codeTo) => {
  let currUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${codeFrom.toLowerCase()}.json`;
  if (fromTxtBox.value > 0 || dropDowns[0].value != "default") {
    console.log(dropDowns[0].value);
    let currResponse = fetch(currUrl).then((res) => {
      let resJson = res.json().then((resJson) => {
        codeFromString = String(codeFrom);
        codeLowerFrom = codeFrom.toLowerCase();
        codeLowerTo = codeTo.toLowerCase();
        // resJson[codeLowerFrom][codeLowerTo]
        updateCurr(resJson[codeLowerFrom][codeLowerTo]);
        updateDate(resJson.date);
      });
    });
    msgTxt.innerText = "Conversion Done";
    msgTxt.style.color = "green";
  } else {
    msgTxt.innerText = "Insert some value";
    msgTxt.style.color = "red";
  }
  if (dropDowns[0].value == "default") {
    msgTxt.innerText = "Select some currency";
    msgTxt.style.color = "red";
  }
};
const updateCurr = (updateNum) => {
  let amount = fromTxtBox.value;
  let updateAmt = amount * updateNum;
  toTxtBox.placeholder = updateAmt;
};
const updateDate = (inpDate) => {
  dateTxt.innerText = inpDate;
};

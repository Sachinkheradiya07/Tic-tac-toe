let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let messagecon = document.querySelector(".message-con");
let msg = document.querySelector("#message");

let turno = true; // playrex playero

const winPartterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const restGame = () => {
  turno = true;
  enableBoxes();
  messagecon.classList.add("hide");
};

boxes.forEach(function (box) {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "o";
      box.style.color = "#6554AF";
      turno = false;
    } else {
      box.innerText = "x";
      box.style.color = "#E966A0";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations winner is, ${winner} `;
  messagecon.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPartterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
newbtn.addEventListener("click", restGame);
restbtn.addEventListener("click", restGame);

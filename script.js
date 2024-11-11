let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-game");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const  resetGame = () =>{
turnO= true;
enablBoxes();
msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
     
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });

});
const disablBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner)=>{
msg.innerText = `congratulations, winner is ${winner}`;
msgContainer.classList.remove("hide");
disablBoxes();
};
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val){
               
                showWinner(pos1val);
            }
        }

    }
};

newGameBtn.addEventListener("click",resetGame);
rstbtn.addEventListener("click", resetGame);

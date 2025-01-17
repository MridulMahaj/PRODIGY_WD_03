

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    enbaleBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        if(turn0){
            box.innerHTML = "0";
            turn0 = false;
        } else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disbaleBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enbaleBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}
const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbaleBoxes();
}


const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner");
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


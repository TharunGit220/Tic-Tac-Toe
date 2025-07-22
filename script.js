let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newbutton = document.querySelector('#newgamebutton')
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnX = true;

let winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const checkwinner = () =>{
    for(let pattern of winningpattern){
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;

        if(pos0 != "" && pos1 != "" && pos2 != ""){
            if(pos0 === pos1 && pos1 === pos2){
                console.log("Winner Winner ", pos0)
                showWinner(pos0)
            }
        
        }   
    }
}

const disablebutton = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}
const enablebutton = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }

}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide')
    disablebutton()
}

const resetgame = () => {
    let turnX = true;
    enablebutton()
    msgContainer.classList.add('hide')
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked")
        if(turnX){
            box.innerText = "X";
            turnX = false
        }
        else{
            box.innerText = "O"
            turnX = true
        }
        box.disabled = true;

        checkwinner()
        
    })
})

newbutton.addEventListener('click' , resetgame)
resetBtn.addEventListener('click',resetgame)


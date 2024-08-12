let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#resetbtn")

let turn_o = true;

const win_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    

    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("wasclicked")
        if(turn_o){
            box.innerText = "O";
            turn_o = false;
        }
        else{
            box.innerText = "X";
            turn_o = true;
        }
        box.disabled = true;

        check_winner();
    })
})

const check_winner = () => {
    for(let pattern of win_patterns ){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner")
            }
        }
    }
}
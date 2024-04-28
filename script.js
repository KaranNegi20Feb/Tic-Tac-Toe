document.addEventListener("DOMContentLoaded",function(){
    const boxes=document.querySelectorAll(".box");
    const reset=document.getElementById("reset-btn"); // Corrected
    const newgame=document.getElementById("new-game"); // Corrected
    let msgContianer=document.querySelector(".msg-container");
    let msg=document.querySelector("#msg");

    let turn0=true;
    let turn1=false;
    let winPattern=[[0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

    const checkWinner=()=>{
        for(let pattern of winPattern){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            if(pos1Val !=""&& pos2Val !=""&&pos3Val !=""){
                if(pos1Val==pos2Val && pos2Val==pos3Val){
                    console.log("winner");
                    showWinner(pos1Val);
                }
            }
            
        }
    }

    const disableBoxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    };


    const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    };
    
    const resetGame=()=>{
        turn0=true;
        turn1=false;
        enableBoxes();
        msgContianer.classList.add("hide");
    }

    const showWinner=(winner)=>{
        msg.innerText=`Congratulation🎉,Winner is ${winner}`;
        msgContianer.classList.remove("hide");
        disableBoxes();
    }

    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("button clicked");
            if(turn0){
                box.innerText="0";
                turn0=false;
                turn1=true;
            }
            else if(turn1){
                box.innerText="X";
                turn1=false;
                turn0=true;
            }
            box.disabled=true;
            checkWinner();
        })
    });


    newgame.addEventListener("click",resetGame);
    reset.addEventListener("click",resetGame);

});

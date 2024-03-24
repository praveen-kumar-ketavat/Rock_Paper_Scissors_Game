let userScore=0;
let compScore=0;

let rock=document.querySelector("#rock");
rock.addEventListener("click",()=>{
    userChoice="rock";
    playGame(userChoice)
});
let paper=document.querySelector("#paper");
paper.addEventListener("click",()=>{
    userChoice="paper";
    playGame(userChoice)
});
let scissors=document.querySelector("#scissors");
scissors.addEventListener("click",()=>{
    userChoice="scissors";
    playGame(userChoice)
});

let genComp=()=>{
    let compOptions=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return compOptions[index];
}
let playGame=(userChoice)=>{
    let user=userChoice
    let comp=genComp();
    console.log("user choice ",user);
    console.log("user choice ",comp);
    fight(user,comp);
    
}


let fight=(user,comp)=>{
    if(user===comp){
        msg.innerText="draw....!";
    }
    else{
        let userWin=true;
        if(user==="rock"){
            userWin= comp==="paper"?false:true;
        }
        else if(user==="paper"){
            userWin= comp==="scissors"?false:true;
        }
        else{
            userWin= comp=="rock"?false:true;
        }
        showWinner(userWin);
    }
    display(user,comp);
}

let msg=document.querySelector("#msg");
let us=document.querySelector("#user-score");
let cs=document.querySelector("#comp-score");
let showWinner=(userWin)=>{
    if(userWin){
        msg.innerText="you win..!"
        userScore++;
        us.innerText=userScore;
    }
    else{
        msg.innerText="you lose..!"
        compScore++;
        cs.innerText=compScore;
    }
}
let disp=document.querySelector(".choice-msg")
let display=(user,comp)=>{
    disp.innerText=`your's : ${user} & computer's : ${comp}`;
}


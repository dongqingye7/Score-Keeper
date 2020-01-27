var p1Button=document.getElementById("p1");
var p2Button=document.querySelector("#p2");
var resetButton=document.querySelector("#reset");
var p1Score=document.querySelector("#p1Score");
var p2Score=document.querySelector("#p2Score");
var numInput=document.querySelector("input");
var maxScoreDisplay=document.querySelector("#maxScoreDisplay");
var p1=0;
var p2=0;
var gameOver=false;
var maxScore=5;

p1Button.addEventListener("click",function(){
    if (!gameOver){
        p1++;
        if(p1>=maxScore){
            gameOver=true;
            p1Score.style.color="green";
        }
        p1Score.textContent=p1;
    }
});

p2Button.addEventListener("click",function(){
    if (!gameOver){
        p2++;
        if(p2>=maxScore){
            gameOver=true;
            p2Score.style.color="green";
        }
        p2Score.textContent=p2;
    }
});

function reset(){
    p1=0;
    p2=0;
    p1Score.textContent=p1;
    p2Score.textContent=p2;
    p1Score.style.color="black";
    p2Score.style.color="black";
    gameOver=false;
}

resetButton.addEventListener("click",reset);

numInput.addEventListener("change",function(){
    maxScoreDisplay.textContent=numInput.value;
    maxScore=numInput.value;
    reset();
});
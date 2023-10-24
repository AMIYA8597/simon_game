let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "pink", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started == true;

        levelUp();
    }


});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100)

}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100)

}

function levelUp() {
    level++;
    h2.innerText = `level ${level}`

    let randonIndex = Math.floor(Math.random() * 3);
    let rancomColour = btns[randonIndex];
    let randomButton = document.querySelector(`.${rancomColour}`);
    // console.log(randonIndex);
    // console.log(randonColour);
    // console.log(randonButton);
    gameSeq(rancomColour);
    console.log(gameSeq);
    gameFlash(randomButton);
}

function checkAnswer(index) {
    console.log("current level : ", level);
    // let index = (level - 1);
    if (userSeq[index] === gameSeq[index]) {
        console.log("same value");
        if (userSeq.length==gameSeq.length) {
            // levelUp();

            setTimeout(levelUp,1000);
            
        }
    }
    else {
        h2.innerHTML = `game over! your score was <b>${level}<b/> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "purple"
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white"
        },250)
        reset();
    }

}

function btnPress() {

    console.log(this);
    let btn = this;
    userFlash(btn)
    // console.log("btn was pressed");

    userColour = btn.getAttribute("id");
    // console.log(userColour);
    userSeq.push(userColour);

    checkAnswer(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btns of allBtns) {
    btns.addEventListener("click", btnPress)
}

function reset (){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
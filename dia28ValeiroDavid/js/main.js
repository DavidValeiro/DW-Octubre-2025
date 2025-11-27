console.log("Script enlazado");

const btns = document.querySelectorAll(".random-color-button");

function random(number){
    return Math.floor(Math.random() * (number + 1));
};

function bgChange(e){
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
};

btns.forEach(btn => btn.addEventListener("click", bgChange));

const randomColorDivButton = document.querySelector("#random-color-div-button");
const divs = document.querySelectorAll(".random-color-div");

function divsRandomColor(){
    divs.forEach(div => bgChange(div))
}

randomColorDivButton.addEventListener("click", divsRandomColor);


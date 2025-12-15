console.log("Script enlazado");


let animationContainer = document.querySelector(".animation-container div");
let animationButton = document.querySelector("#animation-button");

function animationInsertHandler(){
       if(animationContainer.classList.contains("rotation")){
           let rotationPos = getComputedStyle(animationContainer).transform;
           animationContainer.style.transform = rotationPos;
           animationContainer.classList.remove("rotation"); 
           setTimeout(() => {
               const target = (rotationPos <= 180) ? 180 : 0;
               animationContainer.style.transform = `rotate(${target}deg)`;
               animationContainer.style.transform = "rotate(0deg)";
           }, 50);
       }else{
           animationContainer.classList.add("rotation");
       }
}
animationButton.addEventListener("click", animationInsertHandler);


let textContainer = document.querySelector(".text-container p");
let textButton = document.querySelector("#text-button");
function themeHandler(){
    if(textContainer.classList.contains("night")){
        textContainer.classList.remove("night");
        textContainer.classList.add("day");
    }else{
        textContainer.classList.remove("day");
        textContainer.classList.add("night");
    }
}
textButton.addEventListener("click", themeHandler);



let widthContainer = document.querySelector(".width-container div");
let widthButton = document.querySelector("#width-button");
function widthSetHandler(){
    if(widthContainer.classList.contains("big-box")){
        widthContainer.classList.remove("big-box");
    }else{
        widthContainer.classList.add("big-box");
    }
}
widthButton.addEventListener('click', widthSetHandler);


let divContainer = document.querySelector(".div-container");
let divButton = document.querySelector("#div-button");
function randomColor(number){
    return Math.floor(Math.random() * (number + 1));
};

let counter = 1;
function createDivHandler(){
    const newDiv = document.createElement("div");
    newDiv.className = "created-div";
    const rndCol = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
    newDiv.style.backgroundColor = rndCol;
    newDiv.textContent = counter++;
    divContainer.appendChild(newDiv);

    function renumerarDivs() {
    const createdDivs = divContainer.querySelectorAll(".created-div");
    createdDivs.forEach((div, index) => {
        div.textContent = index + 1;
    });
    counter = allDivs.length + 1; 
    }

    function deleteDivHandler(){
        newDiv.remove();
        renumerarDivs();
    }
    newDiv.addEventListener("click", deleteDivHandler);
}

divButton.addEventListener("click", createDivHandler);






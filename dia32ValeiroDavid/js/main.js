console.log("Script enlazado");

let textContainer = document.querySelector(".text-container p");
let textButton = document.querySelector("#text-button");
function changeText (){
    textContainer.style.backgroundColor = 'white';
    textContainer.style.color = 'black';
}
function resetText (){
    textContainer.style.backgroundColor = 'black';
    textContainer.style.color = 'white';
}
function textAlternateHandler(){
    if (textContainer.style.color === 'black'){
        resetText();
    }else{
        changeText();
    }
}
textButton.addEventListener("click", textAlternateHandler);


let widthContainer = document.querySelector(".width-container div");
let widthButton = document.querySelector("#width-button");
function widthAlternateHandler(){
    if (widthContainer.style.width === '80vw'){
        widthContainer.style.width = '20vw';
    }else{
        widthContainer.style.width = '80vw';
    }
}
widthButton.addEventListener('click', widthAlternateHandler);


let animationContainer = document.querySelector(".animation-container div");
let animationButton = document.querySelector("#animation-button");
function alternateAnimationHandler(){
    if (animationContainer.style.animationName === 'scale'){
        animationContainer.style.animationName = 'rotate';
    }else{
        animationContainer.style.animationName = 'scale';
    }
}
animationButton.addEventListener("click", alternateAnimationHandler);


let displayContainer = document.querySelector(".display-container div");
let displayButton = document.querySelector("#display-button");
function alternateDisplayHandler(){
    if (displayContainer.style.display === 'none'){
        displayContainer.style.display = 'block';
    }else{
        displayContainer.style.display = 'none';
    }
}
displayButton.addEventListener("click", alternateDisplayHandler);


let opacityContainer = document.querySelector(".opacity-container div");
let opacityButton = document.querySelector("#opacity-button");
function alternateOpacityHandler(){
    if (opacityContainer.style.opacity === '0'){
        opacityContainer.style.opacity = '1';
    }else{
        opacityContainer.style.opacity = '0';
    }
}
opacityButton.addEventListener("click", alternateOpacityHandler);



let cells = document.querySelectorAll(".cell");
let cellButton = document.querySelector("#cell-button");
function elegirCellAleatoria(arr) {
  const posicionAleatoria = Math.floor(Math.random() * arr.length);
  return posicionAleatoria;
}
// function changeColorHandler(){
//     let aleatoryCell = elegirCellAleatoria(cells);
//     cells[aleatoryCell].style.backgroundColor = 'blue';
// }

//  function cellFinder(){
//      cells.forEach((cell) => {
//          if (cell.style.backgroundColor === 'blue') {
//              cell.style.backgroundColor = 'crimson';
//          }else{
//              changeColorHandler();
//          }
//      });
//  }

// function bingoHandler(){
//     aleatoryCell = cells[Math.floor(Math.random() * cells.length)]
//     if (aleatoryCell.style.backgroundColor !== 'blue') {
//             aleatoryCell.style.backgroundColor = 'blue';
//     }else{
//         aleatoryCell.style.backgroundColor = 'crimson';
//     }

// }


function resetAleatory(){
    cells.forEach((cell) => {
         if (cell.style.backgroundColor === 'blue') {
             cell.style.backgroundColor = 'crimson';
         }
    });
}

function changeColorHandler(){
    resetAleatory();
    aleatoryCell = cells[Math.floor(Math.random() * cells.length)]
    aleatoryCell.style.backgroundColor = 'blue';
}



cellButton.addEventListener("click", changeColorHandler);



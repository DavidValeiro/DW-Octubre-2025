console.log("Script enlazado");
let imgRound = document.getElementById("round");
let roundButton = document.getElementById("roundButton");

roundButton.addEventListener('click',()=>{
    imgRound.classList.toggle("youSpinMeRound");
});
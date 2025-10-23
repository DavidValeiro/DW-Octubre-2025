console.log("Script enlazado");
let imgRound = document.getElementById("round");
let roundButton = document.getElementById("roundButton");

roundButton.addEventListener('click',()=>{
    imgRound.classList.toggle("youSpinMeRound");
    roundButton.disabled = true;
    setTimeout(function() {roundButton.disabled = false;}, 2200);
    setTimeout(() => { imgRound.classList.remove('youSpinMeRound');}, 2200);
});
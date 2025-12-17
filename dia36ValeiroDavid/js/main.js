console.log("Script enlazado");

let menuOptions = document.querySelectorAll(".option");
let contents = document.querySelectorAll(".content");

function menuHandler(e) {
    menuOptions.forEach((opt, i) => {
        opt.classList.remove("active");
        opt.setAttribute("aria-selected", "false");
        contents[i].classList.add("none");
    });
    e.target.classList.add("active");
    e.target.setAttribute("aria-selected", "true");
    contents[Array.from(menuOptions).indexOf(e.target)].classList.remove("none");
};

menuOptions.forEach((option) => {
option.addEventListener("click", menuHandler);
});


document.querySelectorAll('.card').forEach(card => {
    const inner = card.querySelector('.card-inner');
    const maxTilt = 20; 

    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        const isFlipped = card.matches(':hover');

        inner.style.transform = `
            rotateY(${isFlipped ? 180 + rotateY : rotateY}deg)
            rotateX(${rotateX}deg)
        `;
    });

    card.addEventListener('mouseleave', () => {
        inner.style.transform = '';
    });
});
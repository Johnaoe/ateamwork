// Director list animations. Button, info screen

const buttons = document.querySelectorAll(".director-oval");
const infos = document.querySelectorAll(".info-screen");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("button-rotate");
        let infoscreen = button.parentNode.lastElementChild;
        infoscreen.classList.toggle("show-content")
    })
});


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
// Side menu element toggle bellow -->
const btn = document.querySelector('#btn');
const info = document.querySelector('.side_menu__container')

btn.addEventListener("click", (ea) => {
    info.classList.toggle('show-element');
});

const close_btn = document.querySelector('#close_btn');
const info2 = document.querySelector('.side_menu__container')

close_btn.addEventListener("click", (ea) => {
    info2.classList.toggle('show-element');
});
// Background element toggle bellow -->
const bg_btn = document.querySelector('#btn');
const bg_info = document.querySelector('.bg_side_menu__container')

bg_btn.addEventListener("click", (ea) => {
    bg_info.classList.toggle('view-element');
});

const close_bg_btn = document.querySelector('#close_btn');
const close_bg_info = document.querySelector('.bg_side_menu__container')

close_bg_btn.addEventListener("click", (ea) => {
    close_bg_info.classList.toggle('view-element');
});
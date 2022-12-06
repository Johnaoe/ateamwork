const btn = document.querySelector('#btn');
const info = document.querySelector('.side_menu__container','.bg_side_menu__container')

btn.addEventListener("click", (ea) => {
    info.classList.toggle('show-element');
    info.classList.toggle('show-bg-element');
    ea.target.classList.toggle('active');
});

const close_btn = document.querySelector('#close_btn');
const info2 = document.querySelector('.side_menu__container')

close_btn.addEventListener("click", (ea) => {
    info2.classList.toggle('show-element');
    info2.classList.toggle('show-bg-element');
    // ea.target.classList.toggle('active');
});
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
const info = document.querySelector('.side_menu__container');

btn.addEventListener("click", (ea) => {
    info.classList.toggle('show-element');
});

const close_btn = document.querySelector('#close_btn');
const info2 = document.querySelector('.side_menu__container');

close_btn.addEventListener("click", (ea) => {
    info2.classList.toggle('show-element');
});

const close_menu = document.querySelector('.bg_side_menu__container');
const info3 = document.querySelector('.side_menu__container');

close_menu.addEventListener("click", (ea) => {
    info3.classList.toggle('show-element');
});

// Background element toggle bellow -->
const bg_btn = document.querySelector('#btn');
const bg_info = document.querySelector('.bg_side_menu__container');

bg_btn.addEventListener("click", (ea) => {
    bg_info.classList.toggle('view-element');
});

const close_bg_btn = document.querySelector('#close_btn');
const close_bg_info = document.querySelector('.bg_side_menu__container');

close_bg_btn.addEventListener("click", (ea) => {
    close_bg_info.classList.toggle('view-element');
});

const close_bg_menu = document.querySelector('.bg_side_menu__container');
const close_bg_info3 = document.querySelector('.bg_side_menu__container');

close_bg_menu.addEventListener("click", (ea) => {
    close_bg_info3.classList.toggle('view-element');
});

//CONTACTS mobile 
function myFunction() {
    
    const name = document.getElementById("input-nameID").value;
    const email = document.getElementById("input-emailID").value;
    const textarea = document.getElementById("input-messageID").value;
    const nameStyle = document.getElementById("input-nameID");
    const emailStyle = document.getElementById("input-emailID");
    const messageStyle = document.getElementById("input-messageID");
    const labelStyle = document.getElementById("labelID");
    let text;

    if (name == "") {
        text = "This field is required";
        nameStyle.style.borderBottomColor = "#F67E7E";
        document.querySelector('input[type=text]').style.setProperty("--c", "rgba(246, 126, 126, 0.6)");

    } else {
        text = "";
        nameStyle.style.borderBottomColor = "#FFF";
    }
    document.getElementById("nameID").innerHTML = text;
    
    if (email == "") {
        text = "This field is required";
        emailStyle.style.borderBottomColor = "#F67E7E";
        document.querySelector('input[type=email]').style.setProperty("--c", "rgba(246, 126, 126, 0.6)");
    } else {
        text = "";
        emailStyle.style.borderBottomColor = "#FFF";
    }
    document.getElementById("emailID").innerHTML = text;

    if (textarea == "") {
        text = "This field is required";
        messageStyle.style.borderBottomColor = "#F67E7E";
        labelStyle.style.color = "rgba(246, 126, 126, 0.6)";
    } else {
        text = "";
        messageStyle.style.borderBottomColor = "#FFF";
        labelStyle.style.color = "#FFF"
    }
    document.getElementById("messageID").innerHTML = text;

}

let emailField = document.getElementById("input-emailID");
let emailError = document.getElementById("email-error");
function validateEmail() {
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please use a valid email address";
        return false;
    }
    emailError.innerHTML = "";
    return true;
}

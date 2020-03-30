let Arrow_Left = document.querySelector("#ArrowL");
let Arrow_Right = document.querySelector("#ArrowR");
let Slide0 = document.querySelector(".Slide_0");
let Slide1 = document.querySelector(".Slide_1");


function ToRight(slideF, slideS) {
    slideS.classList.toggle("hidden");
    slideF.classList.toggle("move_Right");
    slideF.addEventListener("transitionend", function () {
        slideF.classList.add("hidden");
        slideF.classList.remove("move_Right");
    });
}

Arrow_Right.addEventListener("click", function () {

    if (Slide1.classList.contains("hidden")) {
        ToRight(Slide0, Slide1);
    }

    if (Slide0.classList.contains("hidden")) {
        ToRight(Slide1, Slide0);
    }
});


function ToLeft(slideF, slideS) {
    slideS.classList.toggle("hidden");
    slideF.classList.toggle("move_Left");
    slideF.addEventListener("transitionend", function () {
        slideF.classList.add("hidden");
        slideF.classList.remove("move_Left");
    });
}

Arrow_Left.addEventListener("click", function () {

    if (Slide1.classList.contains("hidden")) {
        ToLeft(Slide0, Slide1);
    }

    if (Slide0.classList.contains("hidden")) {
        ToLeft(Slide1, Slide0);
    }
});


let images=document.querySelectorAll(".portfolio_img");

for(let i=0;i<images.length;i++){
 images[i].addEventListener("click",function () {
     for (let j=0;j<images.length;j++){
         images[j].classList.remove("active_img");
     }
     images[i].classList.toggle("active_img");
 });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let suffle_buttons=document.querySelectorAll(".button_for_shuffle");
let imgchild=document.querySelector(".PortfolioImg");

for(let i=0;i<suffle_buttons.length;i++){
    suffle_buttons[i].addEventListener("click",function () {
        if (suffle_buttons[i].classList.contains("button_for_shuffle_active")===false) {
            let b;
            for (let j = 0; j < 60; j++) {
                let rand = getRandomInt(12);
                b = images[rand];
                imgchild.replaceChild(images[0], images[rand]);
                imgchild.prepend(b);
            }
            for (let j = 0; j < suffle_buttons.length; j++) {
                suffle_buttons[j].classList.remove("button_for_shuffle_active");
            }
            suffle_buttons[i].classList.add("button_for_shuffle_active");
        }
    });
}
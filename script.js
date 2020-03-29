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

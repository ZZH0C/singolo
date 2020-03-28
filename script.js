let Arrow_Left = document.querySelector("#ArrowL");
let Arrow_Right = document.querySelector("#ArrowR");
let Slide0 = document.querySelector(".Slide_0");
let Slide1 = document.querySelector(".Slide_1");

Arrow_Left.addEventListener("click", function () {
    Slide0.classList.toggle("hidden");

    Slide1.classList.toggle("hidden");
});

Arrow_Right.addEventListener("click", function () {

    Slide0.classList.toggle("hidden");

    Slide1.classList.toggle("hidden");

});
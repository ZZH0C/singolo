let Arrow_Left = document.querySelector("#ArrowL");
let Arrow_Right = document.querySelector("#ArrowR");
let Slide0 = document.querySelector(".Slide_0");
let Slide1 = document.querySelector(".Slide_1");

Arrow_Left.addEventListener("click", function () {
    Slide0.classList.toggle("hidden");
    Slide1.classList.toggle("hidden");


});

Arrow_Right.addEventListener("click", function () {

if (Slide1.classList.contains("hidden")) {
    Slide1.classList.toggle("hidden");
    Slide1.classList.toggle("move_Left");
    Slide0.classList.toggle("move_Right");
    Slide0.addEventListener("transitionend", function () {
        Slide0.classList.add("hidden");
        Slide1.classList.remove("move_Left");
        Slide0.classList.remove("move_Right");
    });
}

    if (Slide0.classList.contains("hidden")) {
        Slide0.classList.toggle("hidden");

        Slide1.classList.toggle("move_Right");
        Slide1.addEventListener("transitionend", function () {
            Slide1.classList.add("hidden");
            Slide0.classList.remove("move_Left");
            Slide1.classList.remove("move_Right");
        });

    }
});

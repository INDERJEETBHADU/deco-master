function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}

const Preload = document.getElementById("preloader")
setTimeout(() => {
    console.log("Delayed for 1 second.");

    Preload.classList.add("trns")

}, "3000");


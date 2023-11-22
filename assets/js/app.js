function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}

const Preload = document.getElementById("preloader")
setTimeout(() => {
    document.body.classList.remove("overflow-hidden");
    Preload.classList.add("trns")
}, "3000");



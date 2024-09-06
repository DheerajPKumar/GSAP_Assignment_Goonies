let mainHeading = document.querySelector(".container__footer-heading");
let toTop = document.querySelector(".container__footer-totop");

gsap.to(mainHeading, {
    opacity: 1,
    duration: 1,
    y: 0,
    delay: 1
})

gsap.to(toTop, {
    opacity: 1,
    duration: 1.5,
    y: 0,
    delay: 1
})


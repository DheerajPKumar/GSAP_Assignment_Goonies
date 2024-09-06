let mikeyCard = document.querySelector(".container__goonies-mikey");
let chunkCard = document.querySelector(".container__goonies-chunk");
let dataCard = document.querySelector(".container__goonies-data");
let mouthCard = document.querySelector(".container__goonies-mouth");
let mikeyCardData = document.querySelector(".container__goonies-mikeydata");
let chunkCardData = document.querySelector(".container__goonies-chunkdata");
let dataCardData = document.querySelector(".container__goonies-datadata");
let mouthCardData = document.querySelector(".container__goonies-mouthdata");

mikeyCard.addEventListener("mouseenter", () => {
    gsap.to(mikeyCardData, {
        display: "block",
        translateY: "-20px",
        duration: 0.5,
    });
});

mikeyCard.addEventListener("mouseleave", () => {
    gsap.to(mikeyCardData, {
        display: "none",
        translateY: "80px",
        duration: 0.5,
    });
});

chunkCard.addEventListener("mouseenter", () => {
    gsap.to(chunkCardData, {
        display: "block",
        translateY: "-20px",
        duration: 0.5,
    });
});

chunkCard.addEventListener("mouseleave", () => {
    gsap.to(chunkCardData, {
        display: "none",
        translateY: "80px",
        duration: 0.5,
    });
});

dataCard.addEventListener("mouseenter", () => {
    gsap.to(dataCardData, {
        display: "block",
        translateY: "-20px",
        duration: 0.5,
    });
});

dataCard.addEventListener("mouseleave", () => {
    gsap.to(dataCardData, {
        display: "none",
        translateY: "80px",
        duration: 0.5,
    });
});

mouthCard.addEventListener("mouseenter", () => {
    gsap.to(mouthCardData, {
        display: "block",
        translateY: "-20px",
        duration: 0.5,
    });
});

mouthCard.addEventListener("mouseleave", () => {
    gsap.to(mouthCardData, {
        display: "none",
        translateY: "80px",
        duration: 0.5,
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".container__never-image4C", {
        y: 800, 
        rotation: 270, 
        scrollTrigger: {
            trigger: ".container__never", 
            start: "top 80%", 
            end: "bottom 10%", 
            scrub: true, 
            markers: false 
        }
    });
    
    gsap.to(".container__never-image1C", {
        y: -900, 
        scrollTrigger: {
            trigger: ".container__never", 
            start: "top 80%", 
            end: "bottom 10%", 
            scrub: true, 
            markers: false 
        }
    });

    gsap.to(".container__never-second", {
        rotation: -40, 
        scrollTrigger: {
            trigger: ".container__never", 
            start: "top 80%", 
            end: "bottom 10%", 
            scrub: true, 
            markers: false
        }
    });

    gsap.to(".container__never-image3C", {
        y: 900, 
        rotation: 270, 
        scrollTrigger: {
            trigger: ".container__never", 
            start: "top 90%", 
            end: "bottom 10%", 
            scrub: true, 
            markers: false 
        }
    });

    gsap.to(".container__never-image5C", {
        y: -600, 
        rotation: 270, 
        scrollTrigger: {
            trigger: ".container__never", 
            start: "top 80%", 
            end: "bottom 10%", 
            scrub: true, 
            markers: false 
        }
    });

    gsap.to('.container__never-title', {
        opacity: 1,
        scrollTrigger: {
            trigger: ".container__never",
            start: "top 80%",  
            end: "bottom 20%",  
            scrub: true,
            markers: false  
        }
    });

    gsap.to('.container__never-title', {
        opacity: 0,
        scrollTrigger: {
            trigger: ".container__never",
            start: "bottom 10%",  
            end: "bottom 5%",  
            scrub: true,
            markers: false  
        }
    });

    gsap.from(".container__skullpeople-skullC--image", {
        scale: 0,
        scrollTrigger: {
            trigger: ".container__skullpeople", 
            start: "top 80%",  
            end: "bottom 20%", 
            scrub: 0.3,
        }
    });

    gsap.from(".container__skullpeople-peopleC--image", {
        // y: 100,
        scrollTrigger: {
            trigger: ".container__skullpeople", 
            start: "top 100%", 
            end: "bottom 20%", 
            scrub: 0.3,
        }
    });
});

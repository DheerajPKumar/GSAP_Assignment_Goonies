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
        y: 400,
        scrollTrigger: {
            trigger: ".container__skullpeople", 
            start: "top 100%", 
            end: "bottom 20%", 
            scrub: 0.3,
        }
    });
});

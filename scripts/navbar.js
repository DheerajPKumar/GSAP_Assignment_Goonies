gsap.to(".container__navbar-progress", {
    x: 0,
    opacity:1,
    scrollTrigger: {
        trigger: ".container__plotsection-textcontainer", 
        start: "top 80%", 
        end: "bottom 10%",
        scrub: true,
        markers: false,
        ease: "power3.out",
    }
});

gsap.to(".container__navbar-progress", {
    x: 310,
    scrollTrigger: {
        trigger: ".container__goonies",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        markers: false,
        ease: "power3.out",
    }
});

gsap.fromTo(".container__navbar-progress", {
    x: 310,
}, {
    x: 635,
    scrollTrigger: {
        trigger: ".container__credits1",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        markers: false,
        ease: "power3.out",
    }
});
gsap.fromTo(".container__navbar-progress", {
    x: 635,
}, {
    x: 960,
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        markers: false,
        ease: "power3.out",
    }
});
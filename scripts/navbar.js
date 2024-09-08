gsap.to(".container__navbar-progress", {
    // x: 0,
    left: "11%",
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
    // x: 310,
    left: "36%",
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
    // x: 310,
    left: "36%",
}, {
    // x: 635,
    left: "62%",
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
    // x: 635,
    left: "62%",
}, {
    // x: 960,
    left: "87%",
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        markers: false,
        ease: "power3.out",
    }
});
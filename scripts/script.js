let sectionId = document.querySelector("#plot");
let plotSection = document.querySelector(".container__plotsection");
let backgroundSection = document.querySelector(".container__plotsection-background");
let mainSection = document.querySelector(".container__plotsection-main");
let scrollSection = document.querySelector(".container__plotsection-scroll");
let textContainer = document.querySelector(".container__plotsection-textcontainer");

gsap.to(mainSection, {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: plotSection,
    scroller: "body",
    start: "top top", 
    end: "top+=200px",
    scrub: 0.3,
    // markers: true,
  },
});

const timelineHeader = gsap.timeline({
  scrollTrigger: {
    // id: "zoom",
    trigger: sectionId,
    scroller: "body",
    scrub: 0.3,
    start: "top top",
    end: "bottom+=50px",
    pin: true,
    // markers: true,
  },
});

gsap.set(textContainer, { 
  opacity: 0 
});

gsap.to(textContainer, {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: plotSection,
    scroller: "body",
    start: "top+=200px",
    end: "top+=600px",
    scrub: 0.3,
    // markers: true,
  },
});

timelineHeader
.to(backgroundSection, { 
  scale: 1.1 
}, "sameTime")
.to(scrollSection, { 
  scale: 2 
}, "sameTime");

let sectionId = document.querySelector("#plot");
let plotSection = document.querySelector(".container__plotsection");
let backgroundSection = document.querySelector(
  ".container__plotsection-background"
);
let mainSection = document.querySelector(".container__plotsection-main");
let scrollSection = document.querySelector(".container__plotsection-scroll");
let textContainer = document.querySelector(
  ".container__plotsection-textcontainer"
);

gsap.to(mainSection, {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: plotSection,
    scroller: "body",
    start: "top top",
    end: "top+=200px",
    scrub: 0.3,
  },
});

let timelineHeader = gsap.timeline({
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
  opacity: 0,
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
  .to(
    backgroundSection,
    {
      scale: 1.1,
    },
    "sameTime"
  )
  .to(
    scrollSection,
    {
      scale: 2,
    },
    "sameTime"
  );

function updateBlur() {
  let scrollY = window.scrollY;
  let textBox = document.querySelector(
    ".container__plotsection-textcontainer"
  );
  let bgImage = document.querySelector(
    ".container__plotsection-backgroundImage"
  );
  let bgImage2 = document.querySelector(
    ".container__plotsection-scrollImage"
  );

  if (textBox) {
    let textBoxBottom = textBox.getBoundingClientRect().bottom;

    let blurValue = scrollY > textBoxBottom ? (scrollY - textBoxBottom) / 20 + "px" : "0px";

    let opacityValue = scrollY > textBoxBottom ? 1 - (scrollY - textBoxBottom) / 500 : 1;

    bgImage.style.filter = `blur(${blurValue})`;
    bgImage2.style.filter = `blur(${blurValue})`;

    bgImage.style.opacity = opacityValue;
    bgImage2.style.opacity = opacityValue;
    
    if (textBox) {
      let scrollY = window.scrollY;

      let drawLine = document.querySelector(
        ".container__plotsection-navigationline"
      );

      let lineHeight =
        scrollY > textBoxBottom ? scrollY - textBoxBottom + "px" : "0px";

      drawLine.style.height = lineHeight;
      drawLine.style.opacity = scrollY > textBoxBottom ? 1 : 0;
      let maxVal = 200;
      if ((lineHeight, 10) >= maxVal) {
        gsap.to([".container__plotsection"], {
          opacity: 0,
          duration: 1,
        });
      } else {
        gsap.to([".container__plotsection"], {
          opacity: 1,
          duration: 1,
        });
      }
    }
  }
}

window.addEventListener("scroll", updateBlur);

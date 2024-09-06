let imageContainer = document.querySelector('.container__credits1-productionC');
let image = document.querySelector('.container__credits1-productionC--image');
let releaseHeadingContainer = document.querySelector(".container__credits1-releasedateC");
let heading1 = document.querySelector(".container__credits1-releaseheadings--year");
let heading2 = document.querySelector(".container__credits1-releaseheadings--year2");

releaseHeadingContainer.addEventListener('mouseenter', () => {
    // gsap.to(heading1, {
    //     transform: 'translateY(30px)',
    //     display: "none",
    //     duration: 0.2,
    //     ease: "power3.out"
    // })

    gsap.to(heading2, {
        transform: 'translateY(10px)',
        display: "block",
        // duration: 2,
        // ease: "power3.out"
    })
});


imageContainer.addEventListener('mousemove', (dets) => {
    let containerWidth = imageContainer.offsetWidth;
    let xVal = dets.offsetX;

    let xPos = (xVal / containerWidth) - 0.5;

    let moveX = xPos * -40; 

    image.style.transform = `translate(${moveX}%`;
});

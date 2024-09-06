let btn = document.querySelector(".container__gallerycontainers-buttondiv--button");
let backbtn = document.querySelector(".container__gallerycontainers-buttondiv--backbutton");

btn.addEventListener("click", () => {
    console.log("first")
    gsap.to(".commonImage", {
        width: "100%",
        height: "100%",
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to((".container__gallerycontainers-buttondiv"), {
        top: "80%",
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
    })

    gsap.to((".container__gallerycontainers-buttondiv--heading"), {
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    })

    gsap.to((".container__gallerycontainers-buttondiv--button"), {
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    })

    gsap.to((".container__gallerycontainers-buttondiv--backbutton"), {
        opacity: 1,
        duration: 2,
        ease: "power3.out"
    })
});

backbtn.addEventListener("click", () => {
    console.log(("backBtn"));

    gsap.to((".container__gallerycontainers-buttondiv--backbutton"), {
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })

    gsap.to((".container__gallerycontainers-buttondiv"), {
        // transform: "translate (0%, 0%)",
        top: "50%",
        left: "50%",
        x: -50,
        y: -50,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
    })

    gsap.to((".container__gallerycontainers-buttondiv--button"), {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
    })

    gsap.to((".container__gallerycontainers-buttondiv--heading"), {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
    })

    gsap.to(".container__gallerycontainers-container1--image1", {
        width: "25%",
        height: "25%",
        x: "200%",
        y: "120%",
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".container__gallerycontainers-container1--image2", {
        width: "50%",
        height: "50%",
        x: "-200%",
        y: "40%",
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".container__gallerycontainers-container1--image3", {
        width: "90%",
        height: "90%",
        x: "-80%",
        y: "40%",
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".container__gallerycontainers-container1--image4", {
        width: "90%",
        height: "90%",
        x: "0%",
        y: "80%",
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".container__gallerycontainers-container1--image5", {
        width: "60%",
        height: "60%",
        x: "20%",
        y: "170%",
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".container__gallerycontainers-container1--image6", {
        width: "60%",
        height: "60%",
        x: "230%",
        y: "10%",
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".container__gallerycontainers-container1--image7", {
        width: "30%",
        height: "30%",
        x: "70%",
        y: "150%",
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".container__gallerycontainers-container1--image8", {
        width: "60%",
        height: "60%",
        x: "70%",
        y: "40%",
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".container__gallerycontainers-container1--image9", {
        width: "35%",
        height: "35%",
        x: "50%",
        y: "300%",
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".container__gallerycontainers-container1--image10", {
        width: "35%",
        height: "35%",
        x: "150%",
        y: "200%",
        duration: 1.5,
        ease: "power3.out"
    });
});
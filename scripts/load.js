function start(){
    let currEl = document.querySelector(".load");
    let currVal = 0;

    function update(){
        if(currVal >= 100){
            return;
        }

        currVal += Math.floor(Math.random() * 10) + 1;

        if (currVal > 100) {
            currVal = 100;
        }
        
        currEl.textContent = currVal + "%";
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(update, delay);
    }
    update();
}

start();

gsap.to(".load",{
    delay: 3.5,
    opacity: 0,
});

gsap.to(".load__overlay-progressbar",{
    delay: 3.5,
    height: 0,
});

gsap.from(".container__navbar",{
    delay: 4,
    y: -700,
});
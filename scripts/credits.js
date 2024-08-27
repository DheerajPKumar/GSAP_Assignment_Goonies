const imageContainer = document.querySelector('.container__credits1-productionC');
const image = document.querySelector('.container__credits1-productionC--image');

imageContainer.addEventListener('mousemove', (dets) => {
    let containerWidth = imageContainer.offsetWidth;
    let xVal = dets.offsetX;

    const xPos = (xVal / containerWidth) - 0.5;

    const moveX = xPos * -40; 

    image.style.transform = `translate(${moveX}%`;
});

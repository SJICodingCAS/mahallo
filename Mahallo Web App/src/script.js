
/* script.js */
const container = document.getElementById('container');
const scrollContainer = document.getElementById('scroll-container');

let scale = 1;
let lastScale = 1;
let startX = 0;
let startY = 0;
let lastX = 0;
let lastY = 0;

container.addEventListener('touchstart', handleTouchStart, false);
container.addEventListener('touchmove', handleTouchMove, false);
container.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
    if (event.touches.length === 2) {
        lastScale = scale;
    } else if (event.touches.length === 1) {
        const touch = event.touches[0];
        startX = touch.pageX - lastX;
        startY = touch.pageY - lastY;
    }
}

function handleTouchMove(event) {
    event.preventDefault();

    if (event.touches.length === 2) {
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const distance = getDistance(touch1, touch2);
        const originDistance = getDistance(event.targetTouches[0], event.targetTouches[1]);

        scale = lastScale * (distance / originDistance);

        scrollContainer.style.transform = `scale(${scale})`;
    } else if (event.touches.length === 1) {
        const touch = event.touches[0];
        lastX = touch.pageX - startX;
        lastY = touch.pageY - startY;

        scrollContainer.style.transform = `translate(${lastX}px, ${lastY}px) scale(${scale})`;
    }
}

function handleTouchEnd(event) {
    if (event.touches.length < 2) {
        lastScale = scale;
    }
}

function getDistance(touch1, touch2) {
    return Math.sqrt(Math.pow(touch1.pageX - touch2.pageX, 2) + Math.pow(touch1.pageY - touch2.pageY, 2));
}

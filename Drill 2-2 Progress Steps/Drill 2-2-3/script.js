const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive ++;

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update();
})

prev.addEventListener('click', () => {
    currentActive --;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, idx) => {
        
    })

    const actives = document.querySelectorAll('.active')

    console.log(currentActive)
}
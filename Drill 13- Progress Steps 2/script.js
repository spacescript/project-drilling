const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActives = 1;

next.addEventListener('click', () => {
    currentActives++;

    if (currentActives > circles.length) {
        let currentActives = circles.length;
    }

    update();
})

prev.addEventListener('click', () => {
    currentActives--;

    if (currentActives < 1) {
        let currentActives = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActives) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}
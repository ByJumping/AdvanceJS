"Use strict";

let titleLeft = document.querySelector('.title_left');
let titleRight = document.querySelector('.title_right');

titleLeft.addEventListener('click', swap);
titleRight.addEventListener('click', swap);

function swap() {
    if (!titleLeft.classList.contains('title__swap_left') || 
    !titleLeft.classList.contains('title__swap_left')) {
        titleLeft.classList.add('title__swap_left');
        titleRight.classList.add('title__swap_right');
    } else {
        titleLeft.classList.remove('title__swap_left');
        titleRight.classList.remove('title__swap_right');
    }
}
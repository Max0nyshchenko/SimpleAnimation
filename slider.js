const hero = document.querySelector('.hero');
const heroContainer = document.querySelector('.hero-container');
const images = document.querySelectorAll('.hero img');
const size = heroContainer.clientWidth;
const btn = document.querySelector('#btn');
let repeat = images.length;

let counter = 0;

let SWITCH = '-110';

hero.style.gridTemplateColumns = `100% 10% 100% 10% 100% 10% 100% 10% 100% 10% 100% 10% 100% 10% 100% 10%`; 

for (let i = 0; i < images.length; i++) {
    images[i].style.width = `100%`;
}

btn.addEventListener('click', () => {
    hero.style.transition = 'transform 0.7s';
    counter++;
    hero.style.transform = `translateX(${SWITCH * counter}%)`;
})

hero.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        hero.style.transition = 'none';
        counter = images.length - images.length;
        hero.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const images = document.querySelectorAll('.hero img');

const tl = new TimelineMax();

let counter = 0;
const size = images[0].clientWidth;


hero.style.transform = 'translateX(' + (-size * counter) + 'px)';

hamburger.addEventListener('click', () => {
    hero.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    hero.style.transform = 'translate(' + (-size * counter) + 'px)';

    if(counter > 5) {
        counter = 0;
    }
});

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut }, '-=1.2')
.fromTo(
    logo,
    0.5,
    {opacity: '0',
    x: '30'},
    {opacity: '1',
    x: '0'},
    '-=0.5'
)
.fromTo(
    hamburger,
    0.5,
    {
        opacity: '0',
        x: '-30'
    },
    {
        opacity: '0.6',
        x: '0'
    },
    '-=0.5'
)
.fromTo(
    headline,
    0.5,
    {
        opacity: '0',
        y: '-30'
    },
    {
        opacity: '1',
        y: '0'
    }
);

hamburger.addEventListener('mouseover', ()=>{
    hamburger.style.opacity = '1';
    hamburger.style.transition = '0.5s';
    hamburger.style.transform = 'scale(1.1, 1.1)';
});

hamburger.addEventListener('mouseout', ()=>{
    hamburger.style.opacity = '0.6';
    hamburger.style.transition = '0.5s';
    hamburger.style.transform = 'scale(1, 1)';
});

hamburger.addEventListener('mousedown', ()=>{
    hamburger.style.transform = 'scale(0.9,0.9)';
    hamburger.style.transition = '0s';
});

hamburger.addEventListener('mouseup', ()=>{
    hamburger.style.transform = 'scale(1, 1)';
    hamburger.style.transition = '0s';
});



const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');

// Hamburger menu
hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Full Screen Scroll config
new fullScroll({

    // parent container
    container : 'main',

    // content section
    sections : 'showcase-scroll',

    // animation speed
    animateTime : 0.7,

    // easing for animation
    animateFunction : 'ease',

    // current position
    currentPosition: 0,

    // display dots navigation
    displayDots: true,

    // where to place the dots navigation
    dotsPosition: 'left'

});